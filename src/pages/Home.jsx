// src/App.jsx
import React, { useState } from 'react';
import Layout from '../components/Layout';  // Asegúrate de importar el layout
//import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const isInteriorPage = false;  // Puedes cambiar esto dependiendo de la página

  return (
    <Layout isInteriorPage={isInteriorPage}>
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
    </Layout>
  );
}

export default App;
