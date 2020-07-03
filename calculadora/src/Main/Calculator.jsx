import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const DivCalculator = styled.div `
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 48px 48px 48px 48px 48px;
`
export default class Calculator extends Component {
    render(){
        return(
            <DivCalculator>
                <Button label="AC"></Button>
                <Button label="/"></Button>
                <Button label="7"></Button>
                <Button label="8"></Button>
                <Button label="9"></Button>
                <Button label="*"></Button>
                <Button label="4"></Button>
                <Button label="5"></Button>
                <Button label="6"></Button>
                <Button label="-"></Button>
                <Button label="1"></Button>
                <Button label="2"></Button>
                <Button label="3"></Button>
                <Button label="+"></Button>
                <Button label="0"></Button>
                <Button label="."></Button>
                <Button label="="></Button>

            </DivCalculator>
        )
    }
}