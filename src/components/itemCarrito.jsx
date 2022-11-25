import React from 'react'
import { Link } from "react-router-dom";
import '../assets/css/itemListContainer.css'
import Button from '@mui/material/Button'
import Itemcount from './ItemCount';
import { contextoGeneral } from "../components/cartContext.jsx";
import { useContext } from 'react';
import RestarItem from './restarItem';

export default function ItemCarrito({ item }) {

    return (
        <div className='tienda__grid__card'>
            <h3 className='tienda__grid__card__titulo'>{item.nombre} </h3>
            <p className='tienda__grid__card__parrafo'>Precio: ${item.precio}</p>
            <img className='tienda__grid__card__img' src={item.img} alt="Planta acuatica " />
            <div className='link'><Link to={"/item/" + item.id}>ir al item</Link></div>
            <RestarItem id={item.id}/>
        </div>
    )
}