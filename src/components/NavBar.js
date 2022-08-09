import React from 'react';
import logo from '../images/logo.png'
import './navbar.css'

export const NavBar=()=> {
  return (
    <div className="navbar-website container-fluid nav_bg">
    <div className="row">
      <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg">
          <div className='d-flex flex-column'>

        <img className='navbar-logo' src={logo} alt='' />
          {/* <a className="navbar-brand" href="/" >
            BNA HVAC Services
          </a> */}
          
          <a href="tel:0452474678" className='navbar-brand'><h5>0435614524</h5></a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  activeClassName="menu_active"
                  className="nav-link"
                  href="/#service"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  activeClassName="menu_active"
                  className="nav-link"
                  href="/#projects"
                >
                 Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  activeClassName="menu_active"
                  className="nav-link"
                  href="/#contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
  );
}
