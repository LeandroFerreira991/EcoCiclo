import React from "react";
import premio1 from '../../img/premio-natura.jpg';
import premio2 from '../../img/premio-natura-men.jpg';
import premio3 from '../../img/pote-ecologico.jpg';
import premio4 from '../../img/garrafa-ecologica.jpg';


const Equipe: React.FC = () => {
  return (
    <div className="container">
    <h1>Sua Equipe</h1>
    <ul>
        <li>
            <img src="" alt="" />
            <p>Você</p>
        </li>
        <li>
            <img src="" alt="" />
            <p>Henrique da Silva</p>
        </li>
        <li>
            <img src="" alt="" />
            <p>Pedro Augusto</p>
        </li>
        <li>
            <img src="" alt="" />
            <p>Joana Teles</p>
        </li>
        <li>
            <img src="" alt="" />
            <p>Emilia Joaquina</p>
        </li>
    </ul>
    </div>
    )
}

export default Equipe;