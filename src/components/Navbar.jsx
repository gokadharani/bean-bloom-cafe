import React, { useState, useEffect } from 'react';
import { CoffeeIcon, LeafIcon, MenuIcon, CloseIcon, BagIcon } from './Icons';

const Navbar = ({ onOpenOrderModal, cartCount = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for nav highlight
      const sections = ['home', 'about', 'menu', 'why-us', 'gallery', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}
      role="banner"
    >
      <div className="navbar-container">
        {/* Brand Logo */}
        <a
          href="#home"
          className="brand-logo"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Bean and Bloom Cafe Home"
        >
          <div className="brand-icon-wrapper">
            <CoffeeIcon className="brand-coffee-icon" size={22} />
            <LeafIcon className="brand-leaf-icon" size={16} />
          </div>
          <div className="brand-text-wrapper">
            <span className="brand-title">Bean & Bloom</span>
            <span className="brand-tagline">Artisan Cafe</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'nav-link-active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                  {activeSection === link.id && <span className="active-dot" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button & Cart Indicator */}
        <div className="navbar-actions">
          <button
            type="button"
            className="btn btn-order"
            onClick={onOpenOrderModal}
            aria-label="Open Order Modal"
          >
            <BagIcon size={18} />
            <span>Order Now</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'mobile-menu-visible' : ''}`}>
        <div className="mobile-nav-header">
          <div className="brand-text-wrapper">
            <span className="brand-title">Bean & Bloom</span>
            <span className="brand-tagline">Jubilee Hills, Hyderabad</span>
          </div>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <CloseIcon size={22} />
          </button>
        </div>

        <nav aria-label="Mobile Navigation">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.id ? 'mobile-link-active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu-footer">
          <button
            type="button"
            className="btn btn-order w-full"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenOrderModal();
            }}
          >
            <BagIcon size={18} />
            <span>Order Now</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <div className="mobile-cafe-hours">
            <p><strong>Open Daily:</strong> 8:00 AM – 10:00 PM</p>
            <p className="mobile-phone-text">Call: +91 98765 43210</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
