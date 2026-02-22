import React, { useState, useEffect } from 'react';
import './Blog.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams, useNavigate } from 'react-router-dom';

const BlogForm = () => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagenFile, setImagenFile] = useState(null);
  const [postPreview, setPostPreview] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [modoEdicion, setModoEdicion] = useState(false);

  const { id } = useParams();              // Detectar si hay id para editar
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });

    if (id) {
      setModoEdicion(true);
      const fetchPost = async () => {
        try {
          const res = await fetch(`/api/posts/${id}`);
          const data = await res.json();
          setTitulo(data.titulo);
          setContenido(data.contenido);
          setPostPreview(data);
        } catch (err) {
          console.error('❌ Error al cargar entrada para edición:', err);
        }
      };
      fetchPost();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imagenUrl = postPreview?.imagenUrl || '';

    if (imagenFile) {
      const formData = new FormData();
      formData.append('file', imagenFile);

      try {
        const uploadRes = await fetch('/api/images/upload', {
          method: 'POST',
          body: formData,
        });

        if (uploadRes.ok) {
          const relativeUrl = await uploadRes.text();
          imagenUrl = relativeUrl.startsWith('http')
  ? relativeUrl
  : `/api${relativeUrl}`;

        } else {
          console.error("❌ Fallo al subir la imagen.");
          setMensaje("⚠️ Imagen no subida.");
        }
      } catch (error) {
        console.error("❌ Error de conexión al subir la imagen:", error);
        setMensaje("⚠️ Imagen no subida.");
      }
    }

    const nuevoPost = {
      titulo,
      contenido,
      imagenUrl,
    };

    try {
const url = id
  ? `/api/posts/admin/${id}`
  : "/api/posts";


      
        const method = id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoPost),
      });

      if (response.ok) {
        const savedPost = await response.json();
        setMensaje(id ? "✅ Entrada actualizada correctamente." : "✅ Entrada publicada correctamente.");
        setPostPreview(savedPost);
        setTitulo('');
        setContenido('');
        setImagenFile(null);
        document.querySelector('input[type="file"]').value = '';
        navigate("/ourspark");
      } else {
        setMensaje("⚠️ Error al guardar la entrada.");
      }
    } catch (error) {
      console.error("❌ Error al guardar post:", error);
      setMensaje("❌ No se pudo conectar con el servidor.");
    }
  };

  return (
    <div className="blog-container">
      <h2 className="blog-title" data-aos="fade-down">
        {modoEdicion ? "Editar entrada" : "Crear nueva entrada"}
      </h2>

      <form className="blog-form" onSubmit={handleSubmit} data-aos="fade-up">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <textarea
          placeholder="Escribe aquí el contenido de la entrada..."
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImagenFile(e.target.files[0])}
        />

        <div className="blog-buttons">
          <button type="submit">
            {modoEdicion ? "Actualizar entrada" : "Publicar entrada"}
          </button>
          <button
            type="button"
            className="logout-button"
            onClick={() => {
              localStorage.removeItem("auth");
              window.location.href = "/ourspark";
            }}
          >
            Cerrar sesión
          </button>
        </div>
      </form>

      {mensaje && (
        <p
          className={`blog-message ${mensaje.includes("❌") || mensaje.includes("⚠️") ? "error" : ""}`}
        >
          {mensaje}
        </p>
      )}

      {postPreview && (
        <div className="blog-card" data-aos="fade-up" style={{ marginTop: '40px' }}>
          {postPreview.imagenUrl && (
            <img src={postPreview.imagenUrl} alt={postPreview.titulo} className="blog-image" />
          )}
          <div className="blog-content">
            <h3 className="blog-post-title">{postPreview.titulo}</h3>
            <p className="blog-post-date">{postPreview.fecha}</p>
            <p className="blog-post-text">{postPreview.contenido}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogForm;
