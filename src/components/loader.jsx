//@ts-check

import React from 'react'

export default function loader({loading}) {
    let mostrar =""
        if (loading){
        
        mostrar = "LOADING"
    }else{

    }

return (
    <p>{mostrar}</p>
)
}



const addItem2 = (item, cantidad) => {
    const purchase = { ...item, quantity: cantidad }
    // const existsInCart = cart.find((prod) => prod.id === item.id)
    if (existsInCart) {
        const carritoActualizado = cart.map((prod) => {
            if (prod.id === item.id) {
                return { ...prod, quantity: prod.quantity + cantidad }
            } else {
                return prod
            }
        })
        setCart(carritoActualizado)
    } else {
        setCart([...cart, purchase])
    }
}




//const totalProducts = () => cart.reduce((acc,product) => acc + product.quantity,0);
