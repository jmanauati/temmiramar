import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import fotoLogo from '../imagenes/LogoTodoentreManos.png'

function Footer() {
  return (
    <div className='footer'>
      <p className='iconos-footer'><i class="material-icons icon">location_on</i> Miramar, Centro</p>
        
      <a className='logo-instagram' href="https://www.instagram.com/todoentremanos/" target="_blank" rel="instagram">
        <FaInstagram size={30} color="#fff" />
        <p>@todoentremanos</p>
      </a>
      <div className="copyright">
        <img className='logo-footer' src={fotoLogo} alt="" />
        <p className='texto-footer'>Copyright © TodoentreManos | All rights reserved</p>
      </div>

    </div>

  
  )
}

export default Footer
