import React from 'react'
import { Link } from 'react-router'

const Menu = (props) => {
  return (
    <nav className='menu'>
      <ul className='menu-list'>
        <li className='menu-item'>
          <Link to={`/${props.city}/prefeitos/`} activeClassName='active'>
            <span onClick={() => props.handleMenu('prefeitos')} className='menu-link'>Prefeitos</span>
          </Link>
        </li>
        <li className='menu-item'>
          <Link to={`/${props.city}/vereadores/`} activeClassName='active'>
          <span onClick={() => props.handleMenu('vereadores')} className='menu-link'>Vereadores</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
