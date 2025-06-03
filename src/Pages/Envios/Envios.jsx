import React from 'react'
import { EstructurePage } from '../../Components/Layouts/EstructurePage/EstructurePage'
import {Table} from '../../Components/UI/Table/Table'
import { ColumTable } from '../../Components/UI/ColumTable/ColumTable'
import { FileTable } from '../../Components/UI/FileTable/FileTable'


export const Envios = () => {
  return (
    <EstructurePage>
           <div>
                   <button>ENVIO NUEVO</button>
                 </div>
                 <div>
                   <Table>
                     <ColumTable>
                       <tr>
                         <th>CLIENTE</th>
                         <th>EQUIPOS</th>
                         <th>COMERCIAL</th>
                         <th>ESTADO DE ENVIO</th>
                         <th>FECHA DE SALIDA</th>
                       </tr>
                     </ColumTable>
                     <FileTable>
                       <tr>
                         <td>Surti Hogar natagaima</td>
                         <td>
                           <ul>
                            <li>Torre Tiny</li>
                            <li>Monitor</li>
                            <li>Teclado y mouse</li>
                            <li>impresora usb</li>
                           </ul>
                         </td>
                         <td>Yenny</td>
                         
                         <td>
                           <select id="opciones" name="opciones">
                             <option value="opcion1">EN PROCESO</option>
                             <option value="opcion2">LISTO</option>
                           </select>
                         </td>
                         <td>febrero 2025</td>
                       </tr>
                     </FileTable>
                   </Table>
                 </div>
    </EstructurePage>
  )
}
