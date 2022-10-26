import express from 'express'

const app = express()
app.get('/user', (req, res) => res.send('obteniendo usuarios'))
app.post('/user', (req, res) => res.send('creando usuarios'))
app.listen(6660)
console.log("Server running on port 6660")