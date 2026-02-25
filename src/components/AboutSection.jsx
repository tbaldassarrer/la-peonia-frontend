import React, { useEffect } from "react";
import "../components/AboutSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, []);

  return (
    <section className="about-new-section">
      {/* Intro */}
      <div className="about-block" data-aos="fade-up">
        <h2 className="about-main-title">Sobre La Peonía Floristería</h2>
        <p className="about-intro">
          <b>Floristería boutique</b> · Ramos artesanales · Diseño floral para eventos
        </p>
      </div>

      {/* Bloque horizontal: imagen + texto */}
      <div className="about-block horizontal">
        <div className="about-image-wrapper-peonia" data-aos="fade-left" data-aos-delay="0">
          <img
            src={`${process.env.PUBLIC_URL}/img/peonia_about.jpg`} alt="Logo La Peonía"
            className="about-image-peonia"
          />
        </div>

        <div className="about-text-content" data-aos="fade-left" data-aos-delay="200">
          <p>
            En <b>La Peonía</b> creamos ramos con intención: composiciones cuidadas,
            flores de temporada y un estilo delicado que encaja con cada historia.
          </p>

          <p>
            Nos gusta trabajar con <b>paletas suaves</b>, texturas naturales y pequeños
            detalles (cintas, verdes, tarjetas) que convierten un ramo en un recuerdo.
          </p>

          <p>
            Ya sea un <b>cumpleaños</b>, un <b>agradecimiento</b> o un <b>evento</b>, te ayudamos
            a elegir el ramo ideal según la ocasión, el color y el presupuesto.
          </p>
        </div>
      </div>

      {/* Cards: esencia */}
      <section className="about-cards-section" data-aos="fade-left">
        <h2 className="about-cards-title">Nuestra esencia</h2>
        <div className="about-cards-container">
          <div className="about-card" data-aos="fade-left" data-aos-delay="0">
            <div className="card-icon">🌸</div>
            <h3 className="card-title">Artesanía</h3>
            <p className="card-subtitle">Hecho a mano, con mimo</p>
            <p className="card-description">
              Cada ramo se compone a mano, buscando equilibrio, armonía y emoción.
            </p>
          </div>

          <div className="about-card" data-aos="fade-left" data-aos-delay="200">
            <div className="card-icon">🗓️</div>
            <h3 className="card-title">Temporada</h3>
            <p className="card-subtitle">Frescura y calidad</p>
            <p className="card-description">
              Priorizamos flor de temporada para conseguir ramos más bonitos y duraderos.
            </p>
          </div>

          <div className="about-card" data-aos="fade-left" data-aos-delay="400">
            <div className="card-icon">🚚</div>
            <h3 className="card-title">Entrega</h3>
            <p className="card-subtitle">A domicilio o recogida</p>
            <p className="card-description">
              Encargos con entrega (cuando toque) o recogida. Te lo ponemos fácil.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="about-values-section" data-aos="fade-up">
        <h2 className="about-values-title">Nuestros valores</h2>
        <div className="about-values-grid">
          <div className="value-card" data-aos="fade-up" data-aos-delay="100">
            <span className="value-icon">✨</span>
            <p className="value-text">Detalle</p>
          </div>
          <div className="value-card" data-aos="fade-up" data-aos-delay="250">
            <span className="value-icon">🤍</span>
            <p className="value-text">Cuidado</p>
          </div>
          <div className="value-card" data-aos="fade-up" data-aos-delay="400">
            <span className="value-icon">🌿</span>
            <p className="value-text">Naturalidad</p>
          </div>
          <div className="value-card" data-aos="fade-up" data-aos-delay="550">
            <span className="value-icon">🎀</span>
            <p className="value-text">Estilo</p>
          </div>
          <div className="value-card" data-aos="fade-up" data-aos-delay="700">
            <span className="value-icon">😊</span>
            <p className="value-text">Cercanía</p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <div className="about-block centered" data-aos="zoom-in">
        <p className="about-end">
          Un ramo puede decirlo todo sin palabras. Si tienes una idea en mente,
          <br />
          <strong>¡nos encantará ayudarte!</strong>
        </p>

        <div className="about-buttons">
          <Link to="/contacto" className="btn btn-about">
            Encargar un ramo
          </Link>

          <Link to="/ramos" className="btn btn-about secondary">
            Ver catálogo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;