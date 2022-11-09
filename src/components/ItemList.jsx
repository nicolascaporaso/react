import React from 'react'
import { Link } from "react-router-dom";
import '../assets/css/itemListContainer.css'


export default function ItemList({productos}) {
    
    return (
        <div className='tienda'>
            <h2 className='tienda__titulo'>Bienvenido a nuestra tienda, Podra adquirir variedad en plantas de acuario, de la mejor calidad, y con el envio mas seguro.</h2>
            <div>
                <div className="tienda__grid">
                    {!productos.length && "Loading..."}
                    {productos.map((item) => (
                        <div className='tienda__grid__card' key={item.id}>
                            <h3 className='tienda__grid__card__titulo'>{item.nombre} </h3>
                            <p className='tienda__grid__card__parrafo'>Precio: ${item.precio}</p>
                            <img className='tienda__grid__card__img' src={item.img} alt="Planta acuatica " />
                            <div className='link'><Link  to={"/item/" + item.id}>ir al item</Link></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
