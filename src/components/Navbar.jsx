import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src="https://o.remove.bg/downloads/9c39701d-ee30-46ce-afcb-3a623c099a94/rectangular-vintage-logo-design-template-0e4fdc3eba0aa62f0767bb92920f154c_screen-removebg-preview.png" alt="" />
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
    </div>
  )
}

export default Navbar;