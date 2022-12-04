import { Box, Button } from "@mui/material";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/cart.css';
import { contextGeneral } from "../components/cartContext.jsx";
import ItemCarrito from './itemCart.jsx';

export default function Carrito() {
    const {shoppingCart, setShoppingCart} = useContext(contextGeneral);
    
    function totalToPay(){
        const totalToPay= shoppingCart.reduce((acc, item) => acc +  item.price* item.amount , 0 );
        return totalToPay;
    }

    return (
            <div className='size'>{shoppingCart.map((item) => (
                <ItemCarrito key={item.id} item={item}/>
            ))}
            <p className='parrafo'>Total: $ {totalToPay()} </p>
            <Box textAlign='center'>
            <Button  onClick={() => setShoppingCart([])} variant="contained" color="success">vaciar carrito</Button>
            {shoppingCart.length > 0? <Button variant="contained" color="success"><Link to='/checkout'>Checkout</Link></Button> : <Button disabled>Checkout</Button>}
            </Box>
            </div>
    )
}
