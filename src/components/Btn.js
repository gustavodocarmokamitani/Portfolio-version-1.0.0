import React from 'react';
import { Container, Button } from 'react-bootstrap';
import "./Btn.scss";

const Btn = ({children}) => (    
    <Button className="appBtn">{children}</Button>    
);

export default Btn;