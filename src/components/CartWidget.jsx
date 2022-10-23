import React from 'react'
import icono from '../img/carrito.svg'
import './CartWidget.css'


const CartWidget = () => {
  return (
<a href='#'>
    <img className='IcoCarrito' src={icono}></img>
    </a>
  )

}

export default CartWidget