import React from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from './components/Navbar';

export default function App() {
  return (
  <>
    <Navbar/>
    <ItemListContainer color={"#ddd"} saludo={"Bienvenido, en este sitio encontraras todo lo necesario para hacer tu acuario plantado. Podras consultar las fichas tecnicas de tus plantas, glosario de definiciones, cursos, o cualquier otra informacion que necesites, Tambien podras visitar nuestra tienda online, con las mejores plantas del mercado, a un precio muy accesible. "}/>
  </>
  )
}
