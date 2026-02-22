import React from "react";
import "./LegalPages.css";

const UsoCookies = () => (
  <div className="legal-page">
    <h1>Política de Cookies</h1>

    <section>
      <h2>¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en el
        navegador del usuario cuando visita una página web. Sirven para
        mejorar la experiencia de navegación y permitir el funcionamiento
        técnico del sitio.
      </p>
    </section>

    <section>
      <h2>¿Qué cookies utiliza este sitio?</h2>
      <p>
        La Peonía es un proyecto web de demostración/portfolio. Actualmente:
      </p>
      <ul>
        <li>
          <strong>Cookies técnicas:</strong> pueden utilizarse para el
          funcionamiento básico del sitio.
        </li>
        <li>
          <strong>No se utilizan cookies analíticas</strong> ni herramientas
          de seguimiento como Google Analytics.
        </li>
        <li>
          <strong>No se utilizan cookies publicitarias.</strong>
        </li>
      </ul>
    </section>

    <section>
      <h2>Cookies de terceros</h2>
      <p>
        Este sitio puede incluir enlaces externos (por ejemplo, Instagram o
        WhatsApp). Al acceder a dichos enlaces, pueden aplicarse las políticas
        de cookies de esos servicios externos.
      </p>
    </section>

    <section>
      <h2>Gestión de cookies</h2>
      <p>
        El usuario puede configurar su navegador para bloquear o eliminar
        cookies en cualquier momento. Cada navegador ofrece opciones distintas
        en su menú de configuración.
      </p>
    </section>

    <section>
      <h2>Actualizaciones</h2>
      <p>
        Esta política puede actualizarse si el sitio incorpora nuevas
        funcionalidades que impliquen el uso de cookies.
      </p>
      <p>
        Última actualización: 22 de febrero de 2026.
      </p>
    </section>
  </div>
);

export default UsoCookies;