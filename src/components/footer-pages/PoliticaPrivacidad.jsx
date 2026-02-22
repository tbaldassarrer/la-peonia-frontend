import React from "react";
import "./LegalPages.css";

const PoliticaPrivacidad = () => (
  <div className="legal-page">
    <h1>Política de Privacidad</h1>

    <section>
      <p>
        En <strong>La Peonía</strong> (web de demostración/portfolio) respetamos la privacidad
        de las personas usuarias. Esta política explica cómo se tratan los datos personales
        cuando se utiliza este sitio.
      </p>
      <p>
        <b>Importante:</b> este proyecto es una web de práctica. Los datos de contacto, empresa y
        enlaces pueden ser <b>ficticios</b> y se muestran únicamente como ejemplo de maquetación.
      </p>
    </section>

    <section>
      <h2>Normativa aplicable</h2>
      <p>
        Esta política está alineada con la normativa española y europea vigente en materia de
        protección de datos, incluyendo:
      </p>
      <ul>
        <li>
          <b>Reglamento (UE) 2016/679 (RGPD)</b> relativo a la protección de las personas físicas
          en lo que respecta al tratamiento de datos personales.
        </li>
        <li>
          <b>Ley Orgánica 3/2018 (LOPDGDD)</b>, de Protección de Datos Personales y garantía de los
          derechos digitales.
        </li>
        <li>
          <b>Ley 34/2002 (LSSI-CE)</b>, de Servicios de la Sociedad de la Información y Comercio
          Electrónico.
        </li>
      </ul>
    </section>

    <section>
      <h2>Responsable del tratamiento</h2>
      <p>
        <strong>Responsable:</strong> La Peonía (proyecto demo/portfolio)<br />
        <strong>Correo de contacto:</strong> <a href="mailto:hola@lapeonia.com">hola@lapeonia.com</a><br />
        <strong>Ubicación:</strong> España (dato ficticio)
      </p>
    </section>

    <section>
      <h2>Datos que recopilamos</h2>
      <p>
        A través del formulario de contacto se pueden recopilar los siguientes datos
        <b>identificativos</b>:
      </p>
      <ul>
        <li>Nombre</li>
        <li>Correo electrónico</li>
        <li>Mensaje (contenido que el usuario escribe)</li>
      </ul>
      <p>
        No se recogen categorías especiales de datos (art. 9 RGPD) de forma intencionada.
        Recomendamos no incluir información sensible en el mensaje.
      </p>
    </section>

    <section>
      <h2>Finalidad del tratamiento</h2>
      <p>Los datos se usan únicamente para:</p>
      <ul>
        <li>
          <b>Responder a consultas o solicitudes</b> enviadas mediante el formulario de contacto.
        </li>
        <li>
          <b>Gestión básica de comunicación</b> con la persona usuaria (por ejemplo, responder por email).
        </li>
      </ul>
    </section>

    <section>
      <h2>Base legal</h2>
      <p>
        La base legal para el tratamiento es el <b>consentimiento</b> de la persona usuaria al enviar
        el formulario de contacto.
      </p>
    </section>

    <section>
      <h2>Conservación de los datos</h2>
      <p>
        Los datos se conservarán únicamente durante el tiempo necesario para responder a la solicitud
        y realizar el seguimiento de la conversación, o durante los plazos exigidos por obligación legal
        si fuese aplicable.
      </p>
    </section>

    <section>
      <h2>Destinatarios</h2>
      <p>
        Los datos no se cederán a terceros, salvo obligación legal.
      </p>
    </section>

    <section>
      <h2>Seguridad</h2>
      <p>
        Se aplican medidas razonables de seguridad para proteger los datos personales. Aun así, el usuario
        debe tener en cuenta que ninguna transmisión por Internet es 100% segura.
      </p>
    </section>

    <section>
      <h2>Derechos de las personas usuarias</h2>
      <p>
        La persona usuaria puede ejercer, cuando corresponda, los derechos de:
        <b> acceso, rectificación, supresión, limitación, portabilidad y oposición</b>.
      </p>
      <p>
        Para ello, puede escribir a:{" "}
        <a href="mailto:hola@lapeonia.com">hola@lapeonia.com</a>{" "}
        indicando el derecho que desea ejercer y un medio de contacto.
      </p>
    </section>

    <section>
      <h2>Enlaces a terceros</h2>
      <p>
        El sitio web puede incluir enlaces a páginas de terceros. Estas páginas disponen de sus propias
        políticas de privacidad. <b>La Peonía</b> no se responsabiliza del contenido ni de las prácticas
        de privacidad de sitios externos.
      </p>
    </section>

    <section>
      <h2>Reclamaciones</h2>
      <p>
        Si la persona usuaria considera que sus derechos no han sido atendidos adecuadamente, puede presentar
        una reclamación ante la Agencia Española de Protección de Datos (AEPD).
      </p>
      <p>
        Sitio web AEPD:{" "}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
          www.aepd.es
        </a>
      </p>
    </section>

    <section>
      <h2>Cambios en esta política</h2>
      <p>
        Esta política puede actualizarse para reflejar cambios legales o ajustes del sitio web.
        Se recomienda revisarla periódicamente.
      </p>
      <p>
        Última actualización: 22 de febrero de 2026.
      </p>
    </section>
  </div>
);

export default PoliticaPrivacidad;