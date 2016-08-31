import React from 'react'
import Menu from './menu'
import { Link } from 'react-router'

const Header = (props) => {
  return (
    <header className='header'>
      <div className='header-wrapper'>
        <div className='header-title'>
          <h1 className='header-logo'><Link to='/'>Eleições 2016</Link></h1>
        </div>
        <div className='header-menu'>
          <Menu {...props} />
        </div>
      </div>
    </header>
  )
}

export default Header
