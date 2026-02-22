import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${id}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error('❌ Error al obtener la entrada:', err);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <div className="detail-container"><p>Cargando entrada…</p></div>;
  }

  return (
    <div className="detail-container">
      <Link to="/ourspark" className="back-button">
        <span className="arrow">←</span>
        Volver
      </Link>

      {/* Título justo encima de la imagen */}
      <h1 className="detail-title">{post.titulo}</h1>

      {/* Imagen más pequeña, encajada sin deformarse */}
      <img
        src={post.imagenUrl}
        alt={post.titulo}
        className="detail-image"
      />
<hr className="divider" />  {/* 👈 Divider */}

      {/* Contenido con saltos de línea respetados */}
      <div className="detail-text">
  <pre>{post.contenido}</pre>
</div>

    </div>
  );
};

export default BlogDetail;
