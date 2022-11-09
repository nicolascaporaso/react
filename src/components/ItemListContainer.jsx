import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {GetProductos} from "../data/data.js";
import ItemList from "./ItemList";


export default function ItemListContainer() {

    const { idcategory } = useParams();
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        
        GetProductos() //llama a la funcion del data
            .then((res) => {
                if (idcategory) {
                    setProductos(res.filter((item) => item.tipo == idcategory));
                } else {
                    setProductos(res);
                }
            });
    }, [idcategory]);

    return (
        <ItemList productos={productos} />
    );
}