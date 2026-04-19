import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Catalogue from './components/Catalogue';
import Solutions from './components/Solutions';
import SolutionDetail from './components/SolutionDetail';
import AirOzoneDetails from './components/AirOzoneDetails';
import EauOzoneDetails from './components/EauOzoneDetails';
import IndustOzoneDetails from './components/IndustOzoneDetails';
import AgriOzoneDetails from './components/AgriOzoneDetails';
import EtabOzoneDetails from './components/EtabOzoneDetails';
import CuisineOzoneDetails from './components/CuisineOzoneDetails';
import HorecaOzoneDetails from './components/HorecaOzoneDetails';
import CliniqueOzoneDetails from './components/CliniqueOzoneDetails';
import Certificats from './components/Certificats';
import Documentation from './components/Documentation';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <TopBar />
        <Navbar />
        
        {/* C'est ici que les pages s'échangent */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/air-ozone" element={<AirOzoneDetails />} />
          <Route path="/solutions/eau-ozone" element={<EauOzoneDetails />} />
          <Route path="/solutions/agroalimentaire" element={<IndustOzoneDetails />} />
          <Route path="/solutions/agriculture" element={<AgriOzoneDetails />} />
          <Route path="/solutions/etablissement" element={<EtabOzoneDetails />} />
          <Route path="/solutions/cuisine" element={<CuisineOzoneDetails />} />
          <Route path="/solutions/horeca" element={<HorecaOzoneDetails />} />
          <Route path="/solutions/clinique" element={<CliniqueOzoneDetails />} />
          <Route path="/solutions/:type" element={<SolutionDetail />} />
          <Route path="/certificats" element={<Certificats />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
