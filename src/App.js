import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Carrito from './components/Cart.jsx';
import ContextContainer from "./components/cartContext.jsx";
import Checkout from "./components/checkout";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from './components/Navbar';

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



