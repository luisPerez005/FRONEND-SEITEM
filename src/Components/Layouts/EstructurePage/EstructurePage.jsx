import React from 'react'
import { Header } from '../Header/Header'
import './EstructurePage.css'
export const EstructurePage = ({children}) => {
  return (
    <div className='principal'>
      <Header />
        <main className='estructure'>
            {children}
        </main>
    </div>
  )
}
