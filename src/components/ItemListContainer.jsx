//@ts-check
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

export default function ItemListContainer() {

    const { idcategory } = useParams();
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        let products;
        const database = getFirestore();
        
        if (idcategory) {
            products = query(collection (database, 'plantas'), where('type', '==', idcategory));
        } else {
            products = collection (database, 'plantas');
        }
        
        

        getDocs(products).then((res) => {
        
            const databaseNorm = res.docs.map( item => {
                return{ id: item.id, name: item.data().name, type: item.data().type, amount: item.data().amount, price: item.data().price, description: item.data().description, image: item.data().image, }
            });
        setProducts(databaseNorm);
        });

    }, [idcategory]);

    return (
        <ItemList products={products} />
    );
}