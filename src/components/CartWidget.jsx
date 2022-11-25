import React from 'react'
import icono from '../assets/img/carrito.svg'
import '../assets/css/CartWidget.css'
import {Link} from 'react-router-dom'
import {Button} from "@mui/material";
import { contextoGeneral } from "../components/cartContext.jsx";
import { useContext } from 'react';


const CartWidget = () => {
  const { quantity, setQuantity, carrito } = useContext(contextoGeneral);

  let contador = 0;
  carrito.forEach(element => {
    contador = contador + element.cantidad
  setQuantity(parseInt(contador));
  });

  return (
    <>
      <Button variant="contained" color="success" >
        <Link id="NavLink" to="/carrito"><img className='IcoCarrito' src={icono}></img></Link>
        <div><p>{quantity}</p></div>
      </Button>
    </>
  )
}

export default CartWidget