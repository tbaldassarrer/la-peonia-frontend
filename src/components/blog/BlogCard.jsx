import React, { useState } from "react";
import "./Blog.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "./ConfirmModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const BlogCard = ({ post, onDelete }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  // ✅ NUEVO: fecha + hora elegante
  const formatFecha = (fecha) => {
    if (!fecha) return "";
    const d = new Date(fecha);
    if (isNaN(d.getTime())) return fecha;

    const fechaTxt = d.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const horaTxt = d.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return `${fechaTxt} · ${horaTxt} h`;
  };

  const handleDeleteConfirmed = async () => {
    try {
      const res = await fetch(`/api/posts/admin/${post.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        onDelete(post.id);
        setShowModal(false);
      } else {
        alert("❌ No se pudo eliminar la entrada.");
      }
    } catch (err) {
      console.error("❌ Error al eliminar entrada:", err);
    }
  };

  return (
    <div className="blog-card" data-aos="fade-up">
      {post.imagenUrl && (
  <img
    src={post.imagenUrl}
    alt={post.titulo}
    className="blog-image"
    onClick={() => navigate(`/blog/${post.id}`)}
    style={{ cursor: "pointer" }}
  />
)}

      <div className="blog-content">
<h3
  className="blog-post-title"
  onClick={() => navigate(`/blog/${post.id}`)}
  style={{ cursor: "pointer" }}
>
  {post.titulo}
</h3>        <p className="blog-post-text">{post.contenido}</p>

        {/* ✅ CAMBIO: fecha formateada */}
        <p className="blog-post-date">{formatFecha(post.fecha)}</p>

        {/* Botón Leer artículo */}
        <span
          className="read-more-link"
          onClick={() => navigate(`/blog/${post.id}`)}
          style={{ cursor: "pointer" }}
        >
          Leer artículo &nbsp;›
        </span>

        {/* Botones solo si está autenticada */}
        {isAuthenticated && (
          <>
            <button
              className="edit-button"
              onClick={() => navigate(`/admin/${post.id}`)}
            >
              <FontAwesomeIcon icon={faPen} style={{ marginRight: "6px" }} />
              Editar
            </button>

            <button className="delete-button" onClick={() => setShowModal(true)}>
              <FontAwesomeIcon icon={faTrash} style={{ marginRight: "6px" }} />
              Eliminar
            </button>
          </>
        )}
      </div>

      {/* Modal de confirmación */}
      <ConfirmModal
        visible={showModal}
        onConfirm={handleDeleteConfirmed}
        onCancel={() => setShowModal(false)}
      />
    </div>
  );
};

export default BlogCard;