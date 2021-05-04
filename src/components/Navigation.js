import React from "react";
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import "./Navigation.scss";

const Navigation = () => (
    <Navbar expand="lg">
        <Container className="containerNavigation">
            <Navbar.Brand href="#home"><span>g</span><span> | Kamitani</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="aroba" href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Sobre mim</Nav.Link>
                    <Nav.Link href="#link">Projetos</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Button className="btn-contact px-5"><span>Say Hello</span></Button>
                </Nav>                
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Navigation;