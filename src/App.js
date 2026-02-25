import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import WelcomeSection from "./components/WelcomeSection";
import Footer from "./components/Footer";

import PoliticaPrivacidad from "./components/footer-pages/PoliticaPrivacidad";
import UsoCookies from "./components/footer-pages/UsoCookies";
import CondicionesUso from "./components/footer-pages/CondicionesUso";
import AvisosLegales from "./components/footer-pages/AvisosLegales";
import MapaSitio from "./components/footer-pages/MapaSitio";

import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";

import ContactView from "./contact/ContactView";
import Ramos from "./components/peonia/Ramos";
import Eventos from "./components/peonia/Eventos";
import AboutSection from "./components/AboutSection";

import BlogView from "./components/blog/BlogView";
import BlogForm from "./components/blog/BlogForm";

// ✅ AÑADIDO: detalle del post
import BlogDetail from "./components/blog/BlogDetail";

import { useAuth } from "./context/AuthContext";

import "./components/Navbar.css";
import "./components/WelcomeSection.css";
import "./components/Footer.css";
import "./App.css";

/* ✅ Ruta protegida */
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}

/* ✅ Login real (simple y funcional) */
function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const ok = login(username, password);
    if (ok) {
  navigate("/blog", { replace: true });
} else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div
      style={{
        paddingTop: "90px",
        maxWidth: 420,
        margin: "0 auto",
        paddingInline: 16,
      }}
    >
      <h2 style={{ marginBottom: 16, color: "#542f52" }}>
        Acceso administrador
      </h2>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            padding: 12,
            borderRadius: 12,
            border: "1px solid rgba(156,39,176,0.25)",
          }}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: 12,
            borderRadius: 12,
            border: "1px solid rgba(156,39,176,0.25)",
          }}
        />

        <button
          type="submit"
          style={{
            padding: 12,
            borderRadius: 12,
            border: "none",
            background: "#9C27B0",
            color: "white",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Entrar
        </button>

        {error && <p style={{ color: "#b00020", marginTop: 4 }}>{error}</p>}

        
      </form>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  const isLegalPage = [
    "/politica-privacidad",
    "/uso-cookies",
    "/condiciones-de-uso",
    "/avisos-legales",
    "/mapa-sitio",
  ].includes(location.pathname);

  const searchableData = [
    { title: "Inicio", link: "/" },
    { title: "Ramos", link: "/ramos" },
    { title: "Eventos", link: "/eventos" },
    { title: "Sobre La Peonía", link: "/sobre" },
    { title: "Contacto", link: "/contacto" },

    // ✅ BLOG
    { title: "Blog", link: "/blog" },
    { title: "Admin blog", link: "/admin" },

    // ✅ legales
    { title: "Política de Privacidad", link: "/politica-privacidad" },
    { title: "Uso de Cookies", link: "/uso-cookies" },
    { title: "Condiciones de Uso", link: "/condiciones-de-uso" },
    { title: "Avisos Legales", link: "/avisos-legales" },
    { title: "Mapa del Sitio", link: "/mapa-sitio" },

    // ✅ externos
    { title: "Instagram", link: "https://www.instagram.com/" },
    { title: "WhatsApp", link: "https://wa.me/" },
  ];

  return (
    <div style={{ paddingTop: isLegalPage ? "80px" : "0px" }}>
      <Navbar searchableData={searchableData} />

      <Routes>
        <Route path="/" element={<WelcomeSection />} />
        <Route path="/ramos" element={<Ramos />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/sobre" element={<AboutSection />} />
        <Route path="/contacto" element={<ContactView />} />

        {/* ✅ BLOG */}
        <Route path="/blog" element={<BlogView />} />

        {/* ✅ AÑADIDO: detalle */}
        <Route path="/blog/:id" element={<BlogDetail />} />

        {/* ✅ LOGIN */}
        <Route path="/login" element={<LoginPage />} />

        {/* ✅ ADMIN PROTEGIDO */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <BlogForm />
            </ProtectedRoute>
          }
        />

        {/* ✅ Edición por id */}
        <Route
          path="/admin/:id"
          element={
            <ProtectedRoute>
              <BlogForm />
            </ProtectedRoute>
          }
        />

        {/* ✅ legales */}
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/uso-cookies" element={<UsoCookies />} />
        <Route path="/condiciones-de-uso" element={<CondicionesUso />} />
        <Route path="/avisos-legales" element={<AvisosLegales />} />
        <Route path="/mapa-sitio" element={<MapaSitio />} />

        <Route path="*" element={<WelcomeSection />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackToTopButton />
      <AppContent />
    </Router>
  );
}