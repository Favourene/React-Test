import React from 'react'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero_section/Hero'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume/Resume'

function App() {
  return (
    <div className='App'>
      <main className='container'>
        <Navbar />
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </div>
  )
}

export default App
