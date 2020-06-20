import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho texto="filho1" numero={232} bool={true}></DiretaFilho>{" "}
      {/* propriedades passadas para o componente filho de maneira simples */}
    </div>
  );
};
