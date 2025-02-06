import { useEffect } from "react";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-WSJQ1029XJ"; // Tu ID de Google Analytics

function GoogleAnalytics() {
  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
    ReactGA.send("pageview"); // Enviar vista de página inicial
  }, []);

  return null;
}

export default GoogleAnalytics;
