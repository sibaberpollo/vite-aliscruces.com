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
            <span>Apóyame en Patreon</span>
            <h2>Explora mis contenidos exclusivo y mis cursos destacados</h2>
            <a
              href="https://www.patreon.com/aliscruces"
              className="btn-default open-music-player"
            >
              <i className="fa-brands fa-patreon"></i> Visitar Patreon <span></span>
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
                  <div
                    className="col-lg-7 p-0 abt-text-container wrapped-bio"
                    onClick={() => window.location.href = '/quien-es-alis-cruces'}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="abt-text">
                      <h2>¿Quién soy?</h2>
                      <p>
                        Alis Cruces, es un músico y docente de Güigüe Estado Carabobo, que reside
                        actualmente en Valencia, Venezuela.
                      </p>
                      <a href="/quien-es-alis-cruces" className="btn-default open-music-player">
                        <i className="fa fa-arrow-right"></i>Leer más <span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="patreon-section" style={{ paddingTop: '60px' }}>
          <div className="container">
            <div className="section-title text-center">
              <span>Mi tienda de cursos en Patreon</span>
              <h2>
                Cursos <span>Destacados</span>
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
                    playlistLink="#"
                  />
                ))}
              </div>
            </div>
            <div className="text-center" style={{ marginTop: '30px' }}>
              <a
                href="https://www.patreon.com/aliscruces/shop"
                className="btn-default open-music-player"
              >
                <i class="fa-brands fa-patreon"></i> Ir a la tienda <span></span>
              </a>
            </div>
          </div>
        </section>
    </>
  );
}

export default App;

const songbooks = [
  {
    title: "Cancionero Vol. 1",
    instruments: "Bandola Llanera",
    thumbnail: "mini1.jpg",
    link: "https://www.patreon.com/checkout/AlisCruces?pvid=290407",
  },
  {
    title: "Cancionero Vol. 1",
    instruments: "Cuatro venezolano y Mandolina",
    thumbnail: "mini2.jpg",
    link: "https://www.patreon.com/checkout/AlisCruces?pvid=288422",
  },
  {
    title: "Cancionero Vol. 2 Navideño",
    instruments: "Cuatro venezolano y Mandolina",
    thumbnail: "mini3.jpg",
    link: "#",
  },
  {
    title: "Cancionero Vol. 3",
    instruments: "Cuatro venezolano y Mandolina",
    thumbnail: "mini4.jpg",
    link: "https://www.patreon.com/checkout/AlisCruces?pvid=290399", 
  },
];


