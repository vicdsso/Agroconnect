import React from "react";
import "./App.css";
import Produtos from "./components/Publicacoes/Produtos";
import Maquinas from "./components/Publicacoes/Maquinas";
import Servicos from "./components/Publicacoes/Servicos";
import Home from "./components/Homepage/Home";
function App() {
  return (
    <>
    <Home></Home>
      <Maquinas></Maquinas>
      <Servicos></Servicos>
      <Produtos></Produtos>
    </>
  );
}

export default App;
