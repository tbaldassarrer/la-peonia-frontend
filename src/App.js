/* ============ */
/*   APP.JS     */
/* ============ */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

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

import "./components/Navbar.css";
import "./components/WelcomeSection.css";
import "./components/Footer.css";
import "./App.css";
import AboutSection from "./components/AboutSection";

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
    { title: "Inicio", description: "Página principal", link: "/" },
    { title: "Ramos", description: "Catálogo de ramos y colecciones", link: "/ramos" },
    { title: "Eventos", description: "Bodas, eventos y decoración floral", link: "/eventos" },
    { title: "Sobre La Peonía", description: "Conoce nuestra historia y estilo", link: "/sobre" },
    { title: "Contacto", description: "Encargos y consultas", link: "/contacto" },

    { title: "Política de Privacidad", description: "Consulta nuestra política", link: "/politica-privacidad" },
    { title: "Uso de Cookies", description: "Información sobre cookies", link: "/uso-cookies" },
    { title: "Condiciones de Uso", description: "Términos y condiciones", link: "/condiciones-de-uso" },
    { title: "Avisos Legales", description: "Información legal", link: "/avisos-legales" },
    { title: "Mapa del Sitio", description: "Explora todas las páginas", link: "/mapa-sitio" },

    { title: "Instagram", description: "Síguenos en Instagram", link: "https://www.instagram.com/" },
    { title: "WhatsApp", description: "Escríbenos por WhatsApp", link: "https://wa.me/" },
  ];

  return (
    <div style={{ paddingTop: isLegalPage ? "80px" : "0px" }}>
      <Navbar searchableData={searchableData} />

      <Routes>
        {/* Home */}
        <Route path="/" element={<WelcomeSection />} />

        {/* La Peonía */}
        <Route path="/ramos" element={<Ramos />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/sobre" element={<AboutSection/>} />
        <Route path="/contacto" element={<ContactView />} />

        {/* Legales */}
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/uso-cookies" element={<UsoCookies />} />
        <Route path="/condiciones-de-uso" element={<CondicionesUso />} />
        <Route path="/avisos-legales" element={<AvisosLegales />} />
        <Route path="/mapa-sitio" element={<MapaSitio />} />

        {/* 404 simple: redirige a inicio */}
        <Route path="*" element={<WelcomeSection />} />
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackToTopButton />
      <AppContent />
    </Router>
  );
}

export default App;