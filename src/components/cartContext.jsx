import React, { useState, createContext } from "react";

export const contextoGeneral = createContext();

export default function CartContext({ children }) {
    const [carrito, setCarrito] = useState([]);
    const [nuevoProducto, setNuevoProducto] = useState([]);

    function addItem() { // agregar cierta cantidad de un ítem al carrito
        let item = carrito.findIndex((product) => product.id === nuevoProducto.id)
        if (item == -1) {
            //no existe
            nuevoProducto.cantidad= 1;
            setNuevoProducto(nuevoProducto);
            setCarrito(carrito.concat(nuevoProducto));
        } else {
            //sumar a cantidades
            carrito[item].cantidad = carrito[item].cantidad + 1;
            setCarrito(carrito);
        }

    }

    function removeItem(){  // Remover un item del cart por usando su id
        let item;
        item = carrito.findIndex((product) => product.id === nuevoProducto.id);
        carrito.splice(item, 1);
    }

    function clear(){ // Remover todos los items
        carrito.splice(0, carrito.length);
    }

    function isInCart(){ //(id) => true|false 

    }

    return (
        <contextoGeneral.Provider value={{ nuevoProducto, setNuevoProducto, carrito, setCarrito, addItem, removeItem, clear, isInCart }}>
            {children}
        </contextoGeneral.Provider>
    );
}