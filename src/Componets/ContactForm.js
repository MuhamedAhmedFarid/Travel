import React from 'react'
import './contactForm.css'

function ContactForm() {
  return (
    <div className='form__container'>
        <h1>Send a messges to us</h1>
        <form>
            <input type='text' placeholder='name'/>
            <input type='email' placeholder='email'/>
            <input type='text' placeholder='subject'/>
            <textarea placeholder='message' rows='4'></textarea>
            <button>send a message</button>
        </form>
    </div>
  )
}

export default ContactForm