import React from 'react';
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Courses from '../components/Courses';
import SocialExtended from '../components/SocialExtended';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Home() {
  const { t, i18n } = useTranslation(); // Hook para acceder a las traducciones
  const { lang } = useParams();
  const songbooks = t("home.songbooks", { returnObjects: true });

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('home.title')}</title>
        <meta name="description" content={t('home.description')} />
        <meta name="robots" content="index, follow" />

        {/* SEO multi-idioma con hreflang */}
        <link rel="alternate" href={`${BASE_URL}/es${location.pathname.replace(/^\/(en|es)/, '')}`} hrefLang="es" />
        <link rel="alternate" href={`${BASE_URL}/en${location.pathname.replace(/^\/(en|es)/, '')}`} hrefLang="en" />

        {/* Facebook Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BASE_URL}/${i18n.language}/home`} />
        <meta property="og:title" content={t("home.title")} />
        <meta property="og:description" content={t("home.description")} />
        <meta property="og:image" content="https://aliscruces.com/images/resources/bio-alis.jpeg" />
        <meta property="og:image:alt" content="Alis Cruces - Músico Venezolano" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aliscruces" />
        <meta name="twitter:title" content={t("home.title")} />
        <meta name="twitter:description" content={t("home.description")} />
        <meta name="twitter:image" content="https://aliscruces.com/images/resources/bio-alis.jpeg" />
      </Helmet>
      <section className="main-banner-hp3">
        <div className="fixed-bg bg5 overlay"></div>
        <div className="container">
          <div className="banner-text-hp3">
            <span>{t('home.support_me')}</span>
            <h2>{t('home.welcome_message')}</h2>
            <a href="https://www.patreon.com/aliscruces" className="btn-default open-music-player">
              <i className="fa-brands fa-patreon"></i> {t('home.visit_patreon')} <span></span>
            </a>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="fixed-bg bg1"></div>
        <div className="about-section">
          <div className="container">
            <div className="abt-sec">
              <div className="row m-0">
                <div className="col-lg-5 p-0">
                  {/* Video responsivo */}
                  <div className="video-responsive">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/X1CVanLWQHc"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <a href={`/${lang}/quien-es-alis-cruces`} className="col-lg-7 p-0 abt-text-container wrapped-bio" style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="abt-text">
                    <h2>{t('home.who_am_i_title')}</h2>
                    <p>
                      {t('home.bio')}
                      <a href={`/${lang}/quien-es-alis-cruces`} className="leer-mas">
                        <i className="fa fa-arrow-right"></i> {t('home.read_more')}
                      </a>
                    </p>
                    <SocialExtended />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="patreon-section" style={{ paddingTop: '60px' }}>
        <div className="container">
          <div className="section-title text-center">
            <span>{t('home.patreon_store')}</span>
            <h2>
              {t('home.featured_courses')}
            </h2>
          </div>
          <div className="authors-sec v5">
            <div className="row">
              {songbooks.map((songbook, index) => (
                <Courses
                  key={index}
                  imgSrc={`/images/resources/${songbook.thumbnail}`}
                  name={songbook.title}
                  role={songbook.instruments}
                  profileLink={songbook.link}
                  playlistLink={songbook.link}
                />
              ))}
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '30px' }}>
            <a href="https://www.patreon.com/aliscruces/shop" className="btn-default open-music-player">
              <i className="fa-brands fa-patreon"></i> {t('home.visit_store')} <span></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;