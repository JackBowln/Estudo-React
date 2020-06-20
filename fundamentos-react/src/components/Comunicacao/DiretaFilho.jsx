import React from 'react'

export default props => {
    return (
        <div>
            <span>{props.texto} </span>
    <span><strong>{props.numero}</strong> </span>  {/*o pai tem uma referência para seu filho*/}
            <span>{props.bool ? 'Verdadeiro ' : 'falso'}!</span>
        </div>
    )
}