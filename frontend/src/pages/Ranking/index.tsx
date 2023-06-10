import React from "react";
import { Table } from "react-bootstrap";

const Ranking: React.FC = () => {
  return (
    <div className="container">

      <h1>Ranking</h1>
      <button>Equipes</button>
      <button>Individual</button>

      <div>
        <img src="" alt="" />
        <p>Nome da Equipe</p>
      </div>

      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>CLASSIFICAÇÃO</th>
            <th>EQUIPE</th>
            <th>PONTUAÇÃO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1º</td>
            <td>Mudando o mundo</td>
            <td>585</td>
          </tr>
          <tr>
            <td>2º</td>
            <td>Força Tarefa</td>
            <td>420</td>
          </tr>
          <tr>
            <td>3º</td>
            <td>Todos por todos</td>
            <td>389</td>
          </tr>
          <tr>
            <td>4º</td>
            <td>Go Team</td>
            <td>305</td>
          </tr>
          <tr>
            <td>5º</td>
            <td>Sustentável</td>
            <td>285</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Ranking;