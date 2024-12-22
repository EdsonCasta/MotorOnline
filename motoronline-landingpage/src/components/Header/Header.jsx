import React from "react";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/Image/logo.png" alt="MotorOnline Logo" className="logo" />
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
        <img src="/Image/mazda.png" alt="Mazda" className="brand-logo" />
        <img src="/Image/chevrolet.png" alt="Chevrolet" className="brand-logo" />
        <img src="/Image/ford.png" alt="Ford" className="brand-logo" />
      </div>
    </header>
  );
}

export default Header;
