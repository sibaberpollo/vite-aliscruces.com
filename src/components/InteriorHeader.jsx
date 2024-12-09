import React, { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import Logo from '/images/logo750x750.png';
import MenuBars from '/images/bars2.png';
import SocialLinks from './SocialLinks';

export default function InteriorHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="interior-header">
      <div className={`bottom-header ${isScrolled ? 'sticky animated slideInDown' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <a href="/" title="Homepage">
                <img src={Logo} alt="Logo" width={140} height={40} />
              </a>
            </div>
            <a href="#" className="menu-btn" onClick={toggleMenu}>
              <img src={MenuBars} alt="Menu" width={20} height={20} />
            </a>
            <SocialLinks />
          </div>
        </div>
      </div>
      <MobileMenu menuActive={menuActive} toggleMenu={toggleMenu} />
    </header>
  );
}
