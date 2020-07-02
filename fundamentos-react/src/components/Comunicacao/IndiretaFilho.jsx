import React from "react";
import styled from 'styled-components';

const Button = styled.button`
    border: none;
    margin: 4px;
    width: 150px;
    height: 55px;
    font-Size: 20px;
    background-Color: #47AFFF;
    transition: 2s;
    border-radius: 6px;
    :hover {
        background-Color: #159BF4;
        border: 1px solid black;
    }
`
export default (props) => {
  const min = 40
  const max = 80
  const gerarIdade = () => parseInt(Math.random() * (max - min) + min)
  const gerarCafe = () => Math.random() > 0.5
  return (
    <div>
      <div>Filho</div>
      <Button
        onClick={function (e) {
          props.quandoClicar("João", gerarIdade(), gerarCafe());
        }}
      >
        Fornecer Informações
      </Button>
    </div>
  );
};
