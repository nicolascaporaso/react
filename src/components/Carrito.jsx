import React from 'react'
import { useContext, useState } from 'react';
import { contextoGeneral } from "../components/cartContext.jsx";
import ItemCarrito from './itemCarrito.jsx';
import {Button,} from "@mui/material";
import {Link} from 'react-router-dom'

export default function Carrito() {
    const {carrito, setCarrito} = useContext(contextoGeneral);
    
    function totalAPagar(){
        const totalAPagar= carrito.reduce((acc, item) => acc +  item.precio* item.cantidad , 0 );
        return totalAPagar;
    }

    return (
            <>{carrito.map((item) => (
                <ItemCarrito key={item.id} item={item}/>
            ))}
            <p>Total: $ {totalAPagar()} </p>

            <Button  onClick={() => setCarrito([])} variant="contained" color="success">vaciar carrito</Button>
            <Button variant="contained" color="success"><Link to='/checkout'>checkout</Link></Button>
            </>
    )
}
