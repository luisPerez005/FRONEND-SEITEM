import React from 'react'
import { NavLink } from 'react-router-dom'
import './ItemsNav.css'
export const ItemsNav = ({contentItem, linkRoute}) => {
  return (
    <li className='items'>
      <NavLink to={linkRoute}>
        {contentItem}
      </NavLink>
    </li>
  )
}
