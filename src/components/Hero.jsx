import React from 'react';
import { CoffeeIcon, StarIcon, ArrowRightIcon, MapPinIcon } from './Icons';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background-glow" />
      <div className="hero-container">
        {/* Left Column: Text & CTA */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse" />
            <span className="badge-text">Artisan Coffee & Botanical Bakehouse</span>
          </div>

          <h1 className="hero-title">
            Good Coffee. <br />
            <span className="text-gradient">Fresh Moments.</span>
          </h1>

          <p className="hero-description">
            Bean & Bloom is a cozy neighborhood cafe serving freshly brewed
            single-origin coffee, handcrafted warm pastries, and delightful artisanal desserts.
            Crafted for slow mornings, productive afternoons, and heartfelt conversations.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => scrollTo('menu')}
            >
              <span>View Our Menu</span>
              <ArrowRightIcon size={18} />
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={() => scrollTo('contact')}
            >
              <MapPinIcon size={18} />
              <span>Visit Us</span>
            </button>
          </div>

          {/* Social Proof Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} size={15} className="star-filled" />
                ))}
              </div>
              <span className="stat-text"><strong>4.9 / 5</strong> rating (500+ reviews)</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-text">📍 <strong>Jubilee Hills</strong>, Hyderabad</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual with Layered Cards */}
        <div className="hero-visual-wrapper">
          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
              alt="Freshly brewed specialty coffee cup with latte art on a warm wooden cafe table"
              className="hero-main-image"
              loading="eager"
            />
            <div className="image-overlay-vignette" />
          </div>

          {/* Floating Feature Card 1 */}
          <div className="floating-card floating-card-top">
            <div className="floating-icon-box coffee-accent">
              <CoffeeIcon size={20} />
            </div>
            <div>
              <p className="floating-card-title">100% Single Origin</p>
              <p className="floating-card-subtitle">Freshly roasted beans</p>
            </div>
          </div>

          {/* Floating Feature Card 2 */}
          <div className="floating-card floating-card-bottom">
            <div className="floating-avatar-group">
              <span className="floating-badge-emoji">🥐</span>
            </div>
            <div>
              <p className="floating-card-title">Baked Fresh Daily</p>
              <p className="floating-card-subtitle">Warm buttery pastries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
