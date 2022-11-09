import React from 'react'
import icono from '../assets/img/carrito.svg'
import '../assets/css/CartWidget.css'
import {Link} from 'react-router-dom'
import {Button} from "@mui/material";


const CartWidget = () => {
  return (
    <>
    <Button variant="contained" color="success" >
      <Link id="NavLink" to="/carrito"><img className='IcoCarrito' src={icono}></img></Link>
      <div><p>1</p></div>
    </Button>
    </>
  )
}

export default CartWidget