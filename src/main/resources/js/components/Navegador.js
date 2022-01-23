import React, { Component } from 'react';

//import Nav from 'react-bootstrap/Nav'
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container, NavItem, Form, FormControl, Button } from "react-bootstrap";

const Navegador = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" color="white" fixed="top">
      
      <Container fluid>
    <Navbar.Brand href="/invitado">Inicio</Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
    
          <NavItem>
          <NavLink className="navegar"to="/">-  Bienvenido  -</NavLink></NavItem>
          <NavItem>
          <NavLink to="/invitado/index">-  Invitados  - </NavLink></NavItem>
          <NavItem>
          <NavLink to="/invitado/form">-  Nuevo  -</NavLink></NavItem>
          <NavItem><NavLink to="/invitado/edit/5" visible="false">-  Edicion  - </NavLink></NavItem>
          <NavItem>
          <NavLink to="/acerca">-  Acerca de:  -</NavLink></NavItem>
    </Nav>
      <Form className="d-flex" style={{position:'absolute',right:'0'}}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </Navbar.Collapse>
    </Container>
    </Navbar>

  );
};

Navegador.propTypes = {};

export default Navegador;

/**import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="collapse navbar-collapse" id="navbars">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/invitado/index">List  </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/invitado/form">Create</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/invitado/edit/5">Edit</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}*/
