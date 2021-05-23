import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./Navigation.scss";
import Btn from "./Btn";

const Navigation = () => (
    <Navbar expand="lg" variant="dark">
        <Container className="containerNavigation">
            <Navbar.Brand href="#home"><span>g</span><span> | Kamitani</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#hero">Sobre mim</Nav.Link>
                    <Nav.Link href="#link">Projetos</Nav.Link>                    
                </Nav>
                <Nav className="ml-auto">                                    
                    <Btn className="btnNavigation"><a href="https://mywhats.net/gustavokamitani" target="_blank"><span>Say Hello</span></a></Btn>                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Navigation;