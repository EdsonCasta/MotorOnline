import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./Section.css"; // Archivo CSS para los estilos

function AddSection() {
  return (
    <section id="find-parts" className="add-section">
      <div className="content-container">
        <h2 className="title">Encuentra los Mejores Repuestos para tu Vehículo</h2>
        <p className="description">Especializados en Mazda, Ford y Chevrolet.</p>
        <a href="#contact" className="contact-button">Contáctanos</a>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61559420653844" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a href="https://www.instagram.com/repuestos_en_linea_bogota" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="https://wa.me/573183704645?text=Hola,%20estoy%20interesado%20en%20sus%20productos" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AddSection;
