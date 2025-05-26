import React from 'react'
import './Table.css'
export const Table = () => {
  return (
     <table className='table'>
      <thead>
        <tr>
          <th>TORRE TINY</th>
          <th>TORRE GRANDE</th>
          <th>MONITOR</th>
          <th>LECTOR BIDIRECCIONAL</th>
          <th>LECTOR OMNIDIRECCIONAL</th>
          <th>IMPRESORA USB</th>
          <th>IMPRESORA RED</th>
          <th>TECLADO</th>
          <th>MOUSE</th>
          <th>IMPRESORA ETIQUETAS</th>
          <th>BALANZA</th>
          <th>FECHA INVENTARIO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>17</td>
          <td>4</td>
          <td>16</td>
          <td>4</td>
          <td>0</td>
          <td>2</td>
          <td>1</td>
          <td>17</td>
          <td>17</td>
          <td>1</td>
          <td>1</td>
          <td>FECHA</td>
        </tr>
      </tbody>
    </table>
  )
}
