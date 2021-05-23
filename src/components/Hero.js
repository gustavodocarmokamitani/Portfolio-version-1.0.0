import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.scss";
import Btn from "./Btn";
import vector from "../image/vector.png";
import user from "../image/User.jpeg";

const Hero = () => (
    <div id="hero">
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
                            <p>Criando e desenvolvendo projetos com o objetivo de aprender cada dia mais. 
                            
                            <br/>
                            Jovem entusiasta que se dedica a aprender e evoluir. Em busca de alcançar o potencial de ser um grande programador.</p>                            
                        </Col>
                    </Row>
                    <Row className="heroBtn">
                        <Col>
                            <Btn><a href="#hero"><span>Sobre mim</span></a></Btn>
                            <Btn><a href="https://laughing-nobel-4b5c86.netlify.app/index.html" target="_blank"><span>StudiOn</span></a></Btn>
                            <Btn><a href="https://affectionate-ardinghelli-b07a69.netlify.app/" target="_blank"><span>MagBank</span></a></Btn>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} lg={6}>
                    <div className="heroImage">
                        <img class="vectorImg" src={vector}></img>
                        <img class="userImg" src={user}></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Hero;