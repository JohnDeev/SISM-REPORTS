import { Router } from 'express'
import { getUsers } from '../controllers/users.controller.js'
const router = Router()

router.get('/user', getUsers)

// router.get('/user', (req, res) => res.send('obteniendo usuarios'))

// router.post('/user', (req, res) => res.send('creando usuarios'))

export default router