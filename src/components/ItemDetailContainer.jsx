import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import { getFirestore, getDoc, doc } from 'firebase/firestore'
import Item from "./item.jsx";

export default function ItemDetailContainer() {
    const { iditem } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        const baseDatos = getFirestore();
        const item = doc(baseDatos, 'plantas', iditem);
        getDoc(item).then((res) => {
            const docNorm = {...res.data(), id: res.id};
            setProducto(docNorm);
        });

    }, [iditem]);

    return (
        <ItemDetail producto={producto} />
    );
}