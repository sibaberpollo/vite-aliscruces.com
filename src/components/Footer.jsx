// src/components/Footer.jsx
import React from 'react';
import logo from '/images/logo.png'; // Ajusta el path según tu estructura de archivos

export default function Footer() {
  return (
    <footer>
      <div className="container">
        {/*<div className="top-footer">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-about">
                <h3>London Sinfonietta</h3>
                <p>
                  169 Bridle Ave. <br /> Georgetown, SC 29440
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-contact">
                <ul>
                  <li>+123 456 789 01</li>
                  <li>
                    <a href="mailto:info@username.com" title="">info@username.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-links">
                <ul className="wd-links">
                  <li><a href="#">Accessibility</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Privacy and Cookie</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-links">
                <ul className="wd-links">
                  <li><a href="#">Accessibility</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Privacy and Cookie</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>*/}

        <div className="bottom-footer">
          <div className="row">
            <div className="col-lg-3">
              <div className="btm-logo">
                <img src={logo} alt="Logo" width={150} height={50} />
              </div>
            </div>
            <div className="col-lg-9">
              {/*<ul className="btm-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Working for Us</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Code of Conduct</a></li>
              </ul>*/} 
              <p className="copyright-txt">
                 Copyright 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
