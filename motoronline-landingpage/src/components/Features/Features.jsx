import React from "react";

import "./Features.css";

function Features() {
  const features = [
    {
      title: "Calidad Garantizada",
      description: "Solo trabajamos con repuestos de la más alta calidad.",
    },
    {
      title: "Envío Rápido",
      description: "Entrega rápida y segura en toda la ciudad de Bogotá.",
    },
    {
      title: "Pago Contra Entrega",
      description: "Paga tus repuestos en el momento de recibirlos, sin complicaciones.",
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <h2 className="features-title">¿Por Qué Elegirnos?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
