import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./Hero.scss";
import vector from "../image/vector.png";
import user from "../image/User.jpeg";

const Hero = () => (
    <Container className="containerHero"> 
        <Row className="justify-content-md-center">
            <Col xs={12} lg={6}>
                <Row>
                    <Col className="heroTitle">
                        <h2>Designer,</h2>
                        <h2>Developer</h2>
                        <h2>Front-end.</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="heroCopy">
                        <p>Criando e desenvolvendo projetos com o objetivo de aprender cada dia mais. Em busca de realizar o sonho de ser um grande programador.</p>
                    </Col>
                </Row>
                <Row className="heroBtn">
                    <Col>
                        <Button><span>Sobre mim</span></Button>
                        <Button><span>Projetos</span></Button>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={6}>
                <img class="vectorImg" src={vector}></img>
                <img class="userImg" src={user}></img>
            </Col>
        </Row>
    </Container>
);

export default Hero;