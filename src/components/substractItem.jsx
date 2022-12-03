import React, { useContext } from 'react';
import { contextGeneral } from "./cartContext.jsx";

export default function SusbtractItem(item) {
const {removeItem, } = useContext(contextGeneral);
    return(
        <>
            <button onClick={() => removeItem(item.id)}>Remover Item</button>
        </>
    )
}
