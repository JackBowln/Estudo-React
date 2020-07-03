import React from 'react'
import styled from 'styled-components'


const bgbutton = "#f0f0f0"
const borderButton = "solid 1px #888"
const Button = styled.button`
    
    font-size: 1.4rem;
    background-color: ${bgbutton};
    border: none;
    border-right: ${borderButton};
    border-bottom: ${borderButton};
    outline: none;
    `

export default props =>{
    return(
            <Button>{props.label}</Button>
        )
}