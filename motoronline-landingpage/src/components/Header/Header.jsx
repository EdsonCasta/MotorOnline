import React from "react";
import logo from "../../public/Image/logo.png";
import mazda from "../../public/Image/mazda.png";
import chevrolet from "../../public/Image/chevrolet.png";
import ford from "../../public/Image/ford.png";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="MotorOnline Logo" className="logo" />
        <h1>MotorOnline</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#caracteristicas">Características</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
      <div className="brand-logos">
        <img src={mazda} alt="Mazda" className="brand-logo" />
        <img src={chevrolet} alt="Chevrolet" className="brand-logo" />
        <img src={ford} alt="Ford" className="brand-logo" />
      </div>
    </header>
  );
}

export default Header;
