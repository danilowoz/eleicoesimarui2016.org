import React from 'react'
import { Link } from 'react-router'

const Menu = ({ candidateType, handleMenu }) => {
  return (
    <nav className='menu'>
      <ul className='menu-list'>
        <li className='menu-item'>
          <Link to={`/prefeitos`}>
            <span onClick={() => handleMenu('prefeitos')} className={`menu-link menu-link--prefeitos ${candidateType}`}>Prefeitos</span>
          </Link>
        </li>
        <li className='menu-item'>
          <Link to={`/vereadores`}>
          <span onClick={() => handleMenu('vereadores')} className={`menu-link menu-link--vereadores ${candidateType}`}>Vereadores</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
