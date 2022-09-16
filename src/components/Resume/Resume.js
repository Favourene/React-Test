import React from 'react'
import './Resume.css'
import Tick from '../../image/tick.png'

function Resume() {
  return (
    <div className='resume'>
      <div className='top'>
        <div>
          <h1>Resume</h1>
          <img src={Tick} alt='' />
        </div>
      </div>
      <div className='wrapper'>
        <div className='left'>
          <div className='card'>
            <h1>2017</h1>
            <h3>Louisanna State University</h3>
            <p>Lorem Ipseum</p>
          </div>
          <div>
            <h1>2018</h1>
            <h3>Havard EdX</h3>
            <p>Principles of Design</p>
          </div>
        </div>
        <div className='left'>
          <div className='card'>
            <h1>2019</h1>
            <h3>Udacity</h3>
            <p>Product Design</p>
          </div>
          <div>
            <h1>2020</h1>
            <h3>Microsoft Partner</h3>
            <p>Platinum</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
