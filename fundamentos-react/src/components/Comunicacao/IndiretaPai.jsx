import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  //nome idade nerd

  let nome = " ? ";
  let idade = 0;
  let nerd = false;
  function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
    console.log(nome, idade, nerd);
    nome = nomeParam
    idade = idadeParam
    nerd = nerdParam
  }

  return (
    <div>
      <span> {nome}</span>
      <span> {idade}</span>
      <span> {nerd ? "Verdadeiro" : "Falso"}</span>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};
