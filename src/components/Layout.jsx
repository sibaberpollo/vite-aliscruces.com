import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header"; // Header principal
import InteriorHeader from "./InteriorHeader"; // Header para páginas interiores
import Footer from "./Footer"; // Footer común

export default function Layout({ children, isInteriorPage }) {
  return (
    <div className="wrapper">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Alis Cruces",
            "url": "https://aliscruces.com",
            "image": "https://aliscruces.com/images/resources/bio-alis.jpeg",
            "sameAs": [
              "https://api.whatsapp.com/send?phone=584244370005",
              "https://www.instagram.com/aliscruces/",
              "https://www.youtube.com/@aliscruces",
              "https://www.patreon.com/AlisCruces"
            ],
            "jobTitle": "Cuatrista, músico y docente Venezolano ",
            "description": "Alis Cruces es un cuatrista y docente venezolano, director de la Orquesta Regional Alma Llanera de Carabobo. Conoce su música y proyectos.",
            "knowsAbout": ["Música Venezolana", "Cuatro Venezolano", "Bandola Llanera", "Docencia Musical"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Valencia",
              "addressCountry": "Venezuela"
            }
          })}
        </script>
      </Helmet>

      {/* Renderiza el header según el tipo de página */}
      {isInteriorPage ? <InteriorHeader /> : <Header />}
      
      {/* Contenido de la página */}
      {children}
      
      {/* Footer común */}
      <Footer />
    </div>
  );
}
