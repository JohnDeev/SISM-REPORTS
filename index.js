import express from 'express'
import { pool } from './db.js'
const app = express()

app.get('/ping', async (req, res) => {
  const result = await pool.query('select * from usuarios where Identificación_usuario = 1221968097')
  res.json(result)
})

app.get('/user', (req, res) => res.send('obteniendo usuarios'))

app.post('/user', (req, res) => res.send('creando usuarios'))
app.listen(6660)
console.log("Server running on port 6660")