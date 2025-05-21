import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/index.jsx";
import NotFoundPage from "./pages/404.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutPage from "./pages/about/index.jsx";
import ServicesPage from "./pages/services/index.jsx";
import Single from "./components/services/single.jsx";
import CareerPage from "./pages/career/index.jsx";
import ContactPage from "./pages/contact/index.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<Single />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
          <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </Router>
  );
}
export default App;
