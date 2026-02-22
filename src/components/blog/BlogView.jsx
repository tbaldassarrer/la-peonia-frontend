import React, { useEffect, useState } from 'react';
import './Blog.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlogCard from './BlogCard';
import ConfirmModal from './ConfirmModal';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const BlogView = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal para el banner
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchPosts = async () => {
      try {
const res = await fetch("/api/posts");

        const data = await res.json();
        const sortedPosts = data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
        setPosts(sortedPosts);
      } catch (error) {
        console.error("❌ Error al cargar los posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const deleteBannerPost = async () => {
    try {
      const res = await fetch(`/api/posts/admin/${posts[0].id}`, {
  method: 'DELETE',
});


      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== posts[0].id));
        setShowModal(false);
      } else {
        alert("❌ No se pudo eliminar la entrada.");
      }
    } catch (err) {
      console.error("❌ Error al eliminar entrada:", err);
    }
  };

  if (posts.length === 0) {
    return (
      <div className="blog-container">
        <h2 className="blog-title" data-aos="fade-down">Our Spark</h2>
        <p className="blog-subtitle" data-aos="fade-down" data-aos-delay="100">
          Un espacio para compartir lo que nos inspira, impulsa y transforma
        </p>
       {isAuthenticated && (
  <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
    <button
      className="publish-button"
      onClick={() => navigate('/admin')}
    >
      📝 Publicar entrada
    </button>
  </div>
)}


        <p style={{ marginTop: 40, color: "#888" }}>No hay entradas por ahora.</p>
      </div>
    );
  }

  const bannerPost = posts[0];
  const restPosts = posts.slice(1);

  return (
    <div className="blog-container">
      <h2 className="blog-title" data-aos="fade-down">Our Spark</h2>
      <p className="blog-subtitle" data-aos="fade-down" data-aos-delay="100">
        Un espacio para compartir lo que nos inspira, impulsa y transforma
      </p>

      {isAuthenticated && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <button
            className="publish-button"
            onClick={() => navigate('/admin')}
          >
            📝 Publicar entrada
          </button>
        </div>
      )}

      {/* Banner principal */}
<div className="blog-banner hide-on-mobile" data-aos="fade-up">
        <img
          src={bannerPost.imagenUrl}
          alt={bannerPost.titulo}
          className="banner-image"
          onClick={() => navigate(`/ourspark/${bannerPost.id}`)}
        />
        <div className="banner-content">
          <h3 className="banner-title">{bannerPost.titulo}</h3>
          <p className="banner-text">{bannerPost.contenido}</p>
          <div
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: '10px'
  }}
>
  <span
    className="read-more-link"
    onClick={() => navigate(`/ourspark/${bannerPost.id}`)}
    style={{ cursor: 'pointer' }}
  >
    Leer artículo &nbsp;›
  </span>
  <span className="banner-date">{bannerPost.fecha}</span>
</div>


          {isAuthenticated && (
            <div className="banner-admin-buttons" style={{ marginTop: '10px' }}>
              <button
                className="edit-button"
                onClick={() => navigate(`/admin/${bannerPost.id}`)}
              >
                <FontAwesomeIcon icon={faPen} style={{ marginRight: '6px' }} />
                Editar
              </button>
              <button
                className="delete-button"
                onClick={() => setShowModal(true)}
              >
                <FontAwesomeIcon icon={faTrash} style={{ marginRight: '6px' }} />
                Eliminar
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal de confirmación para el banner */}
      <ConfirmModal
        visible={showModal}
        onConfirm={deleteBannerPost}
        onCancel={() => setShowModal(false)}
      />

      <hr className="blog-divider" />

      {/* Tarjetas del resto de entradas */}
      <div className="blog-cards">
        {restPosts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            onDelete={(id) => {
              setPosts((prev) => prev.filter((p) => p.id !== id));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogView;
