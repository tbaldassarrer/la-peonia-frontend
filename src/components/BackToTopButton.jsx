import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "40px",
          right: "40px",
          padding: "10px 15px",
          fontSize: "18px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "rgba(27, 27, 27, 0.85)",
          color: "#fff",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(119, 119, 119, 0.85)",
          zIndex: 1000,
        }}
        aria-label="Volver arriba"
      >
        ↑
      </button>
    )
  );
};

export default BackToTopButton;
