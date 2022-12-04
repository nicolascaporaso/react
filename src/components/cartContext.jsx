//@ts-check
import React, { useEffect, useState, createContext } from "react";

export const contextGeneral = createContext();

export default function CartContext({ children }) {
    const [shoppingCart, setShoppingCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [quantity, setQuantity] = useState("0");
        
    function actCart() {
        let counter = 0;
        if (shoppingCart.length > 0) {
            shoppingCart.forEach(element => {
                counter = counter + element.amount
                setQuantity(parseInt(counter));
            });
        } else {
            setQuantity(parseInt("0"));
        }
    }

    function isInCart(id) { 
        const existInCart = shoppingCart.findIndex((item) => item.id == id);
        return existInCart;
    }

    function addItem(item, amount) { // agregar cierta amount de un ítem al carrito
        const pos = isInCart(item.id);
        if (pos == -1) {
            setShoppingCart([...shoppingCart, {...item, amount}]);
        } else {
            const shoppingCartAux = [...shoppingCart];
            shoppingCartAux[pos] = { ...shoppingCartAux[pos], amount: shoppingCartAux[pos].amount + amount };
            setShoppingCart(shoppingCartAux);
        }
    }

    function removeItem(id){  // Remover un item del cart por usando su id
        setShoppingCart(shoppingCart.filter(product => product.id !== id));
    }

    function clear() { // Remover todos los items
        setShoppingCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(shoppingCart));
        actCart();
    }, [shoppingCart])


    return (
        <contextGeneral.Provider value={{shoppingCart, quantity, actCart, setQuantity, setShoppingCart, addItem, removeItem, clear, isInCart }}>
            {children}
        </contextGeneral.Provider>
    );
}