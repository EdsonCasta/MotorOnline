import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2 className="footer-logo">MotorOnline</h2>
                    <p className="footer-description">
                        La mejor plataforma para encontrar y comprar motos de calidad en línea.
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Enlaces</h3>
                    <nav>
                        <ul className="footer-links">
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#caracteristicas">Características</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-section">
                    <h3>Contacto</h3>
                    <ul className="footer-contact">
                        <li><span>Email:</span> info@motoronline.com</li>
                        <li><span>Teléfono:</span> +57 123 456 7890</li>
                        <li><span>Ubicación:</span> Bogotá, Colombia</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Síguenos</h3>
                    <div className="footer-social">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                        </a>
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                            <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className="footer-legal">
                <a href="/terminos" className="footer-legal-link">Términos y Condiciones</a>
                <a href="/privacidad" className="footer-legal-link">Política de Privacidad</a>
            </div> */}
            <div className="footer-bottom">
                <p>&copy; 2024 MotorOnline. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
