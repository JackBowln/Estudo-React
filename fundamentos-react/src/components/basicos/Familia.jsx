import React from 'react';
import FamiliaMembro from './FamiliaMembro';

export default props =>{
    return(
        <div>
            <FamiliaMembro nome = "Vinicius" {...props}/>
            <FamiliaMembro nome = "Marina" snome = {props.snome} />
            <FamiliaMembro nome = "Diego" snome="Dias" />
            <FamiliaMembro nome = "Propriedade" snome = "Componente"/>
        </div>
    )
}