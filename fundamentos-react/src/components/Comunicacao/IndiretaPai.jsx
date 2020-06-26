import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  //nome idade cafe

  const [nome, setNome] = useState(" ? ");
  const [idade, setIdade] = useState(0);
  const [cafe, setCafe] = useState('false');

  function fornecerInformacoes(nome, idade, cafe) {
    console.log(nome, idade, cafe);
    setNome(nome)
    setIdade(idade)
    setCafe(cafe)
  }

  return (
    <div>
      <span> {nome}, </span>
      <span> {idade}, </span>
      <span> {cafe ? "bebe café" : "não bebe café"}</span>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};
