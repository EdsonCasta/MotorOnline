import React from "react";

import "./ContactInfo.css";

function ContactInfo() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contáctanos</h2>
        <div className="contact-details">
          <div className="contact-item">
            <h3>Correos Electrónicos</h3>
            <p>ventas@motoronline.com</p>
            <p>soporte@motoronline.com</p>
          </div>
          <div className="contact-item">
            <h3>Números de WhatsApp</h3>
            <p>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                +57 123 456 7890
              </a>
            </p>
            <p>
              <a href="https://wa.me/0987654321" target="_blank" rel="noopener noreferrer">
                +57 098 765 4321
              </a>
            </p>
          </div>
          <div className="contact-item">
            <h3>Redes Sociales</h3>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
