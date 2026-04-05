import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Catalogue from './components/Catalogue';
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
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
