//criar uma tabela usando jsx que mostrar todos os pordutos de produtos.jsx com colunas para cada um dos atributos. com repetição
import React from "react";
import "./tabelaProdutos.css";
import produtos from "../../data/Produtos";

export default (props) => {
  //O array "Produtos" é mapeado e pega-se todos os elementos para serem convertidos em uma lista

  function getLinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id}
         className={i % 2 === 0? 'par': 'impar'}>
          <td>{produto.id}</td>
          <td>{produto.produto}</td>
          <td>R${produto.preco.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Nome</th>
            <th>Preco</th>
          </tr>
        </thead>
        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
};

// import React from "react";
// import Produtos from "../../data/Produtos";
// import './tabelaProdutos.css'

// export default (props) => {
//   const ListaDeProdutos = Produtos.map((Produto) => {
//     //O array "Produtos" é mapeado e pega-se todos os elementos para serem convertidos em uma lista
//     return (
//         <div className= "TabelaProdutos">
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Produto</th>
//             <th>Preço</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr key={Produto.id}>
//             <td>{Produto.id}</td>
//             <td>{Produto.produto}</td>
//             <td>R${Produto.preco.toFixed(2).replace('.', ',')}</td>
//           </tr>
//         </tbody>
//       </table>
//       </div>
//     );
//   });

//   return (
//     <div>
//       <th style={{ border: "1px solid black" }}>{ListaDeProdutos}</th>
//     </div>
//   );
// }
