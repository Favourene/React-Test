import React from 'react'
import './Contact.css'
import Tick from '../../image/tick.png'
import Call from '../../image/call.png'
import Send from '../../image/send.png'

function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='top'>
        <div>
          <h1>Get in Touch</h1>
          <img src={Tick} alt='' />
        </div>
      </div>
      <div className='touch'>
        <div className='left'>
          <img src={Call} alt='' />
          <h2>Call Us</h2>
          <p>+234-806 749-700</p>
        </div>
        <div className='right'>
          <img src={Send} alt='' />
          <h2>Send Email</h2>
          <p>revent@digital.com</p>
        </div>
      </div>
      <div className='form'>
        <form action=''>
          <div className='half'>
            <div className='card'>
              <input type='text' />
            </div>
            <div className='card'>
              <input type='text' />
            </div>
          </div>
          <div className='full'>
            <input type='text' />
          </div>
          <div className='full'>
            <textarea name='' id='' cols='30' rows='15'></textarea>
          </div>
          <div className='button'>
            <button>Send message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
