import React from 'react'
import logo from '../assets/airbnb_logo.png';

function Navbar() {
  return (
    <header>
        <img className='logo' src={logo} alt="" />
    </header>
  )
}

export default Navbar