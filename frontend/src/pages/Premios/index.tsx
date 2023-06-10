import React from "react";
import premio1 from '../../img/premio-natura.jpg';
import premio2 from '../../img/premio-natura-men.jpg';
import premio3 from '../../img/pote-ecologico.jpg';
import premio4 from '../../img/garrafa-ecologica.jpg';


const Premios: React.FC = () => {
  return (
    <div className="container">
      <h1>Prêmios disponiveis</h1>

      <div id="servicos">
        <p className="title">Sua pontuação é de 190 pontos</p>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
            <a href="#" className="destaque">
              <div className="img-container mb-3">
                <img src={premio1} alt="" />
              </div>
              <h3 className="">Natura Ekos Castanha Feminino</h3>
              <h4>205 pontos</h4>
              <p className="mb-0">
                Conteúdo: 1 sabonete em barra cremoso puro vegetal Ekos Castanha + 1 polpa hidratante para as mãos castanha, 40 g + 1 sacola de presente PP.
              </p>
              <button>Resgatar</button>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
            <a href="#" className="destaque">
              <div className="img-container mb-3">
                <img src={premio2} alt="" />
              </div>
              <h3 className="">Natura Ekos Copaíba Masculino</h3>
              <h4>315 pontos</h4>
              <p className="mb-0">
                Conteúdo: 1 Desodorante colônia masculino 100ml + 1 Polpa hidratante para mãos 75g + 1 Sabonete em barra puro vegetal para corpo e barba 100g + 1 Sacola de presente PP.
              </p>
              <button>Resgatar</button>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
            <a href="#" className="destaque">
              <div className="img-container mb-3">
                <img src={premio3} alt="" />
              </div>
              <h3 className="">Pote de Marmita Ecológico</h3>
              <h4>255 pontos</h4>
              <p className="mb-0">
                Conteúdo: 2 potes com divisórias, interior de aluminio, colher, garfo e um par de hashi, tampa com apoio para celular. Este item foi fabricado com materiais reciclados.
              </p>
              <button>Resgatar</button>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
            <a href="#" className="destaque">
              <div className="img-container mb-3">
                <img src={premio4} alt="" />
              </div>
              <h3 className="">Garrafa Térmica Ecológica</h3>
              <h4>190 pontos</h4>
              <p className="mb-0">
                Garrafa com 400ml de capacidade máxima. Garrafa livre de BPA, perfeita também para você transportar seu chá, infusor incluso. O revestimento interno em aço inoxidável.
              </p>
              <button>Resgatar</button>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Premios;