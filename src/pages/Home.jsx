// src/App.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Courses from '../components/Courses';

function App() {
  const [count, setCount] = useState(0);
  const isInteriorPage = false;  // Puedes cambiar esto dependiendo de la página

  return (
    <>
      <Helmet>
        <title>Inicio | Alis Cruces - Músico Venezolano</title>
        <meta
          name="description"
          content="Bienvenido al sitio oficial de Alis Cruces, músico y docente venezolano. Conoce su trabajo como cuatrista internacional y su labor como director de la Orquesta Regional Alma Llanera de Carabobo."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Inicio - Alis Cruces" />
        <meta
          property="og:description"
          content="Explora la trayectoria de Alis Cruces, destacado músico y cuatrista venezolano."
        />
        <meta property="og:image" content="/path-to-home-image.jpg" />
      </Helmet>
      <section className="main-banner-hp3">
        <div className="fixed-bg bg5 overlay"></div>
        <div className="container">
          <div className="banner-text-hp3">
            <span>Channel Podcasts</span>
            <h2>All The Latest Videos, Podcasts, Articles and Photography</h2>
            <a href="#" className="btn-default open-music-player">
              <i className="fa fa-play"></i>Play episode <span></span>
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
                        src="https://www.youtube.com/embed/YqCT8UxVs_g"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-7 p-0">
                    <div className="abt-text">
                      <h5 className="rad-status">
                        <i className="flaticon-sound-bars"></i>On Radio 81.1 FM
                      </h5>
                      <h2>¿Quién soy?</h2>
                      <p>Alis Cruces, es un músico y docente de Güigüe Estado Carabobo, que reside actualmente en Valencia, Venezuela.</p>
                      <div className="presented">
                        {/*<h3>Presented By:</h3>
                        <ul>
                          <li>
                            <Link href="#">
                              Rhian Todhunter
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              Will Backler + Jackson
                            </Link>
                          </li>
                        </ul>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ paddingTop: '60px' }}>
          <div className="container">
            <div className="section-title text-center">
              <span>Enjoy some new awesome music</span>
              <h2>
                Featured <span>Courses</span>
              </h2>
            </div>

            <div className="authors-sec v5">
              <div className="row">
                <Courses
                  imgSrc="/images/resources/author1.jpg"
                  name="Nomina James"
                  role="Scientist Artist"
                  profileLink="https://www.patreon.com/NominaJames"
                  playlistLink="#"
                />
                <Courses
                  imgSrc="/images/resources/author2.jpg"
                  name="Thomas James"
                  role="Scientist Artist"
                  profileLink="https://www.patreon.com/ThomasJames"
                  playlistLink="#"
                />
                <Courses
                  imgSrc="/images/resources/author3.jpg"
                  name="Wilimes Doms"
                  role="Scientist Artist"
                  profileLink="https://www.patreon.com/WilimesDoms"
                  playlistLink="#"
                />
                <Courses
                  imgSrc="/images/resources/author4.jpg"
                  name="Qlark Walkar"
                  role="Scientist Artist"
                  profileLink="https://www.patreon.com/QlarkWalkar"
                  playlistLink="#"
                />
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

export default App;
