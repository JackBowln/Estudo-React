import React from 'react'


export default function ComParametro(props){
    console.log(props);

    const sub =  props.subtitulo
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{sub}</h3>                    {/*para que o a função seja recebida é necessário chamar uma propriedade da função, que é o que está entre parenteses ou criar uma constante com essas propriedades*/}
        </div>
    )
}