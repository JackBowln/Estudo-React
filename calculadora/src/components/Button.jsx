import React from 'react'
import styled from 'styled-components'
import './button.css'

export default props =>{
    return(<>
            <button 
            onClick={e => props.click && props.click(props.label)
            }
            className={`
            button 
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
            `}>{props.label}</button>
            </>
        )
}
