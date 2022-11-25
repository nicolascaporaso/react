import React from 'react'
import { useContext, useState } from 'react';
import { contextoGeneral } from "../components/cartContext.jsx";
import { Button } from '@mui/material';


export default function Checkout() {
    const {carrito, setCarrito} = useContext(contextoGeneral);
    const [tel, setTel] = useState("TEL");
    const [email, setEmail] = useState("EMAIL");
    const [nombre, setNombre] = useState("NOMBRE");

    function pagar(){
        alert("usted esta comprando" + carrito );
    }
    function totalAPagar(){
        const totalAPagar= carrito.reduce((acc, item) => acc +  item.precio* item.cantidad , 0 );
        return totalAPagar;
    }

    return (
        <div>
            <input placeholder="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input placeholder="tel" value={tel} onChange={(e) => setTel(e.target.value)} />
            <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button onClick={(e) => pagar()} >PAGAR</Button>

            
            {carrito.map((item) => (
                <p>NOMBRE: {item.nombre} / CANTIDAD: {item.cantidad} / PRECIO-UNIDAD: ${item.precio}</p>
            ))}
            <p>Total: $ {totalAPagar()} </p>
        </div>
    )
}
