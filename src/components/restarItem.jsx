import React from 'react'
import Container from '@mui/material/Container'
import { useState } from 'react';
import { useContext } from 'react';
import { contextGeneral } from "../components/cartContext.jsx";

export default function SusbtractItem(item) {
const {removeItem, } = useContext(contextGeneral);
    return(
        <>
            <button onClick={() => removeItem(item.id)}>Remover Item</button>
        </>
    )
}
