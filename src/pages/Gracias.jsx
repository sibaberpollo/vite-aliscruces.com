import React from 'react';
import { Helmet } from 'react-helmet';
import SidebarContact from '../components/SidebarContact';

function Gracias() {
  return (
    <>
      <Helmet>
        <title>¡Gracias! | Alis Cruces</title>
        <meta
          name="description"
          content="Gracias por ponerte en contacto. Responderé tu mensaje lo antes posible."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="¡Gracias! | Alis Cruces" />
        <meta
          property="og:description"
          content="Gracias por ponerte en contacto. Responderé tu mensaje lo antes posible."
        />
        <meta property="og:image" content="/path-to-thanks-image.jpg" />
      </Helmet>

      <section className="block">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <SidebarContact />

            {/* Mensaje de Agradecimiento */}
            <div className="col-lg-8 d-flex align-items-center justify-content-center">
              <div className="thank-you-message text-center">
                <h3 className="sb-title">¡Gracias por tu mensaje!</h3>
                <p>
                  He recibido tu mensaje y responderé lo antes posible. Si necesitas una respuesta urgente, puedes
                  contactarme directamente a través del correo o teléfono indicado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gracias;
