import React from 'react'

function Item({producto}) {
  return (
    <div className='producto-item'>
      <img src={producto.iamge} className='item-img'/> 
      <div className='item-data'>
        <h4 className='item-title'>{producto.title}</h4>
        <p className='item-price'>{producto.price}</p>
        <p className='item-description'>{producto.description}</p>
        <a href={`temmiramar/#/contacto`}className='ver-mas'>CONSULTAR</a>
      </div>
    </div>
  )
}

export default Item;
