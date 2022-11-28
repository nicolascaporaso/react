import React from 'react'
import { Link } from "react-router-dom";
import '../assets/css/itemListContainer.css'
import Button from '@mui/material/Button'
import Itemcount from './ItemCount';
import { contextoGeneral } from "../components/cartContext.jsx";
import { useContext } from 'react';
import RestarItem from './restarItem';


export default function ItemCarrito({ item }) {
    console.log(item);

    return (
        <div className='carrito'>
        <div className='carrito__grid__card'>
            <h3 className='carrito__grid__card__titulo'>{item.nombre} </h3>
            <div className='inline'>
                <p className='carrito__grid__card__parrafo'>Precio: ${item.precio}</p>
                <p className='carrito__grid__card__parrafo'>Cantidad: {item.cantidad}</p>
                <img className='carrito__grid__card__img' src={item.imagen} alt="Planta acuatica " />
            </div>
            <div className='link'><Link to={"/item/" + item.id}>ir al item</Link></div>
            <RestarItem id={item.id}/>
        </div>
        </div>
    )
}