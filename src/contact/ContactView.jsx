import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 900 });
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación frontend con mensajes
    const newErrors = {
      name: formData.name.trim() === "" ? "El nombre es obligatorio" : "",
      email: formData.email.trim() === "" ? "El email es obligatorio" : "",
      message: formData.message.trim() === "" ? "El mensaje es obligatorio" : "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg);
    if (hasErrors) {
      const firstErrorField = Object.keys(newErrors).find(
        (key) => newErrors[key]
      );
      const el = document.getElementById(firstErrorField);
      if (el) el.focus();
      return;
    }

    setToastMessage("💌 Enviando tu mensaje...");
    setShowToast(true);
    setIsSending(true);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setToastMessage("🌸 ¡Mensaje enviado! Redirigiendo...");
        setFormData({ name: "", email: "", message: "" });

        // Espera 1.5 segundos y redirige al inicio
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else if (response.status === 400 && data?.errors) {
        setErrors({
          name: data.errors.name || "",
          email: data.errors.email || "",
          message: data.errors.message || "",
        });

        setToastMessage("❌ Revisa los campos marcados.");
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
        <div className="contact-header" data-aos="fade-up">
          <div className="contact-eyebrow">Contacto</div>
          <h2>Hablemos y creamos algo bonito 🌷</h2>
          <p>
            ¿Quieres un ramo a medida, un detalle para alguien especial o decorar un evento?
            Escríbenos y cuéntanos la idea.
          </p>
        </div>

        <div className="contact-card" data-aos="fade-up">
          <form onSubmit={handleSubmit} className="contact-form">

            {/* Nombre */}
            <div className="input-group">
              <label htmlFor="name" className="input-icon clickable-icon">
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
            {errors.name && <p className="field-error">{errors.name}</p>}

            {/* Email */}
            <div className="input-group">
              <label htmlFor="email" className="input-icon clickable-icon">
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
            {errors.email && <p className="field-error">{errors.email}</p>}

            {/* Mensaje */}
            <div className="input-group">
              <label htmlFor="message" className="input-icon clickable-icon">
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
            {errors.message && <p className="field-error">{errors.message}</p>}

            <button type="submit" className="btn-contact" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar mensaje"}
            </button>

            <p className="contact-note">
              Respuesta habitual en 24–48h (este proyecto es demo/portfolio).
            </p>
          </form>
        </div>

        <div className="contact-footer" data-aos="fade-up">
          <p>
            Toda gran historia empieza con un detalle. Si tienes una idea, aquí estamos.
          </p>
        </div>

        <div className="contact-icons" data-aos="fade-up">
          <a href="mailto:hola@lapeonia.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="tel:+34000000000">
            <FaPhone />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactView;