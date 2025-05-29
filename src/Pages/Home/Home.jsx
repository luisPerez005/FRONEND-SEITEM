import React from "react";
import { useState } from "react";
import { EstructurePage } from "../../Components/Layouts/EstructurePage/EstructurePage";
import { ColumTable } from "../../Components/UI/ColumTable/ColumTable";
import { FileTable } from "../../Components/UI/FileTable/FileTable";
import { Table } from "../../Components/UI/Table/Table";
import { Form } from "../../Components/UI/Form/Form";
export const Home = () => {
  const [formActivate, setFormActivate] = useState(false);

  return (
    <>
      <EstructurePage>
        <div>
          <button onClick={() => setFormActivate(true)}>
            AGREGAR NUEVOS EQUIPOS
          </button>
        </div>
        <div>
          {formActivate ? (
            <Form />
          ) : (
            <Table>
              <ColumTable>
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
              </ColumTable>
              <FileTable>
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
              </FileTable>
            </Table>
          )}
        </div>
      </EstructurePage>
    </>
  );
};
