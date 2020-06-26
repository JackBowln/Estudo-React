import React from "react";

export default (props) => {
  const min = 40
  const max = 80
  const gerarIdade = () => parseInt(Math.random() * (max - min) + min)
  const gerarCafe = () => Math.random() > 0.5
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={function (e) {
          props.quandoClicar("João", gerarIdade(), gerarCafe());
        }}
      >
        Fornecer Informações
      </button>
    </div>
  );
};
