import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ cartCount = 0, toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      {/* LEFT: LOGO */}
      <div className="nav-left">
        <Link to="/" className="nav-logo-link" onClick={closeMenu}>
          <h1 className="nav-logo">RADHIKA</h1>
        </Link>
      </div>

      {/* MIDDLE: NAVIGATION LINKS */}
      <ul className="nav-middle">
        <li className="nav-link">
          <Link to="/about">About us</Link>
          <div className="link-underline"></div>
        </li>
        <li className="nav-link">
          <Link to="/shop">Shop</Link>
          <div className="link-underline"></div>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
          <div className="link-underline"></div>
        </li>
      </ul>

      {/* RIGHT: ICONS (CART + HAMBURGER) */}
      <div className="nav-right">
        {/* Cart Icon */}
        <div className="icon-wrapper" onClick={toggleCart} style={{ cursor: 'pointer' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-shopping-bag"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>

          {/* Badge shows only if items exist */}
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li>
              <Link
                to="/about"
                className={isActive('/about') ? 'active' : ''}
                onClick={closeMenu}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className={isActive('/shop') ? 'active' : ''}
                onClick={closeMenu}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={isActive('/contact') ? 'active' : ''}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;