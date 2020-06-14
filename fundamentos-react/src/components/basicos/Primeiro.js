import React from 'react'; //desncessário nesse arquivo, pois não há react aqui, mas caso houvesse algo relacionado ao react precisaria de um import

function Primeiro() {
    const msg = "Seja bem vindo(a)"
    return (
    <div>
        <h2> Primeiro Componente JSX</h2>
    <p>{msg}</p>                                   {/*"chaves" indicam um fragmento de javascript dentro do react, como uma variável.*/}
    </div>
    )
}

export default Primeiro