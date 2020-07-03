import React from 'react'
import styled from 'styled-components'

const DisplayDiv = styled.div`
    grid-column: span 4;
    background-color: #0004;
    
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    font-size: 2.1em;
    `

export default props =>{
    return (
        <DisplayDiv>{props.value}</DisplayDiv>
    )
}