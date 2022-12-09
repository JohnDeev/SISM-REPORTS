import { createPool } from 'mysql2/promise'

export const pool = createPool({
  host: '192.168.1.240',
  user: 'dnaplus',
  password: "Dnaplus2022",
  port: 3307,
  database: 'dnaplus_bs'
})