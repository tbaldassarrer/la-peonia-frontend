import React from "react";
import { Link } from "react-router-dom";
import "./PeoniaPages.css";

export default function Sobre() {
  return (
    <div className="peonia-page">
      <div className="peonia-container">
        <header className="peonia-header">
          <div className="peonia-eyebrow">La marca</div>
          <h1 className="peonia-title">Sobre La Peonía</h1>
          <p className="peonia-subtitle">
            Somos una floristería boutique enfocada en composiciones artesanales,
            flores de temporada y detalles cuidados. Creamos ramos que transmiten.
          </p>
        </header>

        <section className="peonia-grid">
          <article className="peonia-card">
            <div className="peonia-card-body">
              <div className="peonia-card-title">Nuestro estilo</div>
              <div className="peonia-card-text">
                Romántico, natural y elegante. Trabajamos con paletas suaves y
                texturas orgánicas.
              </div>
              <div className="peonia-pill-row">
                <span className="peonia-pill">Artesanal</span>
                <span className="peonia-pill">Temporada</span>
                <span className="peonia-pill">Detalle</span>
              </div>
            </div>
          </article>

          <article className="peonia-card">
            <div className="peonia-card-body">
              <div className="peonia-card-title">Flores de temporada</div>
              <div className="peonia-card-text">
                Elegimos flor fresca según disponibilidad, para asegurar calidad y
                duración.
              </div>
              <div className="peonia-pill-row">
                <span className="peonia-pill">Frescura</span>
                <span className="peonia-pill">Sostenible</span>
              </div>
            </div>
          </article>

          <article className="peonia-card">
            <div className="peonia-card-body">
              <div className="peonia-card-title">Entrega y encargos</div>
              <div className="peonia-card-text">
                Entregas a domicilio y encargos personalizados. Te ayudamos a
                elegir el ramo ideal.
              </div>
              <div className="peonia-pill-row">
                <span className="peonia-pill">Delivery</span>
                <span className="peonia-pill">A medida</span>
              </div>
            </div>
          </article>
        </section>

        <div className="peonia-cta">
          <div>
            <strong>¿Te ayudamos a elegir?</strong>
            <p>Cuéntanos para quién es, el estilo y el presupuesto.</p>
          </div>
          <Link to="/contacto" className="btn btn-primary">
            Hablar con La Peonía
          </Link>
        </div>
      </div>
    </div>
  );
}