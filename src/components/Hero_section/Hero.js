import React from 'react'
import './Hero.css'
import Facebook from '../../image/Facebook.png'
import Dribble from '../../image/dribble.png'
import Behance from '../../image/behance.png'
import HeroImg from '../../image/hero.png'
import Bg from '../../image/bg.png'

function Hero() {
  return (
    <div className='hero'>
      <div className='hero_wrap'>
        <div className='left'>
          <h1>Innovative Solution Taliored to your Business need</h1>
          <p>
            We can partner with your business to provide a symbiotic
            relationship and synergy to help you or your business achieve more
            business growth through strategic financial advisory, investment
            business and human resource planning and management.​
          </p>
          <button>Get in touch</button>
          <div className='icons'>
            <img src={Behance} alt='' />
            <img src={Dribble} alt='' />
            <img src={Facebook} alt='' />
          </div>
        </div>
        <div className='right'>
          <img src={HeroImg} alt='' className='heroimg'/>
          <img src={Bg} alt="" className='bg'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
