import React from "react";
import { Card } from "react-bootstrap";
import './Anuncio.css';
import frente from '../img/iphone-frente.jpg'

const Anuncio = () => {
    return (
        <div className="Anuncio">
            <img className="Foto" src={frente} />
            Iphone 13 Black Piano 128 Gb
        </div>
    );
}

export default Anuncio;