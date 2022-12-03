import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import { getFirestore, getDoc, doc } from 'firebase/firestore'
import Item from "./item.jsx";

export default function ItemDetailContainer() {
    const { iditem } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const database = getFirestore();
        const item = doc(database, 'plantas', iditem);
        getDoc(item).then((res) => {
            const docNorm = {...res.data(), id: res.id};
            setProduct(docNorm);
        });

    }, [iditem]);

    return (
        <ItemDetail product={product} />
    );
}