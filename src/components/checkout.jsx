import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import React, { useContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/checkout.css';
import { contextGeneral } from "../components/cartContext.jsx";


export default function Checkout() {
    const {shoppingCart, setShoppingCart, quantity} = useContext(contextGeneral);
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");


    function alertError(msg){
        toast.error(msg, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    function totalToPay(){
        const totalToPay= shoppingCart.reduce((acc, item) => acc +  item.price* item.amount , 0 );
        return totalToPay;
    }

    function validateEmail(email){
        var emailReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (emailReg.test(email)===false){
            alertError("mail invalido");
            return false;
        }

        return true;
    }

    function validateName(name){
        var nameReg = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

        if (nameReg.test(name)===false){
            alertError("nombre invalido");
            return false;
        }

        return true;
    }

    function validateTel(tel){
        var telReg = /^\d{7,14}$/;

        if (telReg.test(tel)===false){
            alertError("tel invalido");
            return false;
        }

        return true;
    }

    function alertMsg(){
        toast.info('Usted esta comprando, por un total de $'+ totalToPay() +" "+ shoppingCart.map((item) => (
            item.name + " X" +item.amount +" "+ "unidades" +" a "+"$" + item.price 
        )),{
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    function pay() {
        if (!tel || !email || !name) {
            return
        }
        if (validateEmail(email) === false) {
            return
        }
        if (validateName(name) === false) {
            return
        }
        if (validateTel(tel) === false) {
            return
        }
        if (quantity > 0){
            alertMsg();
            setShoppingCart([]);
            setTimeout(function() {
                window.location = '/';
            }, 5000);
        }
        else{
            window.location = '/';
        }
    }

    return (
        <div className='container'>
            <ToastContainer />
            <h1 className='titulo'>Formulario de Compra</h1>

            <div className='checkout'>


                <input className='input' placeholder="nombre" value={name} onChange={(e) => setName(e.target.value)} />
                <input className='input' placeholder="tel" value={tel} onChange={(e) => setTel(e.target.value)} />
                <input className='input' placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                {shoppingCart.map((item) => (
                    <p key={item.id} className='item'>NOMBRE: {item.name} / CANTIDAD: {item.amount} / PRECIO-UNIDAD: ${item.price}</p>
                ))}
                <p>Total: $ {totalToPay()} </p>
                <div className='bottom'>
                    {(tel && email && name) ? <Button variant="contained" color="success" onClick={(e) => pay()} >PAGAR</Button> : <Stack sx={{ width: '100%' }} spacing={2}><Alert severity="error">Complete todos los campos para continuar  </Alert></Stack>}
                </div>
            </div>
        </div>
    )
}
