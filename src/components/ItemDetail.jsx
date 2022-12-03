import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { contextGeneral } from "../components/cartContext.jsx";
import Itemcount from './ItemCount';

export default function ProductoDetail({product}) {
  const [goCart, setGoCart]= useState(false);
  const { shoppingCart, addItem,} = useContext(contextGeneral);

  const onAdd = (counter) => {
    setGoCart(true);
    addItem(product, counter);
  }

console.log(product);

  return (
    <div className='tienda'>
      <h2 className='tienda__titulo'>Descripcion detallada del producto.</h2>
      <div>
        <div className="tienda__grid">
          {!product.id && "Loading..."}
          <div className='tienda__grid__card' key={product.id}>
            <h3 className='tienda__grid__card__titulo'>{product.name} </h3>
            <p className='tienda__grid__card__parrafo'>Precio: ${product.price}</p>
            <img className='tienda__grid__card__img' src={product.image} alt="Planta acuatica " />
            <h4 className='tienda__grid__card__parrafo'>Descripcion: {product.description}</h4>
            <p className='tienda__grid__card__parrafo'>Stock: {product.amount}</p>
            
            {goCart? <Link to='/carrito'>Terminar Compra</Link> : <div><Itemcount max={product.amount} min={1} onAdd={onAdd}/></div>}
          </div>
        </div>
      </div> 
    </div>
  )
}