import React from 'react'
import { useContext } from 'react';
import { contextoGeneral } from "../components/cartContext.jsx";
import Item from './item';
import ItemCarrito from './itemCarrito.jsx';


export default function Carrito() {
    const { carrito, setCarrito } = useContext(contextoGeneral);

    const sumaTotal = () => {
        let sumaTodo = 0;
        carrito.forEach(producto => {
            sumaTodo = sumaTodo + (producto.precio * producto.cantidad);
        });
        return sumaTodo;
    }

    console.log(carrito);
    return (
            <>{carrito.map((item) => (
                <ItemCarrito key={item.id} item={item}/>
            ))}
            <p> Total ${sumaTotal()}</p>
            <button onClick={() => setCarrito([])}>vaciar carrito</button>
            </>
    )
}
