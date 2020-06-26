import React, { useState } from 'react';
import './Input.css';

export default props => {
    const [valor, setValor] = useState('Estado Inical')
    const quandoMudar = (e) =>{
        
        setValor(e.target.value)
    }
    return (
        <div className = "Input">
            <h2>{valor}</h2>
            <input value={valor} style={{color: "#0B3954"}} onChange={quandoMudar} placeholder="Componente Controlado"/>
            <input type="submit" value="Teste"/>
        </div>
    )
}