import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import companyLogo from '../../img/Ecociclo.png';

const Header: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    // <Navbar bg="light" expand="lg">
         
    //   <Container>
    //     <Navbar.Brand href="#home"><a href="/"><img src={companyLogo} alt="" className="ml-3 " /></a></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto d-flex center">
    //         <Nav.Link as={Link} className="nav-Item" to="/">
    //           Início
    //         </Nav.Link>
    //         <Nav.Link as={Link} className="nav-Item" to="/tarefas">
    //           Ações
    //         </Nav.Link>
    //         <Nav.Link as={Link} className="nav-Item" to="/ranking">
    //           Ranking
    //         </Nav.Link>
    //         <Nav.Link as={Link} className="nav-Item" to="/premios">
    //           Prêmios
    //         </Nav.Link>
    //         <Nav.Link as={Link} className="nav-Item" to="/equipe">
    //           Equipe
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};
export default Header;
