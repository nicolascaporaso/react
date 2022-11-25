import React from 'react'
import Container from '@mui/material/Container'
import { useState } from 'react';
import { contextoGeneral } from "../components/cartContext.jsx";
import { useContext } from 'react';

export default function Itemcount({max, min, onAdd}){


    let [acumulador, setAcumulador] = useState("1");

    const Sumar = (num) => {
        if (acumulador < num){
            setAcumulador(parseInt(acumulador) + 1);
        }
        else{
            alert("alcanzaste el maximo");
        }
    };
    const Restar = (num) => {
        if (acumulador > num){
            setAcumulador(parseInt(acumulador) - 1);
        }
        else{
            alert("alcaszaste el minimo");
        }
    };
    
    
    return(
        <>
        <Container fixed>
        <h2 className="itemList"  style={{backgroundColor:'gray'}}>{acumulador}</h2>
        </Container>
        <Container fixed>
        <h2 className="itemList" onClick={(e) => Sumar(max)} style={{backgroundColor:'gray'}}>SUMAR</h2>
        </Container>
        <Container fixed>
        <h2 className="itemList" onClick={(e) => Restar(min)} style={{backgroundColor:'gray'}}>RESTAR</h2>
        </Container>
        <button onClick={() => onAdd(acumulador)}>Agregar al carrito</button>
        </>
    )
}