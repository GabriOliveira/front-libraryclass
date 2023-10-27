import React from "react";
import "./App.css";
import Inicio  from "./pages/tela-inicial/incio";
import Botao from "./components/Botao";
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Mural from './pages/Mural/Mural'
import InicioLibrary from './pages/inicio-library/inicio-library'
import Config from './pages/Configuração/configuração'
import Perfil from './pages/meu-perfil/meu-perfil'
import Faq from './pages/FAQ/faq'
export default function App() {
  return (
    <div className="container-app">
    
    <Inicio/>
    </div>
  );
}
