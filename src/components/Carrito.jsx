import React from 'react'
import { useContext, useState } from 'react';
import { contextoGeneral } from "../components/cartContext.jsx";
import ItemCarrito from './itemCarrito.jsx';
import {Button, Box} from "@mui/material";
import {Link} from 'react-router-dom'
import '../assets/css/carrito.css'

export default function Carrito() {
    const {carrito, setCarrito} = useContext(contextoGeneral);
    
    function totalAPagar(){
        const totalAPagar= carrito.reduce((acc, item) => acc +  item.precio* item.cantidad , 0 );
        return totalAPagar;
    }

    return (
            <div className='size'>{carrito.map((item) => (
                <ItemCarrito key={item.id} item={item}/>
            ))}
            <p className='parrafo'>Total: $ {totalAPagar()} </p>
            <Box textAlign='center'>
            <Button  onClick={() => setCarrito([])} variant="contained" color="success">vaciar carrito</Button>
            {carrito.length > 0? <Button variant="contained" color="success"><Link to='/checkout'>Checkout</Link></Button> : <Button disabled>Checkout</Button>}
            </Box>
            </div>
    )
}
