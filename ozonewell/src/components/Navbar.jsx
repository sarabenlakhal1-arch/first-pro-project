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
          
          {/* Changez la ligne de l'item Solutions comme ceci : */}
            <li className="nav-item-li nav-item-solutions"> {/* Ajout de nav-item-li ici */}
              <Link to="/solutions" className="nav-link-item">Solutions</Link> {/* nav-link-item ici */}
  
            <ul className="main-dropdown">

              
              


                <li className="topic-group">
                  <Link to="/solutions/air-ozone" className="topic-link">air ozonné</Link>
                  <ul className="sub-level">
                    <li className="has-accordion">
                      <span className="accordion-label">Industrie</span>
                      <ul className="accordion-content">
                        <li><Link to="/solutions/agroalimentaire">Industrie Agroalimentaire</Link></li>
                      </ul>
                    </li>
                    <li className="has-accordion">
                      <span className="accordion-label">Établissement</span>
                      <ul className="accordion-content">
                        <li><Link to="/solutions/hotel-ozone">Hôtel</Link></li>
                        <li><Link to="/solutions/sante">Santé Médical</Link></li>
                        <li><Link to="/solutions/ecole">École</Link></li>
                        <li><Link to="/solutions/sport">Salle de sport</Link></li>
                        <li><Link to="/solutions/travail">Environnement de travail</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>

               <li className="topic-group">
                 <Link to="/solutions/eau-ozone" className="topic-link">eau ozonnée</Link>
                 <ul className="sub-level">
                   <li><Link to="/solutions/eau-industrie">Industrie</Link></li>
                   <li className="has-accordion">
                   <span className="accordion-label">Agriculture</span>
                     <ul className="accordion-content">
                       <li><Link to="/solutions/piscines">aquaculture</Link></li>
                     </ul>

                   </li>
                   <li className="has-accordion">
                     <span className="accordion-label">Établissement</span>
                     <ul className="accordion-content">
                       <li><Link to="/solutions/piscines">Hottellerie</Link></li>
                       <li><Link to="/solutions/piscines">Piscines & Spas</Link></li>
                     </ul>
                   </li>
                 </ul>
               </li>
            </ul>
          </li>

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