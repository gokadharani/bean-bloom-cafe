import React from 'react';
import {
  CoffeeIcon,
  LeafIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  ChevronUpIcon,
} from './Icons';

const currentYear = new Date().getFullYear();

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Artisan Menu', href: '#menu' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Guest Reviews', href: '#testimonials' },
    { name: 'Contact & Directions', href: '#contact' },
  ];

  return (
    <footer className="footer-section" role="contentinfo">
      <div className="section-container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-column">
            <div className="brand-logo footer-logo">
              <div className="brand-icon-wrapper">
                <CoffeeIcon className="brand-coffee-icon" size={22} />
                <LeafIcon className="brand-leaf-icon" size={16} />
              </div>
              <div className="brand-text-wrapper">
                <span className="brand-title">Bean & Bloom</span>
                <span className="brand-tagline">Artisan Cafe</span>
              </div>
            </div>

            <p className="footer-about-text">
              A cozy neighborhood sanctuary celebrating specialty single-origin coffee, 
              freshly baked buttery pastries, and warm botanical vibes in Jubilee Hills, Hyderabad.
            </p>

            <div className="footer-social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Follow Bean and Bloom Cafe on Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Like Bean and Bloom Cafe on Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Follow Bean and Bloom Cafe on Twitter"
              >
                <TwitterIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-links-column">
            <h4 className="footer-column-heading">Quick Links</h4>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours Column */}
          <div className="footer-hours-column">
            <h4 className="footer-column-heading">Opening Hours</h4>
            <div className="footer-hours-card">
              <div className="footer-hours-item">
                <div className="hours-label">
                  <ClockIcon size={16} />
                  <span>Monday – Friday</span>
                </div>
                <span className="hours-time">8:00 AM – 9:00 PM</span>
              </div>
              <div className="footer-hours-item">
                <div className="hours-label">
                  <ClockIcon size={16} />
                  <span>Saturday – Sunday</span>
                </div>
                <span className="hours-time">9:00 AM – 10:00 PM</span>
              </div>
            </div>
            <p className="footer-kitchen-note">
              *Espresso bar closes 30 minutes prior to closing time.
            </p>
          </div>

          {/* Location & Contact Summary */}
          <div className="footer-contact-column">
            <h4 className="footer-column-heading">Find Us</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPinIcon size={18} className="footer-contact-icon" />
                <span>12 Jubilee Hills Road, Hyderabad, Telangana 500033</span>
              </div>
              <div className="footer-contact-item">
                <PhoneIcon size={18} className="footer-contact-icon" />
                <a href="tel:+919876543210" className="footer-link-text">+91 98765 43210</a>
              </div>
              <div className="footer-contact-item">
                <MailIcon size={18} className="footer-contact-icon" />
                <a href="mailto:hello@beanandbloomcafe.com" className="footer-link-text">hello@beanandbloomcafe.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {currentYear} Bean & Bloom Cafe. All rights reserved. 
            <span className="demo-disclaimer"> Built for demonstration purposes.</span>
          </p>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ChevronUpIcon size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
