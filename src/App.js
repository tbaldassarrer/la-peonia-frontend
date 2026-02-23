import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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

import "./components/Navbar.css";
import "./components/WelcomeSection.css";
import "./components/Footer.css";
import "./App.css";

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
    { title: "Política de Privacidad", link: "/politica-privacidad" },
    { title: "Uso de Cookies", link: "/uso-cookies" },
    { title: "Condiciones de Uso", link: "/condiciones-de-uso" },
    { title: "Avisos Legales", link: "/avisos-legales" },
    { title: "Mapa del Sitio", link: "/mapa-sitio" },
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