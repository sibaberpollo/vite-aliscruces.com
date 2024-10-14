import React, { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu'; 
import Logo from '/images/logo750x750.png'
import MenuBars from '/images/bars2.png'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="pb">
      <div className={`bottom-header ${isScrolled ? 'sticky animated slideInDown' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <a href="/" title="Homepage">
                <img src={Logo} alt="Logo" width={150} height={50} />
              </a>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="/">Home</a>
                  <ul>
                    <li><a href="/">Homepage 1</a></li>
                    <li><a href="/index2">Homepage 2</a></li>
                    <li><a href="/index3" className="active">Homepage 3</a></li>
                    <li><a href="/index-dark">Homepage 4 (Dark)</a></li>
                    <li><a href="/index4">Homepage 5</a></li>
                    <li><a href="/index5">Homepage 6</a></li>
                    <li><a href="/index6">Homepage 7</a></li>
                    <li><a href="/index7">Homepage 8</a></li>
                    <li><a href="/index8">Homepage 9</a></li>
                  </ul>
                </li>
                <li><a href="/podcasts">Podcasts</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/authors">Authors</a></li>
                <li><a href="/sponsors">Sponsor</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
            <a href="#" className="menu-btn" onClick={toggleMenu}>
              <img src={MenuBars} alt="Menu" width={30} height={30} />
            </a>
            <ul className="social-links">
              <li>
                <a href="https://www.instagram.com/aliscruces/" className="instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@aliscruces" className="youtube">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://www.patreon.com/AlisCruces" className="patreon">
                  <i className="fab fa-patreon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <MobileMenu menuActive={menuActive} toggleMenu={toggleMenu} />
    </header>
  );
}
