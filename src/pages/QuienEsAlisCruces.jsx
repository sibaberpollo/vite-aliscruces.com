import React from 'react';
import FeaturedImage from '../assets/images/resources/blog-large.jpg';

function QuienEsAlisCruces() {
  return (
      <section className="block">
        <div className="container">
          <div className="page-content">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="blog-single">
                  <div className="blog-post v2">
                    <div className="blog-thumbnail">
                      <img src={FeaturedImage} alt="" className="w-100" width={1000} height={600} />
                      <div className="like-post">
                        <i className="flaticon-heart-1"></i>
                        <span>12</span>
                      </div>
                    </div>
                    <div className="blog-info">
                      <ul className="pod-meta">
                        <li>
                          <i className="flaticon-user"></i>
                          <a href="#" title="">James Smith</a>
                        </li>
                        <li>
                          <i className="flaticon-date"></i>
                          <a href="#" title="">10 Apr 2020</a>
                        </li>
                      </ul>
                      <h2>Anniversary of Elton John's Most Popular Work</h2>
                      <p>Integer sollicitudin ligula non enim sodales, non lacinia nunc ornare...</p>
                      <p>Quam ligula. Aenamet, consectetuer adipiscing elit. Phasellus hendrerit...</p>
                      <blockquote>
                        <p>Podcasting is hard work! It's such a relief to have a team like Acast...</p>
                      </blockquote>
                      {/* Más contenido */}
                    </div>
                  </div>
                </div>
                <div className="listen-podcast">
                  <h2>Everybody Should Be Listening to This Podcast</h2>
                  <a href="#" title="" className="download-btn">
                    <i className="fa fa-download"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default QuienEsAlisCruces;
