import React from 'react';
import SocialLinks from './SocialLinks';

export default function MobileMenu({ menuActive, toggleMenu }) {
  return (
    <div className={`responsive-mobile-menu d-flex flex-wrap align-items-end ${menuActive ? 'active' : ''}`}>
      <button onClick={toggleMenu} className="close-menu">
        <i className="fa fa-times"></i>
      </button>
      <ul className="mb-menu">
        <li>
          <a href="/quien-es-alis-cruces">¿Quién soy?</a>
          <a href="/contacto">Contáctame</a>
        </li>
      </ul>
      <SocialLinks />
      <div className="rep-copyright">
        <p>
          Copyright © 2024 · All Rights Reserved.
        </p>
      </div>
    </div>
  );

  /*
  return (
    <div className={`responsive-mobile-menu d-flex flex-wrap align-items-end ${menuActive ? 'active' : ''}`}>
      <button onClick={toggleMenu} className="close-menu">
        <i className="fa fa-times"></i>
      </button>
      <ul className="mb-menu">
        <li>
          <a href="/">Home</a>
          <ul>
            <li><a href="/">Homepage 1</a></li>
            <li><a href="/index2">Homepage 2</a></li>
            <li><a href="/index3">Homepage 3</a></li>
            <li><a href="/index-dark">Homepage 4 (Dark)</a></li>
            <li><a href="/index4">Homepage 5</a></li>
            <li><a href="/index5">Homepage 6</a></li>
            <li><a href="/index6">Homepage 7</a></li>
            <li><a href="/index7">Homepage 8</a></li>
            <li><a href="/index8">Homepage 9</a></li>
          </ul>
        </li>
        <li><a href="/podcasts">Podcasts</a></li>
        <li><a href="/blog">Blog</a>
          <ul>
            <li><a href="/blog-sidebar">Blog Sidebar</a></li>
            <li><a href="/blog-wide">Blog Wide</a></li>
            <li><a href="/blog-grid">Blog Grid</a></li>
            <li><a href="/blog-grid-sidebar">Blog Grid Sidebar</a></li>
            <li><a href="/blog-details">Blog Details 01</a></li>
            <li><a href="/blog-details-v2">Blog Details 02</a></li>
            <li><a href="/blog-details-v3">Blog Details 03</a></li>
            <li><a href="/blog-details-v4">Blog Details 04</a></li>
          </ul>
        </li>
        <li><a href="/authors">Authors</a></li>
        <li><a href="/sponsors">Sponsor</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <ul className="social-links">
        <li><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
        <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
        <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
        <li><a href="https://dribbble.com"><i className="fab fa-dribbble"></i></a></li>
      </ul>
      <div className="rep-copyright">
        <p>
          Copyright © 2020 <a href="/">Softcircles</a> All Rights Reserved.
        </p>
      </div>
    </div>
  );
  */
}
