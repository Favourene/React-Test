import React from 'react'
import './About.css'
import Tick from '../../image/tick.png'
import Man from '../../image/man.png'

function About() {
  return (
    <div className='about' id='about'>
      <div className='top'>
        <div>
          <h1>About Us</h1>
          <img src={Tick} alt='' />
        </div>
      </div>
      <div className='wrapper'>
        <div className='left'>
          <img src={Man} alt='' />
        </div>
        <div className='right'>
          <h1>We focus on value and excellence</h1>
          <p>
            We are focused on providing products which deliver demonstrably good
            value for our clients and end-customers – be that a specific return,
            outperforming an index or achieving returns at lower risk.​
          </p>
          <p>
            Through achieving value for the clients whose assets we manage,
            efficiently controlling costs, effectiveness and efficiency, we
            deliver value to our shareholders and wider stakeholders​
          </p>
          <button>Work with us</button>
        </div>
      </div>
    </div>
  )
}

export default About
