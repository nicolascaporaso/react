import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Carrito from './components/Carrito.jsx';
import Footer from "./components/Footer";
import ContextContainer from "./components/cartContext.jsx";
import Checkout from "./components/checkout";

export default function App() {
  return (
    <ContextContainer>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:idcategory" element={<ItemListContainer/>} />
        <Route path="/item/:iditem" element={<ItemDetailContainer/>} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      <Footer ></Footer>
    </BrowserRouter>
    </ContextContainer>
  )
}



