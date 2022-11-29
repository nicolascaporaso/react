//@ts-check
import React, { useEffect, useState, createContext } from "react";

export const contextoGeneral = createContext();

export default function CartContext({ children }) {
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [quantity, setQuantity] = useState("0");
        

    function actCart() {
        let contador = 0;
        if (carrito.length > 0) {
            carrito.forEach(element => {
                contador = contador + element.cantidad
                setQuantity(parseInt(contador));
            });
        } else {
            setQuantity(parseInt("0"));
        }
    }

    function isInCart(id) { 
        const existInCart = carrito.findIndex((item) => item.id == id);
        return existInCart;
    }

    function addItem(item, cantidad) { // agregar cierta cantidad de un ítem al carrito
        const pos = isInCart(item.id);
        if (pos == -1) {
            setCarrito([...carrito, {...item, cantidad}]);
        } else {
            const carritoAux = [...carrito];
            carritoAux[pos] = { ...carritoAux[pos], cantidad: carritoAux[pos].cantidad + cantidad };
            setCarrito(carritoAux);
        }
    }

    function removeItem(id){  // Remover un item del cart por usando su id
        setCarrito(carrito.filter(product => product.id !== id));
    }

    function clear() { // Remover todos los items
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(carrito));
        actCart();
    }, [carrito])


    return (
        <contextoGeneral.Provider value={{carrito, quantity, actCart, setQuantity, setCarrito, addItem, removeItem, clear, isInCart }}>
            {children}
        </contextoGeneral.Provider>
    );
}