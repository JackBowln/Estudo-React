import React, { Component } from 'react'
import styled from 'styled-components'

const DivCalculator = styled.div `
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;
    background-color: red;
`
export default class Calculator extends Component {
    render(){
        return(
            <DivCalculator></DivCalculator>
        )
    }
}