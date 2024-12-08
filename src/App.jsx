import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuienEsAlisCruces from './pages/QuienEsAlisCruces';
import Contact from './pages/Contact';
import Gracias from './pages/Gracias';
import Layout from './components/Layout';

function App() {
  useEffect(() => {
    // Cargar el script de Google Analytics
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-WSJQ1029XJ`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Configuración inicial de Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-WSJQ1029XJ');
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout isInteriorPage={false}><Home /></Layout>} />
        <Route path="/quien-es-alis-cruces" element={<Layout isInteriorPage={true}><QuienEsAlisCruces /></Layout>} />
        <Route path="/contacto" element={<Layout isInteriorPage={true}><Contact /></Layout>} />
        <Route path="/gracias" element={<Layout isInteriorPage={true}><Gracias /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
