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
                <p>Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
        </Row>
        <Row>
            <Col className="skillsAbout">
                <Row>
                    <Col lg={2} xs={12}>
                        <img src={aboutImage}></img>
                    </Col>
                    <Col lg={10} xs={12}>
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

            <Col className="skillsAbout">
                <Row>
                    <Col lg={2} xs={12}>
                        <img src={aboutImage}></img>
                    </Col>
                    <Col lg={10} xs={12}>
                        <h4>Front-end Developer</h4>
                        <p>Gosto de desenvolver sistemas do zero e dar vida as ideias dentro do browser.</p>
                        <p>Habilidades:</p>
                        <Row>
                            <Col className="skills">
                                <p>• Html</p>
                                <p>• Css</p>
                                <p>• Scss</p>
                                <p>• JavaScript</p>
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