import React from 'react'
import Menu from './menu'
import { Link } from 'react-router'

const Header = (props) => {
  return (
    <header className='header'>
      <div className='header_wrap'>
        <div className='header-wrapper'>
          <div className='header-title'>
            <h1 className='header-logo'><Link to='/'>Eleições <span>Vale do Itapocu</span></Link></h1>
          </div>
          <div className='header-menu'>
            {props.city && <Menu {...props} /> }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
