import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./About.scss";
import aboutImage from "../image/aboutImage.png";

const About = () => (
    <Container className="containerAbout">
        <Row>
            <Col className="titleAbout">
                <h2>Hi, I'm G. Kamitani,</h2>
                <h2>Nice to meet you. 👋</h2>
                <p>Tenho 24 anos e atualmente cursando Analise e Desenvolvimento de Sistemas na Faculdade Impacta de Tecnologias.<br/>
                Em busca de uma oportunidade para desenvolver e melhorar meus conhecimentos, e também algo que possa me instruir de forma crescente e contínua, visando sempre o crescimento entre mim e a empresa.</p>
            </Col>
        </Row>
        <Row>
            <Col className="skillsAbout" lg={5} xs={11}>
                <Row>
                    <Col xs={2} lg={2}>
                        <img src={aboutImage}></img>
                    </Col>
                    <Col lg={9} xs={9} className="aboutContent">
                        <h4>Designer</h4>
                        <p>Estou sempre valorizando estruturas com conteúdos simples e designs minimalistas.</p>
                        <p>Habilidades:</p>
                        <Row>
                            <Col className="skills">
                                <p>• UX/UI</p>
                                <p>• Figma</p>
                                <p>• Photoshop</p>
                                <p>• Pen & Paper</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>

            <Col className="skillsAbout" lg={5} xs={11}>
                <Row>
                    <Col xs={2} lg={2}>
                        <img src={aboutImage}></img>
                    </Col>
                    <Col lg={9} xs={9} className="aboutContent">
                        <h4>Front-end Developer</h4>
                        <p>Gosto de desenvolver sistemas do zero e dar vida as ideias dentro do browser.</p>
                        <p>Habilidades:</p>
                        <Row>
                            <Col className="skills">
                                <p>• Html</p>
                                <p>• Css</p>
                                <p>• Scss</p>
                                <p>• JScript</p>
                            </Col>
                            <Col className="skills">
                                <p>• Bootstrap</p>
                                <p>• React.Js</p>
                                <p>• Node</p>
                                <p>• Github</p>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
);

export default About;