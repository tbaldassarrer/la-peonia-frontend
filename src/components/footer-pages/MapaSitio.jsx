import React from "react";
import "./LegalPages.css";

const MapaSitio = () => (
  <div className="legal-page">
    <h1>Mapa del Sitio</h1>

    <section>
      <h2>Páginas principales</h2>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/ramos">Ramos</a></li>
        <li><a href="/eventos">Eventos</a></li>
        <li><a href="/sobre">Sobre La Peonía</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </section>

    <section>
      <h2>Información legal</h2>
      <ul>
        <li><a href="/avisos-legales">Aviso Legal</a></li>
        <li><a href="/politica-privacidad">Política de Privacidad</a></li>
        <li><a href="/uso-cookies">Uso de Cookies</a></li>
        <li><a href="/condiciones-de-uso">Condiciones de Uso</a></li>
      </ul>
    </section>

    <section>
      <h2>Contacto rápido</h2>
      <ul>
        <li>
          <a href="https://wa.me/34000000000" target="_blank" rel="noopener noreferrer">
            WhatsApp (demo)
          </a>
        </li>
        <li>
          <a href="mailto:hola@lapeonia.com">
            Email: hola@lapeonia.com
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            Instagram (demo)
          </a>
        </li>
      </ul>
    </section>
  </div>
);

export default MapaSitio;