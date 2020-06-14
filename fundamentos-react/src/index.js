import ReactDOM from'react-dom'
import React from 'react';
import './index.css'
import Primeiro from './components/basicos/Primeiro'

// import ReactDOM from'react-dom'        (importação da DOM, ou Document object model, do react.
//                                          Isso possibilita a renderização, ReactDOM.render() de um código jsx na nossa aplicação)

// import React from 'react';              (O isso nos propicia trabalhar com o react na aplicação javascript)

// import './index.css'                    (O fato de um arquivo css ser criado não o faz ser linkado com o JS, é necessário referencia-lo)

//import Primeiro from './components/basicos/Primeiro'      import da função "Primeiro.js" da pasta components
ReactDOM.render(

        <div>
            <Primeiro></Primeiro>
        </div>,
    document.getElementById('root')

    )