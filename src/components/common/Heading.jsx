import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './styles/Heading.css';

function Heading() {
  return (
    <React.Fragment>
      <section id="nav-bar">
        <Navbar bg="light" expand="sm">
          <Navbar.Brand href="/">
            <img src="img/Logo Zece La Informatica.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#top">Acasa</Nav.Link>
              <Nav.Link href="/">Modulul 1</Nav.Link>
              <NavDropdown title="Modulul 2" id="basic-nav-dropdown">
                <NavDropdown.Item href="/">Clasa a IX-a</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Clasa a X-a</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Clasa a XI-a</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/">Modulul 3</Nav.Link>
              <Nav.Link href="/">Despre noi</Nav.Link>
              <Nav.Link href="/">Referinte</Nav.Link>
              <Nav.Link href="/">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </React.Fragment>
  );
}

export default Heading;
