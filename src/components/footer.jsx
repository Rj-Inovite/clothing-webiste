import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  // REPLACE THESE WITH YOUR ACTUAL LINKS
  const phoneNumber = "919838813780"; // Add your number here (without +)
  const whatsappMessage = "Hello! I would like to know more about Radhika collection.";
  const socialLinks = {
    facebook: "https://www.facebook.com/your-page-link",
    instagram: "https://www.instagram.com/your-page-link",
    email: "mailto:contact@radhika.com"
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Column 1: Brand Info */}
        <div className="footer-section brand">
          <h2 className="footer-logo">Radhika</h2>
          <p>
            Tradition woven with elegance. <br />
            Visit us to experience the finest ethnic wear.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/shop"> Shop</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact & Socials */}
        <div className="footer-section social">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            {/* WhatsApp Link */}
            <a 
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="icon whatsapp"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp />
            </a>

            {/* Instagram Link */}
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="icon instagram"
            >
              <FaInstagram />
            </a>

            {/* Facebook Link */}
            <a 
              href={socialLinks.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="icon facebook"
            >
              <FaFacebookF />
            </a>

            {/* Email Link */}
            <a 
              href={socialLinks.email}
              className="icon email"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="contact-number">Call us: 91 9838813780</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Radhika. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;