import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setFormSubmitted(true))
      .catch((error) => {
        console.error("Error submitting the form:", error);
        alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
      });
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Alis Cruces</title>
        <meta
          name="description"
          content="Ponte en contacto con Alis Cruces para colaboraciones, clases y más."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contacto | Alis Cruces" />
        <meta
          property="og:description"
          content="Ponte en contacto con Alis Cruces para colaboraciones, clases y más."
        />
        <meta property="og:image" content="/path-to-image.jpg" />
      </Helmet>

      <section className="block">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="get-touch">
                <h3 className="sb-title">Contáctame</h3>
                <p>
                  Estoy disponible para colaboraciones, clases y cualquier consulta que tengas. ¡No dudes en escribirme!
                </p>
                <ul className="contact-dtts">
                  <li>
                    <i className="flaticon-telephone"></i>
                    <span>+58 424 437 0005</span>
                  </li>
                  <li>
                    <i className="flaticon-mail"></i>
                    <span>
                      <a href="mailto:contacto@aliscruces.com">contacto@aliscruces.com</a>
                    </span>
                  </li>
                  <li>
                    <i className="flaticon-location"></i>
                    <span>Valencia, Venezuela</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Formulario */}
            <div className="col-lg-8">
              <div className="contact-page-form">
                {formSubmitted ? (
                  <div className="alert alert-success text-center">
                    <h3>¡Gracias por tu mensaje!</h3>
                    <p>Tu mensaje ha sido enviado correctamente. Me pondré en contacto contigo pronto.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="sb-title">¿Tienes alguna pregunta?</h3>
                    <form
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      className="contact-form"
                      onSubmit={handleSubmit}
                      netlify
                    >
                      {/* Honeypot para evitar spam */}
                      <input type="hidden" name="bot-field" />
                      {/* Campo oculto para Netlify */}
                      <input type="hidden" name="form-name" value="contact" />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              placeholder="Tu Nombre *"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              placeholder="Tu Email *"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              name="message"
                              placeholder="Tu Mensaje *"
                              required
                              className="form-control"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12 text-center">
                          <button type="submit" className="btn-default">
                            Enviar Mensaje <span></span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
