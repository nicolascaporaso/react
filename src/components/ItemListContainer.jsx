//@ts-check
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {GetProductos} from "../data/data.js";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
import Item from "./item.jsx";

export default function ItemListContainer() {

    const { idcategory } = useParams();
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        let productos;
        const baseDatos = getFirestore();
        
        if (idcategory) {
            productos = query(collection (baseDatos, 'plantas'), where('tipo', '==', idcategory));
        } else {
            productos = collection (baseDatos, 'plantas');
        }
        
        

        getDocs(productos).then((res) => {
        
            const baseNormalizada = res.docs.map( item => {
                return{ id: item.id, nombre: item.data().nombre, tipo: item.data().tipo, cantidad: item.data().cantidad, precio: item.data().precio, descripcion: item.data().descripcion,
                }
            });
        console.log(baseNormalizada);
        setProductos(baseNormalizada);
        });


        

    }, [idcategory]);

    return (
        <ItemList productos={productos} />
    );
}