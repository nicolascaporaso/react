import Container from '@mui/material/Container';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/count.css';

export default function Itemcount({max, min, onAdd}){


    let [acc, setAcc] = useState("1");

    function mesage(text){
        toast.info(text, {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const Add = (num) => {
        if (acc < num){
            setAcc(parseInt(acc) + 1);
        }
        else{
            mesage("alcanzaste el maximo");
        }
    };
    const Subtract = (num) => {
        if (acc > num){
            setAcc(parseInt(acc) - 1);
        }
        else{
            mesage("alcaszaste el minimo");
        }
    };
    
    
    return(
        <>
        <Container fixed>
        <h2 className="parrafo"  style={{backgroundColor:'gray'}}>{acc}</h2>
        </Container>
        <Container fixed>
        <h2 className="parrafo" onClick={(e) => Add(max)} style={{backgroundColor:'gray'}}>SUMAR PLANTA</h2>
        </Container>
        <Container fixed>
        <h2 className="parrafo" onClick={(e) => Subtract(min)} style={{backgroundColor:'gray'}}>RESTAR PLANTA</h2>
        </Container>
        <div className='boton'><button onClick={() => onAdd(acc)}>Agregar al carrito</button></div>
        <ToastContainer/>
        </>
    )
}