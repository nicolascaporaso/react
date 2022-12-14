import { Button } from "@mui/material";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/CartWidget.css';
import icono from '../assets/img/carrito.svg';
import { contextGeneral } from "../components/cartContext.jsx";


function CartWidget(){
  const { quantity,} = useContext(contextGeneral);

  return (
    <>
      <Button size="small" variant="contained" color="success" >
      <p>{quantity}</p>
      {(quantity > 0) ? <Link id="NavLink" to="/carrito"><img alt="imagen de carrito de compras" className='IcoCarrito' src={icono}></img></Link> : <Link id="NavLink" to=""><img alt="imagen de carrito de compras" className='IcoCarrito' src={icono}></img></Link>}
      </Button>
    </>
  )
}

export default CartWidget