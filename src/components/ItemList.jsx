import React from 'react'
import { Link } from "react-router-dom";
import '../assets/css/itemListContainer.css'
import Item from './item';


export default function ItemList({products}) {

    
    return (
        <div className='tienda'>
            <h2 className='tienda__titulo'>Bienvenido a nuestra tienda, Podra adquirir variedad en plantas de acuario, de la mejor calidad, y con el envio mas seguro.</h2>
            <div>
                <div className="tienda__grid">
                    {! products.length && "Loading..."}
                    { products.map((item) => (
                        <Item key={item.id} item={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
