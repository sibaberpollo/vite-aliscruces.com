import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import FeaturedImage from '/images/resources/bio-alis.jpeg';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function QuienEsAlisCruces() {
  const { t, i18n } = useTranslation(); // Hook de traducción
  const recognitions = t("biography.recognitions", { returnObjects: true }); // Obtiene la lista de reconocimientos

  return (
    <>
      <Helmet>
        <title>{t("biography.title")}</title>
        <meta name="description" content={t("biography.description")} />
        <meta name="robots" content="index, follow" />

        {/* Facebook Open Graph */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`${BASE_URL}/${i18n.language}/quien-es-alis-cruces`} />
        <meta property="og:title" content={t("biography.title")} />
        <meta property="og:description" content={t("biography.description")} />
        <meta property="og:image" content="https://aliscruces.com/images/resources/bio-alis.jpeg" />
        <meta property="og:image:alt" content="Alis Cruces - Biografía" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aliscruces" />
        <meta name="twitter:title" content={t("biography.title")} />
        <meta name="twitter:description" content={t("biography.description")} />
        <meta name="twitter:image" content="https://aliscruces.com/images/resources/bio-alis.jpeg" />
      </Helmet>

      <section className="block">
        <div className="container">
          <div className="page-content">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="blog-single">
                  <div className="blog-post v2">
                    <div className="blog-info">
                      <h1 className='mb-5'>{t("biography.section_title")}</h1>

                      {i18n.language === "es" ? (
                        <div className="video-responsive">
                          <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/X1CVanLWQHc"
                            title="Biografía de Alis Cruces"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      ) : (
                        <div className="blog-thumbnail">
                          <img
                            src={FeaturedImage}
                            alt="Alis Cruces"
                            className="w-100"
                            width={1000}
                            height={600}
                          />
                        </div>
                      )}

                      <p className='mt-5'>{t("biography.introduction")}</p>
                      <p>{t("biography.early_years")}</p>
                      <p>{t("biography.education")}</p>
                      <p>{t("biography.current_work")}</p>

                      {/* Renderizar el texto con un enlace usando dangerouslySetInnerHTML */}
                      <p dangerouslySetInnerHTML={{ __html: t("biography.international_performances") }}></p>
                      {i18n.language === "es" && (
                        <div className="blog-thumbnail">
                          <img
                            src={FeaturedImage}
                            alt="Alis Cruces"
                            className="w-100"
                            width={1000}
                            height={600}
                          />
                        </div>
                      )}
                      <h2>{t("biography.recognitions_title")}</h2>
                      <ul className="reconocimientos">
                        {recognitions.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <p>{t("biography.conclusion")}</p>
                      <h2>{t("biography.compasses_section_title")}</h2>
                      <p>{t("biography.compasses_description")}</p>
                      <div className="video-responsive">
                          <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/Zsn6YUKaJHQ"
                            title="Biografía de Alis Cruces"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                      </div>
                      <div className="compasess-rss listen-dv text-center">
                        <h3 className="m-4">{t("biography.compasses_rrss")}</h3>
                        <ul>
                          {compassesSocialLinks.map((link, index) => (
                            <li key={index}>
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link mx-2"
                              >
                                <i className={link.iconClass} aria-hidden="true"></i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="compasses-members">
                        <hr />
                        <h4 className="mb-4 fw-bold fs-4">{t("biography.compasses_members_title")}</h4>
                        <ul className="list-unstyled"> {/* Eliminado d-flex y flex-wrap */}
                          {t("biography.compasses_members", { returnObjects: true }).map((member, index) => (
                            <li key={index} className="mb-3">
                              <p className="fw-bold mb-1">{member.instrument}</p>
                              <p className="mb-1">{member.name}</p>
                              <a
                                href={`https://www.instagram.com/${member.instagram.replace("@", "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link"
                              >
                                <i className="fab fa-instagram"></i> {member.instagram}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QuienEsAlisCruces;

const compassesSocialLinks = [
  {
    href: "https://www.facebook.com/Compassesvzla/",
    title: "Compasses Facebook",
    iconClass: "fab fa-facebook",
  },
  {
    href: "https://www.instagram.com/therealcompasses/",
    title: "Compasses Instagram",
    iconClass: "fab fa-instagram",
  },
  {
    href: "https://www.youtube.com/@compassesvzla5719",
    title: "Compasses YouTube",
    iconClass: "fab fa-youtube",
  },
  {
    href: "https://open.spotify.com/artist/65eae5XHpxA69xhTtiyMc8?si=CsgjbMYSQJGJtt4Ng9R2pQ",
    title: "Compasses Spotify",
    iconClass: "fab fa-spotify",
  },
  {
    href: "https://music.apple.com/cl/artist/compasses-group/1776050276",
    title: "Compasses Apple Music",
    iconClass: "fa-brands fa-apple",
  },
  {
    href: "https://deezer.page.link/C3J69VBbTHdHNmXw5",
    title: "Compasses Deezer",
    iconClass: "fab fa-deezer",
  }
];

