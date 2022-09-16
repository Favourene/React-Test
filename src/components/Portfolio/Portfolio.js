import React, { useState } from 'react'
import './Portfolio.css'
import Tick from '../../image/tick.png'
import PortfolioImg from '../../image/portfolio.png'

function Portfolio() {
  const [portfolioTab, setPortfolioTab] = useState('all')
  return (
    <div className='portfolio' id='portfolio'>
      <div className='top'>
        <div>
          <h1>Portfolio</h1>
          <img src={Tick} alt='' />
        </div>
      </div>
      <div className='tab'>
        <div
          className={portfolioTab === 'all' ? 'active' : ''}
          onClick={() => setPortfolioTab('all')}
        >
          All
        </div>
        <div
          className={portfolioTab === 'Website' ? 'active' : ''}
          onClick={() => setPortfolioTab('Website')}
        >
          Website
        </div>
        <div
          className={portfolioTab === 'MobileApp' ? 'active' : ''}
          onClick={() => setPortfolioTab('MobileApp')}
        >
          MobileApp
        </div>
        <div
          className={portfolioTab === 'CSS' ? 'active' : ''}
          onClick={() => setPortfolioTab('CSS')}
        >
          CSS
        </div>
        <div
          className={portfolioTab === 'GitHub' ? 'active' : ''}
          onClick={() => setPortfolioTab('GitHub')}
        >
          GitHub
        </div>
      </div>
      <div className='wrapper'>
        {[...Array(3)].map((item, i) => (
          <div key={i + 1}>
            <img src={PortfolioImg} alt='' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
