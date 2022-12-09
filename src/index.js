import express from 'express'
import userRoutes from './routes/users.routes.js'
import { Server as WebSocketServer } from 'socket.io'
import http from 'http'
import morgan from 'morgan'
import cors from 'cors'
import { PORT } from './config.js'
import date from 'moment'
import { pool } from './db.js'

// ! CONFIGURACION DEL SERVIDOR WEBSOCKET
const app = express()
const server = http.createServer(app)
const io = new WebSocketServer(server, {
  cors: {
    origin: '*',
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
})

app.use(cors())
// app.use(morgan("dev"))
app.use(morgan("dev"), userRoutes)
console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS)


io.on('connection', (socket) => {
  // console.log(socket, "Se ha conectado")
  // console.log(socket.id)
  console.log('a user connected');

  const emitList = async () => {


    // const today = '2022-11-09';
    const today = date().format('YYYY/MM/DD');

    const result = await pool.query(`select ib.id_iteraccion,usr.Identificación_usuario as 'ID PACIENTE',
    concat_ws(' ',usr.Primer_nombre,usr.Segundo_nombre,usr.Primer_apellido,usr.Segundo_apellido) as 'NOMBRE DEL PACIENTE', 
    esp.Especialidad as 'ESPECIALIDAD',
    ib.hora_iteraccion as 'HORA DE INTERACCION', 
    a.idhora as 'HORA CITA',
    e.Nombre_empleado as 'NOMBRE MEDICO',
    ib.celular_iteraccion as 'CELULAR DE INTERACCION', 
    usr.Teléfono as 'CELULAR DEL PACIENTE'
    from iteracciones_bot ib 
    inner join usuarios usr 
    on ib.documento  = usr.Identificación_usuario 
    inner join agenda a 
    on a.idagenda = ib.id_agenda_id and a.idusuario = usr.Identificación_usuario
    inner join empleados e
    on e.Código_empleado = a.idmedico
    inner join tvespecialidades esp
    on esp.CUPS = a.TipoCita
    where completado = 3 and a.idhora >= TIME(NOW()) and  fecha_iteraccion = '${today}'`,)
    io.emit('uncanceledList', result[0])
    // console.log(result[0])
    return result[0]
  }

  emitList()
  setInterval(() => {
    emitList()

  }, 30000)
});

server.listen(PORT)
console.log("Server running on port", PORT)