import React from "react";
import "./WelcomeSection.css";
import { Link } from "react-router-dom";

const WelcomeSection = () => {
  return (
    <section className="welcome">
      <div
        className="welcome-background"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/floral-hero.jpg)`
        }}
      ></div>

      <div className="welcome-content peonia-layout">

        {/* Columna izquierda SOLO logo */}
        <div className="hero-left">
          <img
            src={`${process.env.PUBLIC_URL}/img/logo_peonia2.png`} 
            alt="La Peonía"
            className="hero-logo"
          />
        </div>

        {/* Columna derecha texto y botones */}
        <div className="hero-right">
          <h1 className="welcome-title">
            Ramos artesanales para cada momento especial
          </h1>

          <p className="subtitle-text">
            Diseño floral delicado, composiciones únicas y entrega a domicilio.
            En La Peonía creamos emociones a través de las flores.
          </p>

          <div className="hero-buttons">
            <Link to="/ramos" className="btn btn-primary">
              Ver ramos
            </Link>

            <Link to="/contacto" className="btn btn-secondary">
              Encargar ahora
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WelcomeSection;