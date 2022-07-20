import React from 'react'
import logo1 from '../../images/logo/logo1.png'
import logo2 from '../../images/logo/logo2.png'
import logo3 from '../../images/logo/logo3.png'
import logo4 from '../../images/logo/logo4.png'
import logo5 from '../../images/logo/logo5.jpg'
import logo6 from '../../images/logo/logo6.png'
import './slider.css'

export const Slider = () => {
  return (
<div>
    <div className='mt-5'>
        <h2 className='text-center'>Our Brands</h2>
    </div>
    <div className="slider">
        <div className="slide-track">
            <div className="slide">
              <img src={logo1} />
            </div>
            <div className="slide">
              <img src={logo2} />
            </div>
            <div className="slide">
              <img src={logo3} />
            </div>
            <div className="slide">
              <img src={logo4} />
            </div>
            <div className="slide">
              <img src={logo5} />
            </div>
            <div className="slide">
              <img src={logo6} />
            </div>
        </div>
    </div>
    </div>
  )
}
