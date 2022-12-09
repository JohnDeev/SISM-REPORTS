
import { pool } from '../db.js'
import date from 'moment'

export const getUsers = async (req, res) => {
  const today = date().format('YYYY/MM/D');
  const result = await pool.query(`select * from iteracciones_bot where completado = 3 and fecha_iteraccion = (?)`, today)

  res.json({
    RES: result[0]
  })
}