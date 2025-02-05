import React from 'react';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SidebarContact from '../components/SidebarContact';

function Contact() {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      });
  };

  return (
    <>
      <Helmet>
        <title>{t("contact.title")}</title>
        <meta name="description" content={t("contact.description")} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t("contact.title")} />
        <meta property="og:description" content={t("contact.description")} />
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
                <h3 className="sb-title">{t("contact.form_title")}</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="from_name"
                          placeholder={t("contact.name_placeholder")}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="from_email"
                          placeholder={t("contact.email_placeholder")}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder={t("contact.phone_placeholder")}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder={t("contact.message_placeholder")}
                          required
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn-default">
                        {t("contact.send_button")} <span></span>
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
