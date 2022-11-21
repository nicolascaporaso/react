//@ts-check

import React, { useState, createContext } from "react";

export const contextoGeneral = createContext();

export default function CartContext({ children }) {
    const [carrito, setCarrito] = useState([]);
    const [quantity, setQuantity] = useState("0");
    
    
    function isInCart(id) { 
        const existInCart = carrito.findIndex((item) => item.id == id);
        return existInCart;
    }

    function addItem(item, cantidad) { // agregar cierta cantidad de un ítem al carrito
        console.log("log de add" + quantity);
        const pos = isInCart(item.id);
        if (pos == -1) {
            setCarrito([...carrito, {...item, cantidad}]);
        } else {
            const carritoAux = [...carrito];
            carritoAux[pos] = { ...carritoAux[pos], cantidad: carritoAux[pos].cantidad + cantidad };
            setCarrito(carritoAux);
        }
    }

    function removeItem(item){  // Remover un item del cart por usando su id
        console.log(item);
        console.log(item.precio);
        let lala="PL6rm0ZckHDZNz8tDttF"
        
        setCarrito(carrito.filter(product => product.id !== lala));
    }

    function clear() { // Remover todos los items
        setCarrito([]);
    }




    return (
        <contextoGeneral.Provider value={{carrito, quantity, setQuantity, setCarrito, addItem, removeItem, clear, isInCart }}>
            {children}
        </contextoGeneral.Provider>
    );
}