import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../image/logo.png'

function Navbar() {
  const [showNav, setShowNav] = useState('false')
  return (
    <div className='navbar'>
      <div className='nav_contain'>
        <div className='logo'>
          <img src={Logo} alt='' />
        </div>
        <div
          onClick={() => setShowNav(!showNav)}
          className={showNav ? 'hamburger' : 'hamburger toggle'}
        >
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
        <ul className={showNav ? 'nav_list' : 'nav_list open'}>
          <li className='active'>About Us</li>
          <li>Portfolio</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
