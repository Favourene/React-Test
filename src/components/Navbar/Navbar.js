import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../image/logo.png'

function Navbar() {
  const [showNav, setShowNav] = useState('false')
  const [navigatePage, setNavigatePage] = useState('')
  return (
    <div className='navbar'>
      <div className='nav_contain'>
        <div className='logo'>
          <a href='#home'>
            <img src={Logo} alt='' />
          </a>
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
          <a
            href='#about'
            onClick={() => {
              setNavigatePage('about')
              setShowNav(!showNav)
            }}
          >
            <li className={navigatePage === 'about' ? 'active' : ''}>
              About Us
            </li>
          </a>
          <a
            href='#portfolio'
            onClick={() => {
              setNavigatePage('portfolio')
              setShowNav(!showNav)
            }}
          >
            <li className={navigatePage === 'portfolio' ? 'active' : ''}>
              Portfolio
            </li>
          </a>
          <a
            href='#experience'
            onClick={() => {
              setNavigatePage('experience')
              setShowNav(!showNav)
            }}
          >
            <li className={navigatePage === 'experience' ? 'active' : ''}>
              Experience
            </li>
          </a>
          <a
            href='#contact'
            onClick={() => {
              setNavigatePage('contact')
              setShowNav(!showNav)
            }}
          >
            <li className={navigatePage === 'contact' ? 'active' : ''}>
              Contact
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
