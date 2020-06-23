import React from "react";
import "./app.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/Layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/Repetição/ListaAlunos";
import TabelaProdutos from "./components/Repetição/TabelaProdutos.jsx";
import ParOuImpar from "./components/Condicional/ParOuImpar";
import UsuarioInfo from "./components/Condicional/UsuarioInfo";
import DiretaPai from "./components/Comunicacao/DiretaPai";
import IndiretaPai from "./components/Comunicacao/IndiretaPai";

// import ReactDOM from'react-dom'        (importação da DOM, ou Document object model, do react.
//                                          Isso possibilita a renderização, ReactDOM.render() de um código jsx na nossa aplicação)

// import React from 'react';              (O isso nos propicia trabalhar com o react na aplicação javascript)

// import './index.css'                    (O fato de um arquivo css ser criado não o faz ser linkado com o JS, é necessário referencia-lo)

//import Primeiro from './components/basicos/Primeiro'      import da função "Primeiro.js" da pasta components

export default (props) => (
  <div className="app">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#11 - Comunicação Indireta" color="#2A1E5C">
        <IndiretaPai></IndiretaPai>
      </Card>
      <Card titulo="#10 - Comunicação Direta" color="#52489C">
        <DiretaPai></DiretaPai>
      </Card>
      <Card titulo="#09 - Renderização Condicional 2" color="#F09498">
        {/*         <UsuarioInfo usuario = {{nome: 'Jeferson'}}></UsuarioInfo>
        <p></p> */}
        <UsuarioInfo usuario={{ nome: "" }}></UsuarioInfo>
        <UsuarioInfo usuario={{ nome: "Thomas Jefferson" }}></UsuarioInfo>
      </Card>
      <Card titulo="#08 - Renderização Condicional" color="#F49D37">
        <ParOuImpar numero={9868}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Usuario do exercicio 9" }}></UsuarioInfo>
      </Card>
      <Card titulo="#07 - Desafio Repetição Tabela" color="#3993DD">
        <TabelaProdutos></TabelaProdutos>
      </Card>
      <Card titulo="#06 - Repetição" color="#087E8B">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#05 - Componente com Filhos" color="#3B4D8D">
        <Familia snome="Dias">
          <FamiliaMembro nome="Vinicius" />
          <FamiliaMembro nome="Marina" />
          <FamiliaMembro nome="Diego" />
          <FamiliaMembro nome="Propriedade" snome="Componente" />
        </Familia>
      </Card>
      <Card titulo="#04 - Desafio Aleatório" color="#080">
        <Aleatorio min={1} max={60}></Aleatorio>
      </Card>

      <Card titulo="#03 - Fragmento" color="#276FBF">
        <Fragmento></Fragmento>
      </Card>
      <Card titulo="#02 - Com Parametro" color="#FD151B">
        <ComParametro
          titulo="Situação do aluno" //Todos os componentes devem ser envolvidos por tag
          aluno="Vinicius"
          nota={9.5}
          materia="física"
        />
      </Card>
      <Card titulo="#01 - Primeiro" color="#A846A0">
        <Primeiro></Primeiro>
      </Card>
      <Card titulo="um título aí" color="#FC814A">
        <div>Isso é um exemplo de Card</div>
      </Card>
    </div>
  </div>
);
