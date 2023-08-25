import React from 'react'
import '../styles/contactForm.css'

const ContactForm = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Your Email</label>
            <input type='email'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea rows={6} placeholder='Type your message here'></textarea>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm