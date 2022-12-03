import React from 'react'
import icono from '../assets/img/carrito.svg'
import '../assets/css/CartWidget.css'
import {Link} from 'react-router-dom'
import {Button} from "@mui/material";
import { contextGeneral } from "../components/cartContext.jsx";
import { useContext, } from 'react';


function CartWidget(){
  const { quantity, shoppingCart} = useContext(contextGeneral);

  return (
    <>
      <Button variant="contained" color="success" >
      {(quantity > 0) ? <Link id="NavLink" to="/carrito"><img className='IcoCarrito' src={icono}></img></Link> : <Button disabled><img className='IcoCarrito' src={icono}></img></Button>}
        
        <div><p>{quantity}</p></div>
      </Button>
    </>
  )
}

export default CartWidget