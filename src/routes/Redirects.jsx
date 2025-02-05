import { Navigate, Route } from "react-router-dom";

const Redirects = [
  <Route key="root" path="/" element={<Navigate to="/es/home" replace />} />,
  <Route key="contacto" path="/contacto" element={<Navigate to="/es/contacto" replace />} />,
  <Route key="quien" path="/quien-es-alis-cruces" element={<Navigate to="/es/quien-es-alis-cruces" replace />} />,
  <Route key="gracias" path="/gracias" element={<Navigate to="/es/gracias" replace />} />,
  <Route key="lang" path="/:lang" element={<Navigate to="/:lang/home" replace />} />,
];

export default Redirects;
