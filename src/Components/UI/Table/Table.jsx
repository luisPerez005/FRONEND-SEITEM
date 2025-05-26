import React from 'react'
import './Table.css'
export const Table = ({children}) => {
  return (
     <table className='table'>
      {children}
    </table>
  )
}
