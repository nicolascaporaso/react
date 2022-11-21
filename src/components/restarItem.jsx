import React from 'react'
import Container from '@mui/material/Container'
import { useState } from 'react';
import { useContext } from 'react';
import { contextoGeneral } from "../components/cartContext.jsx";

export default function RestarItem(item) {
    const {removeItem, } = useContext(contextoGeneral);
    return(
        <>
            <button onClick={() => removeItem(item)}>Remover Item</button>
        </>
    )
}
