import React from "react";
import Alunos from "../../data/Alunos";

export default (props) => {
  //     const li1 = (
  //     <li>
  //       {Alunos[0].id}) {Alunos[0].nome} -> {Alunos[0].nota}
  //     </li>
  //   );

  const ListaDeAlunos = Alunos.map((Aluno) => {
    //O array "Alunos" é mapeado e pega-se todos os elementos para serem convertidos em uma lista
    return (
      <li key={Aluno.id}>
        {Aluno.id} {Aluno.nome} -> {Aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul style={{listStyle: 'none'}}>{ListaDeAlunos}</ul>
    </div>
  );
};
