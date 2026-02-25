import React from "react";
import { Link } from "react-router-dom";
import "./PeoniaPages.css";

const RAMOS = [
  {
    title: "Ramo Clásico",
    text: "Elegancia atemporal. Perfecto para regalar con acierto.",
    tags: ["Rosas", "Eucalipto", "Tarjeta"],
    img: `${process.env.PUBLIC_URL}/img/peonia_ramo1.jpg`,
  },
  {
    title: "Ramo Silvestre",
    text: "Flores de temporada con un aire natural y fresco.",
    tags: ["Temporada", "Texturas", "Ligero"],
    img: `${process.env.PUBLIC_URL}/img/peonia_ramo2.jpg`,
  },
  {
    title: "Ramo Premium",
    text: "Una composición protagonista, ideal para ocasiones especiales.",
    tags: ["Premium", "Volumen", "Top"],
    img: `${process.env.PUBLIC_URL}/img/peonia_ramo3.jpg`,
  },
];

export default function Ramos() {
  return (
    <div className="peonia-page">
      <div className="peonia-container">
        <header className="peonia-header">
          <div className="peonia-eyebrow">Catálogo</div>
          <h1 className="peonia-title">Ramos y colecciones</h1>
          <p className="peonia-subtitle">
            Diseñamos ramos artesanales con flores de temporada y combinaciones
            únicas. Aquí verás nuestras líneas principales (luego los haremos dinámicos con backend).
          </p>
        </header>

        <section className="peonia-grid">
          {RAMOS.map((item, idx) => (
            <article className="peonia-card" key={idx}>
              <img className="peonia-card-img" src={item.img} alt={item.title} />
              <div className="peonia-card-body">
                <div className="peonia-card-title">{item.title}</div>
                <div className="peonia-card-text">{item.text}</div>
                <div className="peonia-pill-row">
                  {item.tags.map((t) => (
                    <span className="peonia-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="peonia-cta">
          <div>
            <strong>¿Quieres un ramo a medida?</strong>
            <p>Cuéntanos la ocasión, colores y presupuesto. Te proponemos 2-3 opciones.</p>
          </div>
          <Link to="/contacto" className="btn btn-primary">
            Encargar ahora
          </Link>
        </div>
      </div>
    </div>
  );
}