import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ searchableData = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [transparent, setTransparent] = useState(false);

  const searchRef = useRef(null);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const navigate = useNavigate();

  const closeAll = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  const handleHomeClick = () => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const handleScroll = () => setTransparent(window.scrollY > 50);

    if (isHome) window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredResults([]);
      return;
    }

    const results = (searchableData || [])
      .filter((item) =>
        item.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      )
      .sort((a, b) => a.title.localeCompare(b.title));

    setFilteredResults(results);
  }, [searchQuery, searchableData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navClass = isHome
    ? transparent
      ? "navbar navbar-transparent"
      : "navbar navbar-home"
    : "navbar navbar-black";

  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className={navClass}>
      <div className="container">
        {/* Logo */}
        <button
          onClick={handleHomeClick}
          className="logo"
          aria-label="Ir a inicio"
          type="button"
        >
<img src={`${process.env.PUBLIC_URL}/img/logo_peonia2.png`} alt="Logo La Peonía" />        </button>

        {/* Menú móvil */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              end
            >
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/ramos"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Ramos
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/eventos"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Eventos
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/sobre"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Sobre La Peonía
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contacto"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </NavLink>
          </li>
        </ul>

        {/* Buscador */}
        <div
          className={`search-container ${searchOpen ? "active" : ""}`}
          ref={searchRef}
        >
          <button
            className="search-icon"
            type="button"
            onClick={() => {
              setSearchQuery("");
              setFilteredResults([]);
              setSearchOpen(!searchOpen);
            }}
            aria-label="Abrir buscador"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          {searchOpen && (
            <div className="search-box">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && filteredResults.length > 0) {
                    const firstResult = filteredResults[0];
                    if (firstResult.link.startsWith("http")) {
                      window.open(firstResult.link, "_blank");
                    } else {
                      navigate(firstResult.link);
                      closeAll();
                    }
                  }
                }}
              />

              {filteredResults.length > 0 && (
                <ul className="search-results">
                  {filteredResults.map((result, index) => (
                    <li key={index}>
                      {result.link.startsWith("http") ? (
                        <a
                          href={result.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setSearchOpen(false)}
                        >
                          {result.title}
                        </a>
                      ) : (
                        <NavLink
                          to={result.link}
                          className="nav-link"
                          onClick={() => closeAll()}
                        >
                          {result.title}
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;