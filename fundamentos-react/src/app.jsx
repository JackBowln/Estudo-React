import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
// import ReactDOM from'react-dom'        (importação da DOM, ou Document object model, do react.
//                                          Isso possibilita a renderização, ReactDOM.render() de um código jsx na nossa aplicação)

// import React from 'react';              (O isso nos propicia trabalhar com o react na aplicação javascript)

// import './index.css'                    (O fato de um arquivo css ser criado não o faz ser linkado com o JS, é necessário referencia-lo)

//import Primeiro from './components/basicos/Primeiro'      import da função "Primeiro.js" da pasta components

export default (props) => (
  <div id="app">
    <Primeiro></Primeiro>

    <ComParametro
      titulo="Situação do aluno" //Todos os componentes devem ser envolvidos por tag
      aluno="Vinicius"
      nota={9.5}
      materia="física"
    />
    <Fragmento></Fragmento>
  </div>
);
