import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {GetProductos} from "../data/data.js";
import ItemDetail from "./ItemDetail.jsx";

export default function ItemDetailContainer() {
    const {iditem} = useParams();
    const [producto, setProducto] = useState({});


    useEffect(() => {
        
        GetProductos(iditem)

        .then((res) => {
            setProducto(res);
        });


    }, [iditem]);

    return (
        <ItemDetail producto={producto} />
    );
}