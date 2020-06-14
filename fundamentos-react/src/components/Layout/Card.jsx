import React from "react";
import "./Card.css";

export default (props) => {
  const CardStyle = {
    backgroundColor: props.color || '#F00',
    borderColor: props.color || '#F00'
  }
  return (
    <div className = "Card" style = {{

      backgroundColor: props.color || '#008',          //pode-se tanto passar uma variável quanto escrever literalmente as propriedades de estilo.
      borderColor: props.color || '#008'

    }}>
      <div className= 'Title'>{props.titulo}</div>
      <div className = 'Content'>
        {props.children}
      </div>
    </div>
  );
};
