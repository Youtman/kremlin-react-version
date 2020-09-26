import React from 'react';
import logo from '../assets/img/kremlin_logo_light.png';

const Nav = () => (
  <div>
    <nav id='header' className='navbar navbar-expand-lg fixed-top'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <img src={logo} alt='kremlin_logo' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='/'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/shop'>
                Shop
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Nav;
