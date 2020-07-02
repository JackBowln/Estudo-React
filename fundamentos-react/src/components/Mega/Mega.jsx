import React, { useState } from "react";
import styled from 'styled-components';

const Button = styled.button`
    border: none;
    margin: 4px;
    width: 100px;
    height: 55px;
    font-Size: 20px;
    background-Color: #00FFC5;
    transition: 200ms;
    border-radius: 2px;
    :hover {
        transform: scale(1.06);
    }
`
const Input = styled.input`
    font-size: 20px;
    text-align: center;
    width: 40px;
`

export default (props) => {
    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(aleatorio)
            ? gerarNumeroNaoContido(min, max, array)
            : aleatorio;
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums);
                return [...nums, novoNumero];
            }, [])
            .sort((n1, n2) => n1 - n2);

        return numeros;
    }

    const [qtde, setQtde] = useState(props.qtde || 6);
    const numerosIniciais = gerarNumeros(qtde);
    const [numeros, setNumeros] = useState(numerosIniciais);

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(", ")}</h3>
            <div>
                <label>Qtde de Números: </label>
                <Input
                    type="number"
                    value={qtde}
                    onChange={(e) => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                    }}
                />
            </div>
            <Button onClick={ () => setNumeros(gerarNumeros(qtde))}>
                Gerar Números
            </Button>
        </div>
    );
};