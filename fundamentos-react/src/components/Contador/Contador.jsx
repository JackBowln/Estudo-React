import React, {Component} from 'react'
import styled from 'styled-components';

const Button = styled.button`
    border: none;
    margin: 4px;
    width: 100px;
    height: 40px;
    font-Size: 20px;
    background-Color: #47AFFF;
    transition: 2s;
    border-radius: 2px;
    :hover {
        border: 1px solid black;
    }
`
const Numero = styled.input`
    font-size: 2rem;
    width: 80px;
    min-width: 80px;
    border: none;
    display: flex;
    margin-left: 40%;
    `

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,

    }

    // constructor(props){
    //     super(props)
    //     this.inc = this.inc.bind(this)

    // }
    
    inc = () => {
        this.setState({ numero: this.state.numero + this.state.passo})
    }

    dec = () => {
        this.setState({ numero: this.state.numero - this.state.passo})
    }
    setPasso = (e) =>{
        this.setState({
            passo: +e.target.value,
        })
    }
    setNuminic = (e) =>{
        this.setState({
            numero: +e.target.value,
        })
    }
    render() {

        return (
            <div>
                <h2>Contador</h2>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                        <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso}/>
                </div>
                <div>
                    <label htmlFor="numInput">Número: </label><br></br>
                        <Numero id="numInput" type="number" value={this.state.setNuminic} onChange={this.setNuminic}/>
                </div>

                <p> {this.state.numero}</p>
                <Button onClick={this.inc}
                >Adicionar</Button>

                <Button onClick={this.dec} 
                >Diminuir</Button>
            </div>
        )
    }
}