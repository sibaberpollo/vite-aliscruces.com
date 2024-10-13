import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuienEsAlisCruces from './pages/QuienEsAlisCruces';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout isInteriorPage={false}><Home /></Layout>} />
        <Route path="/quien-es-alis-cruces" element={<Layout isInteriorPage={true}><QuienEsAlisCruces /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
