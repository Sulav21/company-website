import React from 'react'
import './footer.css'


export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Hoganz AC Inc.</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        
    
        <a href='https://www.facebook.com/sulabh.adhikari.96/' target="_blank" ><i class="fa-brands fa-facebook"></i></a>
        <a href='https://www.instagram.com/su.ad.21/' target="_blank" ><i class="fa-brands fa-instagram"></i></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; Hoganz AC Inc. All rights reserved</small>
    </div>
    </footer>
  )
}