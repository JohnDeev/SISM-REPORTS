import React from 'react'
import { TableBody, TableContainer, TableHead } from './HeaderElelement'
import { data } from '../../datos'

const title = [
  "DOCUMENTO ID",
  "NOMBRE DEL PACIENTE",
  "CELULAR DE INTERACCION",
]
export const Header = () => {
  return (
    <TableContainer>
      <TableHead>
        <tr>
          {title.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </TableHead>
      <TableBody>
        {data.map((item, index) => (
          <tr key={index}>
            <td key={index}>{item.id_paciente}</td>
            <td key={index}>{item.nombre_paciente}</td>
            <td key={index}>{item.interaction_phone}</td>
          </tr>
        ))}
      </TableBody>

    </TableContainer>
  )
}

