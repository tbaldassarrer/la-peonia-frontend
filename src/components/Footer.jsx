import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer" role="contentinfo">
        <div className="footer-container">
          {/* Izquierda: marca + redes */}
          <div className="footer-left">
            <h2 className="footer-brand">La Peonía</h2>

            <Link to="/" className="footer-logo" aria-label="Ir a inicio">
              <img src="/img/logo_peonia2.png" alt="Logo La Peonía" />
            </Link>

            <p className="footer-tagline">
              Floristería boutique · Ramos artesanales · Eventos
            </p>

            <div className="social-icons" aria-label="Redes sociales">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram (demo)"
                title="Instagram (demo)"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/34000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="WhatsApp (demo)"
                title="WhatsApp (demo)"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Centro: tarjetas */}
          <div className="footer-center">
            <div className="footer-card">
              <h3>Encargos</h3>
              <p>Cuéntanos la ocasión, colores y presupuesto.</p>
              <Link to="/contacto" className="footer-cta">
                Encargar ahora
              </Link>
            </div>

            <div className="footer-card">
              <h3>Horario</h3>
              <p>L–V: 10:00–19:00 · S: 10:00–14:00</p>
              <p className="footer-muted">Entrega a domicilio disponible</p>
            </div>
          </div>

          {/* Derecha: contacto + legales */}
          <div className="footer-right">
            <div className="footer-contact" aria-label="Contacto">
              <div className="contact-item">
                <FaPhone className="contact-icon" aria-hidden="true" />
                <a href="tel:+34000000000" aria-label="Llamar (demo)">
                  +34 000 000 000
                </a>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" aria-hidden="true" />
                <a href="mailto:hola@lapeonia.com" aria-label="Enviar email (demo)">
                  hola@lapeonia.com
                </a>
              </div>
            </div>

            <ul className="footer-links" aria-label="Enlaces legales">
              <li><Link to="/politica-privacidad">Política de privacidad</Link></li>
              <li><Link to="/uso-cookies">Política de cookies</Link></li>
              <li><Link to="/condiciones-de-uso">Condiciones de uso</Link></li>
              <li><Link to="/avisos-legales">Aviso legal</Link></li>
              <li><Link to="/mapa-sitio">Mapa del sitio</Link></li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-line">
        <p>© 2026 La Peonía. Todos los derechos reservados. España</p>
      </div>
    </>
  );
};

export default Footer;