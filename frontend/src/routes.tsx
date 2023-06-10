import React from 'react';
import {Switch, Route} from 'react-router-dom'
 
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import TasksForm from './pages/Tasks/Form';
import TasksDetail from './pages/Tasks/Detail';
import Premios from "./pages/Premios";
import Ranking from "./pages/Ranking";
import ChatBot from "./pages/ChatBot";
import Equipe from "./pages/Equipe";
 
const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tarefas" exact component={Tasks} />
            <Route path="/tarefas_cadastro" exact component={TasksForm} />
            <Route path="/tarefas_cadastro/:id" exact component={TasksForm} />
            <Route path="/tarefas/:id" exact component={TasksDetail} />
            <Route path="/premios" exact component={Premios} />
            <Route path="/ranking" exact component={Ranking} />
            <Route path="/chat" exact component={ChatBot} />
            <Route path="/equipe" exact component={Equipe} />
        </Switch>
    );
}
 
export default Routes;