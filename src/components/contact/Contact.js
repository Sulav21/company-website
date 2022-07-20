import React from 'react'
import './contact.css'

// import emailjs from 'emailjs-com';
import  { useRef } from 'react';

export const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs.sendForm('service_e270uf6', 'template_7oh8r2q', form.current, 'PD6aCV92gaP7efMe0')
    e.target.reset()
  };

  return (
    <section id="contact" className='text-center services py-3'>
        <div className="mt-3 mb-3">
        <h5>Get In Touch</h5>
      <h2>Contact Us</h2>
        </div>
      
      <div className="container contact_container">

        <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='Your Full Name' required />
         <input type="email" name='email' placeholder='Your Email' required />
         <textarea name="message"rows="7" placeholder='Your message' required></textarea>
         <button type='submit' className='btn btn-color'>Send Message</button>


        </form>

      </div>


    </section>
  )
}