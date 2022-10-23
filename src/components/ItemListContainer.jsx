import React from 'react'
import Container from '@mui/material/Container'
import './itemList.css'

export default function ItemListContainer({color, saludo}){    
    return(
        <Container fixed>
        <h2 className="itemList" style={{backgroundColor:color}}>{saludo}</h2>
        </Container>
    )
}