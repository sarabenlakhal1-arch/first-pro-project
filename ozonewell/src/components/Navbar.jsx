import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logoImg from '../assets/logoozon_nobg.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logoImg} alt="Ozone Well Logo" className="logo-img" />
          </Link>
        </div>

        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>

        {isMenuOpen && <div className="nav-overlay" onClick={toggleMenu}></div>}

        <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
          <li className="nav-item-li"><Link to="/" className="nav-link-item">Accueil</Link></li>
          <li className="nav-item-li"><Link to="/solutions" className="nav-link-item">Solutions</Link></li>
          <li className="nav-item-li"><Link to="/documentation" className="nav-link-item">Documentation</Link></li>
          <li className="nav-item-li"><Link to="/certificats" className="nav-link-item">Certificats</Link></li>
          <li className="nav-item-li">
            <Link to="/contact" className="nav-btn-contact-mobile">Contactez-nous</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;