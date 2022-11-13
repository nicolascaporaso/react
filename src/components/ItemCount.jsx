import React from 'react'
import Container from '@mui/material/Container'
import { useState } from 'react';

export default function Itemcount({max, min, onAdd}){  
    const [Acumulador, setAcumulador] = useState("0");

    const Sumar = (num) => {
        if (Acumulador < num){
            setAcumulador(parseInt(Acumulador) + 1);
        }
        else{
            alert("se alcanzo el numero maximo");
        }
        
    };
    const Restar = (num) => {
        if (Acumulador > num){
            setAcumulador(parseInt(Acumulador) - 1);
        }
        else{
            alert("se alcanzo el numero minimo");
        }
    };

    return(
        <>
        <Container fixed>
        <h2 className="itemList"  style={{backgroundColor:'gray'}}>{Acumulador}</h2>
        </Container>
        <Container fixed>
        <h2 className="itemList" onClick={(e) => Sumar(max)} style={{backgroundColor:'gray'}}>SUMAR</h2>
        </Container>
        <Container fixed>
        <h2 className="itemList" onClick={(e) => Restar(min)} style={{backgroundColor:'gray'}}>RESTAR</h2>
        </Container>
        <button   onClick={() => onAdd()}>Agregar al carrito</button>
        </>
    )
}