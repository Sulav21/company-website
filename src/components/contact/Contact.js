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
    <section id="contact" className='contact py-5'>
      <h5 className='text-center'>Get In Touch</h5>
      <h2 className='text-center mb-3'>Contact Us</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <h5 className='text-center mb-2'>Find Us here <i class="fa-solid fa-location-dot"></i></h5>
          <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.115677322429!2d151.00949411508915!3d-33.93815278063708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12be8d8308d81f%3A0x4815dde88b4f6753!2s19%20Queen%20St%2C%20Revesby%20NSW%202212!5e0!3m2!1sen!2sau!4v1658360548201!5m2!1sen!2sau" width="300" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </article>

       

        </div>

        <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='Your Full Name' required />
         <input type="email" name='email' placeholder='Your Email' required />
         <textarea name="message"rows="7" placeholder='Your message' required></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>


        </form>

      </div>


    </section>
  )
}