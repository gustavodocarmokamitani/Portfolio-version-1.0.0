import React, { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import GoogleMaps from "./GoogleMaps";
import "./Maps.scss";


const Maps = () => (
    <Container className="containerMaps">
        <hr/>
        <h1>Projetos</h1>
        <hr/>
        <Row className="rowContent">
            <Col xs={12} lg={6}>
                <Row>
                    <h2>Search in Map</h2>
                </Row>
                <hr/>
                <Row>
                    <Form>
                        <Form.Group controlId="formMaps">
                            <Form.Control type="text" name="cep" placeholder="Zip code" />
                        </Form.Group>
                
                    <Card style={{ width: '80%' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                
                    <Button className="btnMaps mt-3" type="submit"><span>Search</span></Button>
                    </Form>
                </Row>
            </Col>
            <Col xs={12} lg={6}>
                <GoogleMaps/>
            </Col>
        </Row>
    </Container>
);

export default Maps;