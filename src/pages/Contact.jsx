import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';
import SocialLinks from '../components/SocialLinks';

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    emailjs
      .sendForm(
        'service_ir30hjk', // Service ID
        'template_98iboiv', // Template ID
        form,
        'eltFaZJW0Qdy-zkN0' // Public Key
      )
      .then(
        () => {
          setFormSubmitted(true);
          setFormError(false);
        },
        (error) => {
          console.error('Error sending the form:', error);
          setFormError(true);
        }
      );
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

      <section className="block contact-page">
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
                      <a href="mailto:tutorialesaliscruces@gmail.com">tutorialesaliscruces@gmail.com</a>
                    </span>
                  </li>
                  <li>
                    <i className="flaticon-location"></i>
                    <span>Valencia, Venezuela</span>
                  </li>
                </ul>
                {/* Social Links */}
                <SocialLinks className="socio-links" />
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
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="from_name" // Corresponde a la variable {{from_name}} del template
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
                              name="email" // Para el correo del remitente
                              placeholder="Tu Email *"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              name="message" // Corresponde a la variable {{message}} del template
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
                    {formError && (
                      <div className="alert alert-danger text-center">
                        <h3>Hubo un error</h3>
                        <p>Por favor, inténtalo de nuevo más tarde.</p>
                      </div>
                    )}
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
