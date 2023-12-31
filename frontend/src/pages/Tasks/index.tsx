import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import moment from "moment";
import "./index.css";

interface ITask {
  id: number;
  title: string;
  description: string;
  finished: boolean;
  created_at: Date;
  updated_at: Date;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const history = useHistory()

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const response = await api.get("/tasks");
    console.log(response);
    setTasks(response.data);
  }

  function formatDate(date: Date) {
    return moment(date).format("DD/MM/YYYY");
  }

  function newTask(){
    history.push('/tarefas_cadastro')
}

function viewTask(id: number){
    history.push(`/tarefas/${id}`)
}

  return (
    <div className="container">
      <br />
      <div className="task-header">
        <h1>Suas ações enviadas</h1>
        <button className="icon-action"  onClick={newTask}>
          Enviar nova ação
        </button>
      </div>

      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Data de Atualização</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{formatDate(task.updated_at)}</td>
              <td>{task.finished ? "Finalizado" : "Pendente"}</td>
              <td>
                <Button
                  size="sm"
                  variant="success"
                  onClick={() => viewTask(task.id)}
                >
                  Visualizar
                </Button>{" "}                
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Tasks;
