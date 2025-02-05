import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import FeaturedImage from '/images/resources/bio-alis.jpeg';

function QuienEsAlisCruces() {
  const { t } = useTranslation(); // Hook de traducción
  const recognitions = t("biography.recognitions", { returnObjects: true }); // Obtiene la lista de reconocimientos

  return (
    <>
      <Helmet>
        <title>{t("biography.title")}</title>
        <meta name="description" content={t("biography.description")} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t("biography.title")} />
        <meta property="og:description" content={t("biography.description")} />
        <meta property="og:image" content="/path-to-image.jpg" />
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
