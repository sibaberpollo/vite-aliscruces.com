import React from 'react';
import Header from './Header';  // Header principal
import InteriorHeader from './InteriorHeader';  // Header para páginas interiores
import Footer from './Footer';  // Footer común

export default function Layout({ children, isInteriorPage }) {

  return (
    <div className="wrapper">
      {isInteriorPage ? <InteriorHeader /> : <Header />}
        {children}
      <Footer />
    </div>
  );
}