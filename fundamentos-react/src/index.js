import ReactDOM from'react-dom'
import React from 'react';
import './index.css'

// import ReactDOM from'react-dom'        (importação da DOM, ou Document object model, do react.
//                                          Isso possibilita a renderização, ReactDOM.render() de um código jsx na nossa aplicação)
// import React from 'react';              (O isso nos propicia trabalhar com o react na aplicação javascript)
// import './index.css'                    (O fato de um arquivo css ser criado não o faz ser linkado com o JS, é necessário referencia-lo)


const tag = <strong>Olá React!</strong>

ReactDOM.render(

        <div>

            {tag}                              
            {/* A sintaxe JSX (javascript react) se apresenta quando usamos 
                uma sintaxe muito parecida do html mas dentro de um código javascript */}

        </div>,
    document.getElementById('root')

    )