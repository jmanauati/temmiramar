import React from 'react';
import Slider from 'react-slick';

function Item({ producto }) {
  // Configuración básica del carrusel
  const settings = {
    dots: true,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='producto-item'>
      {/* Carrusel de imágenes */}
      <Slider {...settings}>
        {producto.iamge.map((img, index) => (
          <div key={index}>
            <img src={img} className='item-img' alt={`Producto ${index}`} />
          </div>
        ))}
      </Slider>

      <div className='item-data'>
        <h4 className='item-title'>{producto.title}</h4>
        <p className='item-price'>{producto.price}</p>
        <p className='item-description'>{producto.description}</p>
        <a href={`temmiramar/#/contacto`} className='ver-mas'>CONSULTAR</a>
      </div>
    </div>
  );
}

export default Item;
