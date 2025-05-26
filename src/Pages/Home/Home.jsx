import React from 'react'
import { EstructurePage } from '../../Components/Layouts/EstructurePage/EstructurePage'
import { Table } from '../../Components/UI/Table/Table'
export const Home = () => {
  return (
    <>
    <EstructurePage>
      <div>
        <button>AGREGAR NUEVOS EQUIPOS</button>
      </div>
      <div>
        <Table />
      </div>
        
      </EstructurePage>
    </>
  )
}


