import React from "react";

export default function ComParametro(props) {
  const status = props.nota >= 7 ? "aprovado" : "recuperação"; // ? = if       &&    : = else
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        <strong> {props.aluno} </strong>
        tem a nota de
        <strong> {props.nota} </strong>e está
        <strong> {status} </strong>
        em
        <strong> {props.materia} </strong>
      </p>{" "}
      {/*para que o a função seja recebida é necessário chamar uma propriedade da função, que é o que está entre parenteses ou criar uma constante com essas propriedades*/}
    </div>
  );
}
