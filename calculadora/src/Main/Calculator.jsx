import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Display from '../components/Display'
const DivCalculator = styled.div`
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
`
const initialState ={
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}
export default class Calculator extends Component {
    state = { ...initialState}
    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }
    clearMemory() {
        this.setState ({...initialState})
    }
    setOperation(operation) {
        console.log(operation)
    }
    addDigit(n){
        if (n === '.' && this.state.displayValue.includes('.')){
            return
        }
        const clearDisplay = this.state.displayValue === '0'
         || this.state.clearDisplay
         const currentValue = clearDisplay ? '' : this.state.displayValue
         const displayValue = currentValue + n
         this.setState({displayValue, clearDisplay: false})

         if(n !== '.') {
             const i = this.state.current
             const newValue = parseFloat(displayValue)
             const values = [ ...this.state.values]
             values[i] = newValue
             this.setState({values})
             console.log(values)

         }
    }
    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)
        return (
            <DivCalculator>
                <Display value={this.state.displayValue}></Display>
                <Button triple label="AC" click={this.clearMemory}></Button>
                <Button operation label="/" click = {this.setOperation}></Button>
                <Button label="7" click = {this.addDigit}></Button>
                <Button label="8" click = {this.addDigit}></Button>
                <Button label="9"  click = {this.addDigit}></Button>
                <Button operation label="*" click = {this.setOperation}></Button>
                <Button label="4" click = {this.addDigit}></Button>
                <Button label="5" click = {this.addDigit}></Button>
                <Button label="6" click = {this.addDigit}></Button>
                <Button operation label="-"  click = {this.setOperation}></Button>
                <Button label="1" click = {this.addDigit}></Button>
                <Button label="2"  click = {this.addDigit}></Button>
                <Button label="3" click = {this.addDigit}></Button>
                <Button operation label="+" click = {this.setOperation}></Button>
                <Button double label="0" click = {this.addDigit} ></Button>
                <Button label="." click = {this.addDigit}></Button>
                <Button operation label="=" click = {this.setOperation}></Button>
            </DivCalculator>
        )
    }
}