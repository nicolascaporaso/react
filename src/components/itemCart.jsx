import React from 'react'
import { Link } from "react-router-dom";
import '../assets/css/cart.css'
import Button from '@mui/material/Button'
import Itemcount from './ItemCount';
import { contextoGeneral } from "./cartContext.jsx";
import { useContext } from 'react';
import RestarItem from './restarItem';


export default function ItemCarrito({ item }) {


    return (
        <div className='carrito'>
        <div className='carrito__grid__card'>
            <h3 className='carrito__grid__card__titulo'>{item.name} </h3>
            <div className='inline'>
                <img className='carrito__grid__card__img' src={item.image} alt="Planta acuatica " />
                <p className='carrito__grid__card__parrafo'>Precio: ${item.price}</p>
                <p className='carrito__grid__card__parrafo'>Cantidad: {item.amount}</p>
                <p className='carrito__grid__card__parrafo'>Codigo de Producto: {item.id}</p>
            </div>
            <div className='link'><Link to={"/item/" + item.id}>ir al item</Link></div>
            <RestarItem id={item.id}/>
        </div>
        </div>
    )
}