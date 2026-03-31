import { useState } from 'react';
import './Navbar.css';
import logoImg from '../assets/logoozon_nobg.png';

function Navbar({ theme, toggleTheme }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { icon: '🏠', text: 'Accueil', href: '#' },
    { text: 'Produits', href: '#produits' },
    { text: 'Solutions', href: '#solutions' },
    { text: 'Catalogue', href: '#catalogue' },
    { text: 'Entreprise', href: '#entreprise' },
    { text: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logoImg} alt="Logo OzoneWell" className="logo-image" />
        </div>

        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="nav-link">
                {link.icon && <span className="nav-icon">{link.icon}</span>}
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? (
              <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
          </button>

          <div className="search-container">
            <button 
              className="search-button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
            {isSearchOpen && (
              <div className="search-dropdown">
                <input 
                  type="text" 
                  placeholder="Rechercher..." 
                  className="search-input"
                  autoFocus
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
