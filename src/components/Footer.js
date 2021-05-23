import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "./Footer.scss";

const Footer = () => (
    <div className="footer">
        <Container className="d-flex justify-content-center">            

            <a href="https://www.linkedin.com/in/gustavo-kamitani/" target="_blank" rel="noopener noreferrer" className="mx-5 mt-2"><FontAwesomeIcon icon={faLinkedin} color="#fff" size="2x"/></a>          
        </Container>
    </div>
);

export default Footer;