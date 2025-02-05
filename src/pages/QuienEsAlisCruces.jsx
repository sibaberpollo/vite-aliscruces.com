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
                    <div className="blog-thumbnail">
                      <img
                        src={FeaturedImage}
                        alt="Alis Cruces"
                        className="w-100"
                        width={1000}
                        height={600}
                      />
                    </div>
                    <div className="blog-info">
                      <h2>{t("biography.section_title")}</h2>
                      <p>{t("biography.introduction")}</p>
                      <p>{t("biography.early_years")}</p>
                      <p>{t("biography.education")}</p>
                      <p>{t("biography.current_work")}</p>
                      <p>{t("biography.international_performances")}</p>

                      <h2>{t("biography.recognitions_title")}</h2>
                      <ul className="reconocimientos">
                        {recognitions.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <p>{t("biography.conclusion")}</p>
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
