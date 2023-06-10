import React from "react";
import Button from 'react-bootstrap/Button';
import * as icons from 'react-bootstrap-icons';
import sustent1 from '../../img/3-removebg-preview.png';
import sustent2 from '../../img/4-removebg-preview.png';
import sustent3 from '../../img/5-removebg-preview.png';
import sustent4 from '../../img/6-removebg-preview.png';
import chatbot from '../../img/chatbot.png';
import logoeesg from '../../img/logo.png';
import "./index.css";

const Home: React.FC = () => {
  return (

    <div>
      {/* Leitor de libras */}
      <div className="enabled">
        <div vw-access-button className="active"></div>
        <div vw-plugin-wrapper>
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
      {/* Fim leitor */}


      <div id="slider" className="block_one ">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 col-md-6 align-self-center mb-md-0 mb-4 order-md-1 order-2 my-5">
              <h2>Bem vindo ao portal EcoCiclo</h2>
              <h4 className="mb-4 mt-5">Participe de uma equipe, cadastre suas ações, ganhe pontos, troque por prêmios</h4>
              <Button variant="success" size="lg" className="">Saiba mais</Button>{' '}
              
            </div>
            <div className="col-lg-6 col-md-6 align-self-center text-center order-md-2 order-1 logo">
              <img src={logoeesg} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Chatbot --> */}
      <div className=" col-11 m-auto position-fixed d-flex justify-content-end  fixed-bottom">
        <a href="/chat" target="_blank">
          <span className="p-2 mbr-iconfont socicon-whatsapp socicon" /><img src={chatbot} alt=" imagem do bot" />
        </a>
      </div>
      {/* fim chatbot  */}


      {/* Conteúdo 1 */}
      <div className="container-fluid text-center about">
        <div className="container">
          <h1>Sobre Nós</h1>
        </div>
        <div className="container about-text text-center col-lg-6">
          <p>A EcoCiclo tem como objetivo contribuir para as questões ESG (Environmental, Social, Governance)
             que pode ser traduzido como Ambiental, Social e Governança que possuem três pilares.</p>  
          <p>
            Ambiental: refere-se às questões de meio ambiente e sustentabilidade. Relaciona-se às 
            preocupações de uma empresa com a mudança climática, o uso de recursos de maneira sustentável,
            a poluição e todas as iniciativas que possam contribuir para as causas ambientais.
          </p>
          <p>
            Governança: falamos, aqui, da governança empresarial, ou seja, como a empresa é administrada
             por seus gestores e se ela atende aos interesses das várias partes interessadas na empresa –
              os colaboradores, os clientes, os acionistas e qualquer público, seja ele interno ou externo.
          </p>
          <p>
            Social: questões sociais são cada vez mais latentes em uma organização,
             e este pilar serve como um norte para que uma empresa preze pelo bem-estar
             de seus funcionários e clientes. Respeitando salários justos e compatíveis com 
             as práticas de mercado, política clara de inclusão e diversidade no quadro de funcionários, 
             postura em relação a direitos humanos do público interno da empresa e de seus fornecedores.
          </p>
        </div>
        {/* <button type="button">Vamos conversar</button>  */}

      </div>
      {/* fim Conteúdo 1 */}


      {/* NOSSOS SERVICOS */}
      <div id="servicos" className="service">
        <div className="container">
          <h2 className="title text-center">Aqui você podera:</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
              <a href="#" className="destaque">
                <div className="img-container mb-3">
                  <img src={sustent1} alt="" />
                  {/* <!-- <i className=" icone fas fa-desktop"></i> -->
              <!-- <img src="assets/destaque1.svg" className="img-fluid" /> --> */}
                </div>
                <h3 className="text-uppercase">Participar de equipes</h3>
                <p className="mb-0">
                  A equipe é formada por 5 membros de forma aleatória, promovendo a integração
                   de diversos setores da empresa e mantendo uma disputa mais justa com cada um.
                </p><br /><br /><br />  <br /><br /><br />
              </a>
            </div>
            <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
              <a href="#" className="destaque">
                <div className="img-container mb-3">
                  <img src={sustent2} alt="" />
                  {/* <!-- <i className="icone far fa-eye"></i> -->
              <!-- <img src="assets/destaque2.svg" className="img-fluid" /> --> */}
                </div>
                <h3 className="text-uppercase">Enviar ações</h3>
                <p className="mb-0">
                  Você podera enviar ações como cultivo de horta doméstica,	separação de lixo para reciclagem,
                   hábitos alimentares saudáveis, prática de atividades físicas, participação em projetos de voluntariado.
                    A comprovação pode ser feita através do envio de fotografias, vídeos e documentos.
                </p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
              <a href="#" className="destaque">
                <div className="img-container mb-3">
                  <img src={sustent3} alt="" />
                </div>
                <h3 className="text-uppercase">Ganhar pontos</h3>
                <p className="mb-0">
                  A duas formas de pontuação a da equipe e a individual, ambas são de acordo com as interações na plataforma,
                   com o cadastramento dos comprovantes.
                </p><br /><br /><br /><br /> <br /><br />
              </a>
            </div>
            <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
              <a href="#" className="destaque">
                <div className="img-container mb-3">
                  <img src={sustent4} alt="" />
                  {/* <i className="icone  fas fa-layer-group"></i> 
               <img src="assets/destaque4.svg" className="img-fluid" /> */}
                </div>
                <h3 className="text-uppercase">Trocar por prêmios</h3>
                <p className="mb-0">
                  Dentro da plataforma ao cadastrar uma ação a pessoa ganha pontos e pode trocar por prêmios ao final
                  do ciclo vigente. As equipes também acumulam pontos para subir no ranking, as 3 melhores equipes ganham uma
                  premiação a ser definida pela empresa.
                </p><br />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* FIM NOSSOS SERVICOS */}


      <footer>
        <p>Siga-nos em nossas redes sociais</p>
        <div className="social">
          <a href="#">< icons.Facebook color="white" size={20} /></a>
          <a href="#">< icons.Instagram color="white" size={20} /></a>
          <a href="#">< icons.Dribbble color="white" size={20} /></a>
        </div>
      </footer>
      <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
      <script>
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      </script>
    </div>
  )
};

export default Home;
