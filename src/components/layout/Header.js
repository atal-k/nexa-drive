
// ============================================
// 📁 src/components/layout/Header.js
// ============================================
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => setIsMenuOpen(false);


  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h2>NexaDrive</h2>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
          <Link to="/" className="nav__link" onClick={closeMenu}>Home</Link>
          <Link to="/vehicles" className="nav__link" onClick={closeMenu}>Our Vehicles</Link>
          <Link to="/about" className="nav__link" onClick={closeMenu}>About</Link>
          <Link to="/contact" className="nav__link" onClick={closeMenu}>Contact</Link>
        </nav>

        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
