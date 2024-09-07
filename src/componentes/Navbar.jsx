import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import logo from '../imagenes/LogoTodoentreManos.png'
function Navbar() {
  return (
    <nav className='navbar'>
      <img className='logoInicio'   src={logo} alt="logo Maria Jose" />
      <ul className='menu'>
        <li><Link to="/" className='menu-Link'>Inicio</Link></li>
        <li><Link to="/nosotros" className='menu-Link'>Nosotros</Link></li>
        <li><Link to="/productos" className='menu-Link'>Premium</Link></li>
        <li><Link to="/contacto" className='menu-Link'>Contacto</Link></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  )
}

export default Navbar
