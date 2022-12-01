import React from 'react'
import { useContext, useState } from 'react';
import { contextoGeneral } from "../components/cartContext.jsx";
import { Button } from '@mui/material';
import '../assets/css/checkout.css'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Checkout() {
    const {carrito, setCarrito} = useContext(contextoGeneral);
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");

    function totalAPagar(){
        const totalAPagar= carrito.reduce((acc, item) => acc +  item.precio* item.cantidad , 0 );
        return totalAPagar;
    }

    function validateEmail(email){
        var emailReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (emailReg.test(email)==false){
            alert("mail invalido");
            return false;
        }

        return true;
    }

    function validateName(nombre){
        var nombreReg = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

        if (nombreReg.test(nombre)==false){
            alert("nombre invalido");
            return false;
        }

        return true;
    }

    function validateTel(tel){
        var telReg = /^\d{7,14}$/;

        if (telReg.test(tel)==false){
            alert("tel invalido");
            return false;
        }

        return true;
    }

    function pagar(){
        if(!tel || !email || !nombre){
            return
        }
        if (validateEmail(email) == false){
            return
        }
        if (validateName(nombre) == false){
            return
        }
        if (validateTel(tel) == false){
            return
        }

        alert("usted esta comprando" + carrito );
    }

    return (
        <div className='container'>
            <h1 className='titulo'>Formulario de Compra</h1>

            <div className='checkout'>


                <input className='input' placeholder="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input className='input' placeholder="tel" value={tel} onChange={(e) => setTel(e.target.value)} />
                <input className='input' placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                {carrito.map((item) => (
                    <p className='item'>NOMBRE: {item.nombre} / CANTIDAD: {item.cantidad} / PRECIO-UNIDAD: ${item.precio}</p>
                ))}
                <p>Total: $ {totalAPagar()} </p>
                <div className='bottom'>
                    {(tel && email && nombre) ? <Button variant="contained" color="success" onClick={(e) => pagar()} >PAGAR</Button> : <Stack sx={{ width: '100%' }} spacing={2}><Alert severity="error">Complete todos los campos para continuar  </Alert></Stack>}
                </div>
            </div>
        </div>
    )
}
