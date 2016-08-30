import React from 'react'
import { Link } from 'react-router'

const Menu = ({ candidateType, handleMenu }) => {
  return (
    <nav className='menu'>
      <ul className='menu-list'>
        <li className='menu-item'>
          <Link to={`/prefeitos`} activeClassName='active'>
            <span onClick={() => handleMenu('prefeitos')} className='menu-link'>Prefeitos</span>
          </Link>
        </li>
        <li className='menu-item'>
          <Link to={`/vereadores`} activeClassName='active'>
          <span onClick={() => handleMenu('vereadores')} className='menu-link'>Vereadores</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
