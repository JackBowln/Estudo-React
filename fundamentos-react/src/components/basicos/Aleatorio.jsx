import React from "react";

export default (props) => {
//   const min = props.min;
//   const max = props.max;

  const{ min, max } = props         //destructuring. Que é a mesma coisa que as duas variáveis criadas acima.


{/*just like this -> */}          const [a, b] = [1, 2]
{/*also like this -> */}          const {c, d, e, f} = {c: 12, d: min, e:'test', f: 2.51 }


  const Rand = parseInt(Math.random() * (max - props.min)) + props.min;
  const Rand1 = parseInt(Math.random() * (max - props.min)) + props.min;

  return (
    <div>
      <h2> Valor Aleatório </h2>
      <p>
        <strong>Valor Mínimo = {min}</strong>
      </p>
      <p>
        <strong>Valor Máximo = {max}</strong>
      </p>
      <p>
        <strong>Valores Escolhidos = {Rand} e {Rand1}</strong>
      </p>
      <p>
          <h5>Atribuição via desestruturação (destructuring assignment):</h5>
          {c}, {d}, {e}, {f}
      </p>
    </div>
  );
};
