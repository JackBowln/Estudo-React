import React from 'react'
import styled from 'styled-components'
import './button.css'

const bgbutton = `
    color: #f0f0f0;
`

const borderButton = `
    border: solid 1px #888;
`
const Button = styled.button`
    font-size: 1.4rem;
    background-color: ${bgbutton};
    border: none;
    border-right: ${borderButton};
    border-bottom: ${borderButton};
    outline: none;
    
    &:active{
        background-color: #ccc;
    }
    
    &.doubleButton{
        grid-column: span 2;
        background-color: red;
    }
`


export default props =>{
    return(
            <Button>{props.label}</Button>
        )
}
