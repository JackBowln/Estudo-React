import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from './components/Layout/Card'
// import ReactDOM from'react-dom'        (importação da DOM, ou Document object model, do react.
//                                          Isso possibilita a renderização, ReactDOM.render() de um código jsx na nossa aplicação)

// import React from 'react';              (O isso nos propicia trabalhar com o react na aplicação javascript)

// import './index.css'                    (O fato de um arquivo css ser criado não o faz ser linkado com o JS, é necessário referencia-lo)

//import Primeiro from './components/basicos/Primeiro'      import da função "Primeiro.js" da pasta components

export default (props) => (
  <div id="app">
      <h1>Fundamentos React</h1>
    <Card 
    titulo = 'Desafio Aleatório'>
          <Aleatorio min={1} max={60}></Aleatorio>
    </Card>

    <Card 
    titulo = '#03 - Fragmento'>
          <Fragmento></Fragmento>
    </Card>
    <Card 
    titulo = '#02 - Com Parametro'>
          <ComParametro
      titulo="Situação do aluno" //Todos os componentes devem ser envolvidos por tag
      aluno="Vinicius"
      nota={9.5}
      materia="física"
    />
    </Card>
    <Card 
    titulo = '#01 - Primeiro'>
          <Primeiro></Primeiro>
    </Card>
    <Card 
    titulo = 'um título aí'>
    </Card>
  </div>
);
