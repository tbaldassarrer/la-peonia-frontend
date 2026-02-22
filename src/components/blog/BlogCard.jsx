import React, { useState } from 'react';
import './Blog.css';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from './ConfirmModal'; // ajusta la ruta si está en otra carpeta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const BlogCard = ({ post, onDelete }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleDeleteConfirmed = async () => {
    try {
      const res = await fetch(`/api/posts/admin/${post.id}`, {
        method: 'DELETE',
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
      <img src={post.imagenUrl} alt={post.titulo} className="blog-image" />
      <div className="blog-content">
        <h3 className="blog-post-title">{post.titulo}</h3>
        <p className="blog-post-text">{post.contenido}</p>
        <p className="blog-post-date">{post.fecha}</p>

        {/* Botón Leer artículo */}
        <span
          className="read-more-link"
          onClick={() => navigate(`/ourspark/${post.id}`)}
          style={{ cursor: 'pointer' }}
        >
          Leer artículo &nbsp;›
        </span>

        {/* Botones solo si está autenticada */}
        {isAuthenticated && (
          <>
           <button className="edit-button" onClick={() => navigate(`/admin/${post.id}`)}>
  <FontAwesomeIcon icon={faPen} style={{ marginRight: '6px' }} />
  Editar
</button>

<button className="delete-button" onClick={() => setShowModal(true)}>
  <FontAwesomeIcon icon={faTrash} style={{ marginRight: '6px' }} />
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
