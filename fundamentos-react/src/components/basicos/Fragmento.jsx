import React from 'react';

    export default function Fragmento (props){
        return (
            <React.Fragment>    {/* Or <></> (que não possibilita propriedades*/}
                <h2>Fragmento</h2>
                <p>Cuidados com esse erro!</p>
            </React.Fragment>
        )
    }