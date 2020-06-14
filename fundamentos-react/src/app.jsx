import React from "react";
import './app.css'
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/Layout/Card";
import Familia from './components/basicos/Familia'
// import ReactDOM from'react-dom'        (importação da DOM, ou Document object model, do react.
//                                          Isso possibilita a renderização, ReactDOM.render() de um código jsx na nossa aplicação)

// import React from 'react';              (O isso nos propicia trabalhar com o react na aplicação javascript)

// import './index.css'                    (O fato de um arquivo css ser criado não o faz ser linkado com o JS, é necessário referencia-lo)

//import Primeiro from './components/basicos/Primeiro'      import da função "Primeiro.js" da pasta components

export default (props) => (
  <div className="app">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#05 - Componente com Filhos" color = '#3B4D8D'>
        <Familia snome ="Schmidt"></Familia>
      </Card>
      <Card titulo="#04 - Desafio Aleatório" color = '#080'>
        <Aleatorio min={1} max={60}></Aleatorio>
      </Card>

      <Card titulo="#03 - Fragmento" color = '#276FBF'>
        <Fragmento></Fragmento>
      </Card>
      <Card titulo="#02 - Com Parametro" color = '#FD151B'>
        <ComParametro
          titulo="Situação do aluno" //Todos os componentes devem ser envolvidos por tag
          aluno="Vinicius"
          nota={9.5}
          materia="física"
        />
      </Card>
      <Card titulo="#01 - Primeiro" color = '#A846A0'>
        <Primeiro></Primeiro>
      </Card>
      <Card titulo="um título aí" color = '#FC814A'>
        <div>Isso é um exemplo de Card</div>
      </Card>
    </div>
  </div>
);
