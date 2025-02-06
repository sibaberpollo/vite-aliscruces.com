import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import QuienEsAlisCruces from "./pages/QuienEsAlisCruces";
import Contact from "./pages/Contact";
import Gracias from "./pages/Gracias";
import Layout from "./components/Layout";
import Redirects from "./routes/Redirects";
import "./i18n";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";

// Configurar Google Analytics
const GA_MEASUREMENT_ID = "G-WSJQ1029XJ";
ReactGA.initialize(GA_MEASUREMENT_ID);

// Componente para manejar el cambio de idioma desde la URL
function LanguageWrapper({ children }) {
  const { i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && ["es", "en"].includes(lang)) {
      i18n.changeLanguage(lang);
    } else {
      i18n.changeLanguage("es");
    }
  }, [lang, i18n]);

  return children;
}

// Componente para rastrear cambios de página en Google Analytics
function GoogleAnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <GoogleAnalyticsTracker /> {/* Se activa cada vez que cambia la página */}
      <Routes>
        {Redirects} {/* ✅ Ahora funciona correctamente */}

        {/* Rutas con el idioma en la URL */}
        <Route
          path="/:lang/home"
          element={
            <LanguageWrapper>
              <Layout isInteriorPage={false}>
                <Home />
              </Layout>
            </LanguageWrapper>
          }
        />
        <Route
          path="/:lang/quien-es-alis-cruces"
          element={
            <LanguageWrapper>
              <Layout isInteriorPage={true}>
                <QuienEsAlisCruces />
              </Layout>
            </LanguageWrapper>
          }
        />
        <Route
          path="/:lang/contacto"
          element={
            <LanguageWrapper>
              <Layout isInteriorPage={true}>
                <Contact />
              </Layout>
            </LanguageWrapper>
          }
        />
        <Route
          path="/:lang/gracias"
          element={
            <LanguageWrapper>
              <Layout isInteriorPage={true}>
                <Gracias />
              </Layout>
            </LanguageWrapper>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
