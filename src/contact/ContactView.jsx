import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContactView.css";

import {
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaUser,
  FaRegEnvelope,
  FaRegCommentDots,
} from "react-icons/fa";

const ContactView = () => {
  useEffect(() => {
    AOS.init({ duration: 900 });
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) {
      const firstErrorField = Object.keys(newErrors).find((key) => newErrors[key]);
      const el = document.getElementById(firstErrorField);
      if (el) el.focus();
      return;
    }

    setToastMessage("💌 Enviando tu mensaje...");
    setShowToast(true);
    setIsSending(true);

    try {
      // De momento dejamos este endpoint para cuando retomes backend.
      const response = await fetch("http://localhost:8080/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToastMessage("🌸 ¡Mensaje enviado! Te responderemos pronto.");
        setFormData({ name: "", email: "", message: "" });
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => setShowToast(false), 4000);
      } else {
        setToastMessage("❌ No se pudo enviar. Inténtalo en unos minutos.");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setToastMessage("❌ Error de red. Revisa tu conexión.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Toast */}
      {showToast && (
        <div className="custom-toast">
          <span>{toastMessage}</span>
          <button className="toast-close" onClick={() => setShowToast(false)}>
            ✖
          </button>
        </div>
      )}

      <div className="contact-shell">
        {/* Cabecera */}
        <div className="contact-header" data-aos="fade-up">
          <div className="contact-eyebrow">Contacto</div>
          <h2>Hablemos y creamos algo bonito 🌷</h2>
          <p>
            ¿Quieres un ramo a medida, un detalle para alguien especial o decorar un evento?
            Escríbenos y cuéntanos la idea.
          </p>
        </div>

        {/* Tarjeta: formulario */}
        <div className="contact-card" data-aos="fade-up">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <label htmlFor="name" className="input-icon clickable-icon" aria-label="Nombre">
                <FaUser />
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                className={errors.name ? "input-error" : ""}
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="email" className="input-icon clickable-icon" aria-label="Email">
                <FaRegEnvelope />
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tucorreo@ejemplo.com"
                className={errors.email ? "input-error" : ""}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="message" className="input-icon clickable-icon" aria-label="Mensaje">
                <FaRegCommentDots />
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Ej: Quiero un ramo en tonos rosa/lila para cumpleaños. Presupuesto aprox. 35€."
                className={errors.message ? "input-error textarea" : "textarea"}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-contact" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar mensaje"}
            </button>

            <p className="contact-note">
              Respuesta habitual en 24–48h (este proyecto es demo/portfolio).
            </p>
          </form>
        </div>

        {/* Bloque inferior */}
        <div className="contact-footer" data-aos="fade-up">
          <p>
            Toda gran historia empieza con un detalle. Si tienes una idea, aquí estamos.
          </p>
        </div>

        {/* Iconos (genéricos) */}
        <div className="contact-icons" data-aos="fade-up">
          <a href="mailto:hola@lapeonia.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="tel:+34000000000" aria-label="Teléfono">
            <FaPhone />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactView;