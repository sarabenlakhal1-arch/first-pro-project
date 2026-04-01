import { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import TrustSection from './components/TrustSection';
import Activite from './components/Activite';

import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app">
      <TopBar />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroCarousel />
      <TrustSection />
      <Activite />
      <Footer />
    </div>
  );
}

export default App;
