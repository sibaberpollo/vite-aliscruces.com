import React from 'react';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import SidebarContact from '../components/SidebarContact';

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const form = event.target;
  
    // Enviar el primer correo
    emailjs
      .sendForm(
        'service_ir30hjk', // Service ID
        'template_98iboiv', // Template ID para ti
        form,
        'eltFaZJW0Qdy-zkN0' // Public Key
      )
      .then(() => {
        // Enviar el correo de confirmación al usuario
        emailjs
          .sendForm(
            'service_ir30hjk', // Service ID
            'template_zhvvc6p', // Template ID de confirmación
            form,
            'eltFaZJW0Qdy-zkN0' // Public Key
          )
          .catch((error) => {
            console.error('Error sending confirmation email:', error);
          });
  
        // Redirigir después de que ambos correos hayan sido procesados
        navigate('/gracias');
      })
      .catch((error) => {
        console.error('Error sending the form:', error);
        setFormError(true);
      });
  };
  
  return (
    <>
      <Helmet>
        <title>Contacto | Alis Cruces</title>
        <meta 
          name="description" 
          content="¿Quieres colaborar con Alis Cruces? Contáctalo para clases de música, presentaciones y proyectos. Disponible para eventos y enseñanza personalizada." 
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
            <SidebarContact />

            {/* Formulario */}
            <div className="col-lg-8">
              <div className="contact-page-form">
                <h3 className="sb-title">¿Tienes alguna pregunta?</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="from_name" // Corresponde a {{from_name}}
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
                          name="from_email" // Corresponde a {{from_email}}
                          placeholder="Tu Email *"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone" // Corresponde a {{phone}}
                          placeholder="Tu Teléfono (opcional)"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message" // Corresponde a {{message}}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
