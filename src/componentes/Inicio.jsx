import React from 'react'
import fotoInicio from '../imagenes/FondoInicio.jpeg'
import TarjetaCategoría from './TarjetaCategoría'
import FotoTarjeta from '../imagenes/logo-pequeño2.png'
import Footer from './Footer'
import ReviewsCarousel from './Reviews'
import ItemListContainer from './ItemListContainer'


function Inicio() {
  return (
    <div className='inicio'>
      <div className='portada-principal'>
        <p className='texto-portada'>Creamos productos inspirados en la naturaleza.</p>
        <div className='boton-productos'>Ver Productos</div>
      </div>
      <div className='destacados'>
      <p className='destacado envio'><i class="material-icons icon">local_shipping</i> Envío en Miramar y alrededores</p>
      <p className='destacado experiencia'><i class="material-icons icon">school</i> Más de 10 años de experiencia</p>
      <p className='destacado personalizado'><i class="material-icons icon">person</i> Tratamiento Personalizado</p>
      <p className='destacado ecofrendly'><i class="material-icons icon">compost</i> Ecofriendly</p>
      </div>
      <div className='foto-torno'>
      </div>
      <div className='tarjetas-categorias'>
        <ItemListContainer />
      </div>
      <div className='footer'>
      <ReviewsCarousel />
        <Footer />
        
      </div>
    </div>
  )
}

export default Inicio

