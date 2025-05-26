import React from 'react'
import { Navbar } from '../../UI/Navbar/Navbar'
import { ItemsNav } from '../../UI/ItemsNav/ItemsNav'
import './Header.css'
export const Header = () => {
  return (
    <header className='navbarPrincipal'>
        <Navbar>
            <ItemsNav linkRoute='/' contentItem='INVENTARIO'/>
            <ItemsNav linkRoute='/Garantias' contentItem='GARANTIAS'/>
            <ItemsNav linkRoute='/Prestamos' contentItem='PRESTAMOS'/>
            <ItemsNav linkRoute='/Envios' contentItem='ENVIOS'/>
        </Navbar>
    </header>
  )
}
