import React from 'react'
import { EstructurePage } from '../../Components/Layouts/EstructurePage/EstructurePage'
import {Table} from '../../Components/UI/Table/Table'
import { ColumTable } from '../../Components/UI/ColumTable/ColumTable'
import { FileTable } from '../../Components/UI/FileTable/FileTable'

export const Prestamos = () => {
  return (
    <EstructurePage>
      <div>
              <button>AGREGAR PRESTAMO</button>
            </div>
            <div>
              <Table>
                <ColumTable>
                  <tr>
                    <th>NOMBRE</th>
                    <th>EQUIPO</th>
                    <th>CANTIDAD EQUIPOS</th>
                    <th>FECHA DE PRESTAMO</th>
                    <th>ESTADO</th>
                    <th>DESCRIPCION</th>
                  </tr>
                </ColumTable>
                <FileTable>
                  <tr>
                    <td>JHON</td>
                    <td>
                      <select id="opciones" name="opciones">
                        <option value="opcion1">IMPRESORA ETIQUETAS</option>
                        <option value="opcion2">IMPRESORA USB O RED</option>
                        <option value="opcion3">BALANZA</option>
                      </select>
                    </td>
                    <td>1</td>
                    <td>febrero 2025</td>
                    <td>
                      <select id="opciones" name="opciones">
                        <option value="opcion1">EN PRESTAMO</option>
                        <option value="opcion2">ENTREGADO</option>
                      </select>
                    </td>
                    <td>
                      La impresora se encuentra en garantia por un daño en la board
                    </td>
                  </tr>
                </FileTable>
              </Table>
            </div>
    </EstructurePage>
  )
}
