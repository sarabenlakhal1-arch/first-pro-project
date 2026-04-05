import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logoozon.jpeg'; 

export default function Footer() {
  const anneeActuelle = new Date().getFullYear();

  return (
    <footer className="footer-dark">
      <div className="footer-top-container">
        
        {/* --- BLOC 1 : COORDONNÉES (À GAUCHE) --- */}
        <div className="footer-block block-contact">
          <h4 className="block-title">OZONE WELL</h4>
          <p className="contact-item">
            80, rue Allal B. Ahmed Amkik -ex Ménilm. , Belvédère 20300 Casablanca - Maroc
          </p>
          <p className="contact-item">Tel. +212 X XX XX XX XX</p>
          <p className="contact-item">
            <a href="mailto:contact@ozonewell.com">contact@ozonewell.com</a>
          </p>
        </div>

        {/* --- BLOC 2 : LIENS DU SITE (AU MILIEU) --- */}
        <div className="footer-block block-links">
          <h4 className="block-title">PLAN DU SITE</h4>
          <ul className="footer-nav-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/produits">Produits</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/catalogue">Catalogue</Link></li>
            <li><Link to="/entreprise">Entreprise</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* --- BLOC 3 : LOGO & RÉSEAUX (À DROITE) --- */}
        <div className="footer-block block-brand">
          <div className="brand-logo-wrapper">
            <img src={logo} alt="Logo OZONE WELL" className="footer-brand-logo" />
          </div>
          <h4 className="block-title">SUIVEZ-NOUS</h4>
          <div className="social-network-icons">
            {/* Facebook */}
            <a href="https://www.facebook.com/ozonewell" target="_blank" rel="noopener noreferrer" title="Suivez-nous sur Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/ozonewell" target="_blank" rel="noopener noreferrer" title="Suivez-nous sur Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/ozonewell/" target="_blank" rel="noopener noreferrer" title="Suivez-nous sur LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* --- SECTION BASSE : COPYRIGHT --- */}
      <div className="footer-copyright-bar">
        <p>© {anneeActuelle} OZONE WELL | Politique de confidentialité | Avis légal</p>
      </div>
    </footer>
  );
}
