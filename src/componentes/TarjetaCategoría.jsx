import React from 'react'

function TarjetaCategoría( {imagen, textoBoton, url }) {
  return (
    <div className='contenedor-tarjeta'>
      <img src={imagen} alt="" />
      <button className='btn-categoria'>
        <a href={url}>{textoBoton}</a>
      </button>
    </div>
  )
}

export default TarjetaCategoría
