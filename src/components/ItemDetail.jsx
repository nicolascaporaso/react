import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { contextGeneral } from "../components/cartContext.jsx";
import Itemcount from './ItemCount';
import CircularIndeterminate from './spinner';

export default function ProductoDetail({product}) {
  const [goCart, setGoCart]= useState(false);
  const {addItem,} = useContext(contextGeneral);

  const onAdd = (counter) => {
    setGoCart(true);
    addItem(product, counter);
  }


  return (
    <div className='tienda'>
      <h2 className='tienda__titulo'>Descripcion detallada del producto.</h2>
      <div>
      {!product.id && <CircularIndeterminate />}
        <div className="tienda__grid">
          <div className='tienda__grid__card' key={product.id}>
            <h3 className='tienda__grid__card__titulo'>{product.name} </h3>
            <img alt="imagen de planta acuatica" className='tienda__grid__card__img' src={product.image} />
            <p className='tienda__grid__card__parrafo'>Precio: ${product.price}</p>
            <h4 className='tienda__grid__card__parrafo'>Descripcion: {product.description}</h4>
            <p className='tienda__grid__card__parrafo'>Stock: {product.amount}</p>
            
            {goCart? <Link className='link' to='/carrito'><h4 style={{border:'2px solid black', textDecoration: 'none' }}>Terminar Compra</h4></Link> : <div><Itemcount max={product.amount} min={1} onAdd={onAdd}/></div>}
          </div>
        </div>
      </div> 
    </div>
  )
}