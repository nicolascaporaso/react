import React from 'react'
import { Link } from "react-router-dom";
import Itemcount from './ItemCount';
import { useState } from 'react';
import { contextoGeneral } from "../components/cartContext.jsx";
import { useContext } from 'react';

export default function ProductoDetail({ producto }) {
  const [goCart, setGoCart]= useState(false);
  const { carrito, addItem,} = useContext(contextoGeneral);

  const onAdd = (contador) => {
    setGoCart(true);
    addItem(producto, contador);
  }



  return (
    <div className='tienda'>
      <h2 className='tienda__titulo'>Descripcion detallada del producto.</h2>
      <div>
        <div className="tienda__grid">
          {!producto.id && "Loading..."}
          <div className='tienda__grid__card' key={producto.id}>
            <h3 className='tienda__grid__card__titulo'>{producto.nombre} </h3>
            <p className='tienda__grid__card__parrafo'>Precio: ${producto.precio}</p>
            <img className='tienda__grid__card__img' src={producto.imagen} alt="Planta acuatica " />
            <h4 className='tienda__grid__card__parrafo'>Descripcion: {producto.descripcion}</h4>
            <p className='tienda__grid__card__parrafo'>Stock: {producto.cantidad}</p>
            <div className='link'><Link to={"/producto/" + producto.id}>Comprar</Link></div>
            {goCart? <Link to='/carrito'>Terminar Compra</Link> : <div><Itemcount max={producto.cantidad} min={1} onAdd={onAdd}/></div>}
          </div>
        </div>
      </div> 
    </div>
  )
}