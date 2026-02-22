import React from "react";
import "./LegalPages.css";

const AvisosLegales = () => (
  <div className="legal-page">
    <h1>Aviso Legal</h1>

    <section>
      <h2>Bienvenido/a</h2>
      <p>
        Bienvenido/a a <b>La Peonía</b>. Antes de navegar por este sitio web, es importante
        que conozcas estos términos.
      </p>
      <p>
        Este proyecto es una <b>web de demostración/portfolio</b> (no comercial) desarrollada
        con fines de aprendizaje. Los datos de contacto y de empresa que aparecen en la web
        son <b>ficticios</b> y se incluyen únicamente como ejemplo de maquetación.
      </p>
    </section>

    <section>
      <h2>Datos del responsable</h2>
      <p>
        <strong>Identidad:</strong> La Peonía (proyecto demo)<br />
        <strong>Nombre comercial:</strong> La Peonía<br />
        <strong>Domicilio:</strong> España (dato ficticio)<br />
        <strong>Correo electrónico:</strong> hola@lapeonia.com (ficticio)<br />
        <strong>Teléfono:</strong> +34 000 000 000 (ficticio)
      </p>
    </section>

    <section>
      <h2>Condiciones generales de uso</h2>
      <p>
        Las presentes condiciones regulan el acceso y el uso de este sitio web. El acceso
        a la web implica la aceptación de estas condiciones, así como el compromiso de
        utilizarla de forma lícita, respetando la buena fe y el orden público.
      </p>
      <p>
        El usuario se compromete a no realizar acciones que puedan dañar, inutilizar o
        sobrecargar el sitio web, ni intentar acceder a áreas restringidas sin autorización.
      </p>
    </section>

    <section>
      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, diseños, logotipos y elementos gráficos mostrados en esta web pertenecen
        al proyecto <b>La Peonía</b> o se utilizan como recursos de muestra. Queda prohibida su
        reproducción, distribución o modificación sin autorización, salvo que la ley lo permita.
      </p>
    </section>

    <section>
      <h2>Datos personales</h2>
      <p>
        La información relativa a la privacidad y la protección de datos se describe en la{" "}
        <a href="/politica-privacidad">Política de privacidad</a>.
      </p>
    </section>

    <section>
      <h2>Obligaciones y responsabilidades</h2>
      <p>
        El responsable no garantiza la inexistencia de errores en el acceso al sitio web ni
        en su contenido, aunque se procurará, en la medida de lo posible, evitarlos o
        corregirlos.
      </p>
      <p>
        El usuario es responsable del uso que haga del sitio web y de la información aquí
        publicada.
      </p>
    </section>

    <section>
      <h2>Medidas de seguridad</h2>
      <p>
        Se aplican medidas razonables para proteger el sitio. Aun así, el usuario debe tener
        en cuenta que las medidas de seguridad en Internet no son infalibles y que pueden
        existir riesgos asociados a la navegación.
      </p>
    </section>
  </div>
);

export default AvisosLegales;