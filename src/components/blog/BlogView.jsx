import React, { useEffect, useState } from "react";
import "./Blog.css";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogCard from "./BlogCard";
import ConfirmModal from "./ConfirmModal";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";

const BlogView = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false); // delete banner modal
  const [showLoginModal, setShowLoginModal] = useState(false); // ✅ nuevo modal login

  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useAuth();

  // ✅ Estado login modal
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  // ✅ Fecha + hora elegante
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

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        const sortedPosts = data.sort(
          (a, b) => new Date(b.fecha) - new Date(a.fecha)
        );
        setPosts(sortedPosts);
      } catch (error) {
        console.error("❌ Error al cargar los posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // ✅ Cerrar modal con ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowLoginModal(false);
    };
    if (showLoginModal) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showLoginModal]);

  const deleteBannerPost = async () => {
    try {
      const res = await fetch(`/api/posts/admin/${posts[0].id}`, {
        method: "DELETE",
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

  // ✅ login desde modal
  const handleModalLogin = (e) => {
    e.preventDefault();
    setLoginError("");

    const ok = login(username, password);
    if (ok) {
      setShowLoginModal(false);
      setUsername("");
      setPassword("");
      setMostrarPassword(false);
      setLoginError("");
      // Nos quedamos en /blog (no navegamos)
    } else {
      setLoginError("⚠️ Usuario o contraseña incorrectos");
    }
  };

  // ✅ Header botón (login o publicar + logout)
  const ActionButton = ({ align = "flex-end" }) => (
    <div
      style={{
        display: "flex",
        justifyContent: align,
        gap: "12px",
        marginBottom: "20px",
        flexWrap: "wrap",
      }}
    >
      {!isAuthenticated ? (
       <button
  className="login-link-button"
  onClick={() => {
    setLoginError("");
    setShowLoginModal(true);
  }}
>
Acceso</button>
      ) : (
        <>
          <button
  className="blog-action-link"
  onClick={() => navigate("/admin")}
>
  Publicar entrada
</button>

<button
  className="blog-action-link subtle"
  onClick={() => {
    logout();
    navigate("/blog");
  }}
>
  Cerrar sesión
</button>
        </>
      )}
    </div>
  );

  if (posts.length === 0) {
    return (
      <div className="blog-container">
        <h2 className="blog-title" data-aos="fade-down">
          Blog: La Peonía
        </h2>
        <p className="blog-subtitle" data-aos="fade-down" data-aos-delay="100">
          Un espacio para compartir lo que nos inspira, impulsa y transforma
        </p>

        <ActionButton align="flex-end" />

        <p style={{ marginTop: 40, color: "#888" }}>No hay entradas por ahora.</p>

        {/* ✅ Modal login */}
        {showLoginModal && (
          <div
            className="login-modal-overlay"
            onMouseDown={(e) => {
              if (e.target.classList.contains("login-modal-overlay")) {
                setShowLoginModal(false);
              }
            }}
          >
            <div className="login-modal">
              <button
                className="login-modal-close"
                onClick={() => setShowLoginModal(false)}
                aria-label="Cerrar"
                type="button"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>

              <h2 className="login-modal-title">Iniciar sesión</h2>

              <form className="login-modal-form" onSubmit={handleModalLogin}>
                <input
                  type="text"
                  placeholder="Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />

                <div className="login-modal-password">
                  <input
                    type={mostrarPassword ? "text" : "password"}
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="login-modal-toggle"
                    onClick={() => setMostrarPassword(!mostrarPassword)}
                    aria-label="Mostrar/ocultar contraseña"
                  >
                    <FontAwesomeIcon icon={mostrarPassword ? faEyeSlash : faEye} />
                  </button>
                </div>

                <button type="submit" className="login-modal-submit">
                  Entrar
                </button>

                {loginError && <p className="login-modal-error">{loginError}</p>}
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  const bannerPost = posts[0];
  const restPosts = posts.slice(1);

  return (
    <div className="blog-container">
      <h2 className="blog-title" data-aos="fade-down">
        Blog: La Peonía
      </h2>
      <p className="blog-subtitle" data-aos="fade-down" data-aos-delay="100">
        Un espacio para compartir lo que nos inspira, impulsa y transforma
      </p>

      <ActionButton align="flex-end" />

      {/* Banner principal */}
      <div className="blog-banner hide-on-mobile" data-aos="fade-up">
        {bannerPost.imagenUrl && (
          <img
            src={bannerPost.imagenUrl}
            alt={bannerPost.titulo}
            className="banner-image"
            onClick={() => navigate(`/blog/${bannerPost.id}`)}
            style={{ cursor: "pointer" }}
          />
        )}

        <div className="banner-content">
          <h3 className="banner-title">{bannerPost.titulo}</h3>
          <p className="banner-text">{bannerPost.contenido}</p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <span
              className="read-more-link"
              onClick={() => navigate(`/blog/${bannerPost.id}`)}
              style={{ cursor: "pointer" }}
            >
              Leer artículo &nbsp;›
            </span>
            <span className="banner-date">{formatFecha(bannerPost.fecha)}</span>
          </div>

          {isAuthenticated && (
            <div className="banner-admin-buttons" style={{ marginTop: "10px" }}>
              <button
                className="edit-button"
                onClick={() => navigate(`/admin/${bannerPost.id}`)}
              >
                <FontAwesomeIcon icon={faPen} style={{ marginRight: "6px" }} />
                Editar
              </button>
              <button className="delete-button" onClick={() => setShowModal(true)}>
                <FontAwesomeIcon icon={faTrash} style={{ marginRight: "6px" }} />
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

      {/* ✅ Modal login también cuando hay posts */}
      {showLoginModal && (
        <div
          className="login-modal-overlay"
          onMouseDown={(e) => {
            if (e.target.classList.contains("login-modal-overlay")) {
              setShowLoginModal(false);
            }
          }}
        >
          <div className="login-modal">
            <button
              className="login-modal-close"
              onClick={() => setShowLoginModal(false)}
              aria-label="Cerrar"
              type="button"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <h2 className="login-modal-title">Iniciar sesión</h2>

            <form className="login-modal-form" onSubmit={handleModalLogin}>
              <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <div className="login-modal-password">
                <input
                  type={mostrarPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="login-modal-toggle"
                  onClick={() => setMostrarPassword(!mostrarPassword)}
                  aria-label="Mostrar/ocultar contraseña"
                >
                  <FontAwesomeIcon icon={mostrarPassword ? faEyeSlash : faEye} />
                </button>
              </div>

              <button type="submit" className="login-modal-submit">
                Entrar
              </button>

              {loginError && <p className="login-modal-error">{loginError}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogView;