import React from "react";
import { EstructurePage } from "../../Components/Layouts/EstructurePage/EstructurePage";
import { Table } from "../../Components/UI/Table/Table";
import { ColumTable } from "../../Components/UI/ColumTable/ColumTable";
import { FileTable } from "../../Components/UI/FileTable/FileTable";
export const Garantias = () => {
  return (
    <EstructurePage>
      <div>
        <button>AGREGAR GARANTIA</button>
      </div>
      <div>
        <Table>
          <ColumTable>
            <tr>
              <th>CLIENTE</th>
              <th>EQUIPO</th>
              <th>CANTIDAD EQUIPOS</th>
              <th>FECHA INGRESO</th>
              <th>ESTADO GARANTIA</th>
              <th>ENTIDAD</th>
              <th>ESTADO DE ENTREGA</th>
              <th># RADICADO</th>
              <th>DESCRIPCION</th>
            </tr>
          </ColumTable>
          <FileTable>
            <tr>
              <td>Surti Hogar natagaima</td>
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
                  <option value="opcion1">EN PROCESO</option>
                  <option value="opcion2">LISTO</option>
                </select>
              </td>
              <td>
                <select id="opciones" name="opciones">
                  <option value="opcion1">DIGITAL POS</option>
                  <option value="opcion2">CREDI-COMPUTO</option>
                  <option value="opcion3">IZC</option>
                </select>
              </td>
              <td>
                <select id="opciones" name="opciones">
                  <option value="opcion1">GARANTIA EN PROCESO</option>
                  <option value="opcion2">EN OFICINA</option>
                  <option value="opcion3">SE ENVIO AL CLIENTE</option>
                </select>
              </td>
              <td> FOG12720</td>
              <td>
                La impresora se encuentra en garantia por un daño en la board
              </td>
            </tr>
          </FileTable>
        </Table>
      </div>
    </EstructurePage>
  );
};
