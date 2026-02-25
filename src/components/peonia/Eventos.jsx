import React from "react";
import { Link } from "react-router-dom";
import "./PeoniaPages.css";

const EVENTOS = [
  {
    title: "Bodas",
    text: "Ramos de novia, prendidos, centros y decoración integral.",
    tags: ["Moodboard", "Prueba", "Montaje"],
    img: `${process.env.PUBLIC_URL}/img/peonia_evento1.jpg`,
  },
  {
    title: "Eventos de empresa",
    text: "Decoración floral para recepciones, cenas y presentaciones.",
    tags: ["Marca", "Estilo", "Montaje"],
    img: `${process.env.PUBLIC_URL}/img/peonia_evento2.jpg`,
  },
  {
    title: "Cumpleaños y celebraciones",
    text: "Centros y ramos con personalidad para cada momento.",
    tags: ["Personalizado", "Temporada", "Rápido"],
    img: `${process.env.PUBLIC_URL}/img/peonia_evento3.jpg`,
  },
];

export default function Eventos() {
  return (
    <div className="peonia-page">
      <div className="peonia-container">
        <header className="peonia-header">
          <div className="peonia-eyebrow">Servicios</div>
          <h1 className="peonia-title">Eventos y decoración floral</h1>
          <p className="peonia-subtitle">
            Diseñamos propuestas florales coherentes con tu estilo. Podemos trabajar
            desde una idea o crear un moodboard desde cero.
          </p>
        </header>

        <section className="peonia-grid">
          {EVENTOS.map((item, idx) => (
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
            <strong>¿Tienes fecha y lugar?</strong>
            <p>Escríbenos y te enviamos una propuesta inicial en 24–48h.</p>
          </div>
          <Link to="/contacto" className="btn btn-primary">
            Pedir propuesta
          </Link>
        </div>
      </div>
    </div>
  );
}