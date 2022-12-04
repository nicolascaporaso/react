import React from 'react';
import { Link } from "react-router-dom";
import '../assets/css/itemListContainer.css';

export default function Item({ item }) {

    return (
        <div className='tienda__grid__card'>
            <h3 className='tienda__grid__card__titulo'>{item.name} </h3>
            <p className='tienda__grid__card__parrafo'>Precio: ${item.price}</p>
            <img className='tienda__grid__card__img' src={item.image} alt="Planta acuatica " />
            <div className='link'><Link to={"/item/" + item.id}>Mas detalles</Link></div>
        </div>
    )
}