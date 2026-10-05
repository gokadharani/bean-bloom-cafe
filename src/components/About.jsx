import React from 'react';
import { CoffeeIcon, LeafIcon, SparklesIcon, WifiLaptopIcon, ArrowRightIcon } from './Icons';

const About = () => {
  const highlights = [
    {
      icon: <CoffeeIcon size={22} className="about-icon" />,
      title: 'Freshly Brewed Coffee',
      desc: 'Ethically sourced beans roasted to bring out rich aromatics in every pour.'
    },
    {
      icon: <SparklesIcon size={22} className="about-icon" />,
      title: 'Fresh Pastries',
      desc: 'Artisanal croissants, sourdough treats, and rolls baked daily at dawn.'
    },
    {
      icon: <LeafIcon size={22} className="about-icon" />,
      title: 'Quality Ingredients',
      desc: 'Real farm dairy, organic vanilla, pure Ceylon cinnamon, and Belgian cacao.'
    },
    {
      icon: <WifiLaptopIcon size={22} className="about-icon" />,
      title: 'Relax, Work & Meet',
      desc: 'Ergonomic seating, fast Wi-Fi, abundant greenery, and warm, welcoming vibes.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-grid">
          {/* Visual Column */}
          <div className="about-visual-column">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80"
                alt="Cozy sunlit interior of Bean & Bloom Cafe with lush botanical plants and seating"
                className="about-primary-image"
                loading="lazy"
              />
              <div className="about-experience-badge">
                <span className="badge-big-number">100%</span>
                <span className="badge-small-text">Crafted With Passion & Heart</span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="about-text-column">
            <div className="section-tag">
              <LeafIcon size={16} />
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="section-title">
              A Cozy Neighborhood Sanctuary for Every Coffee Soul
            </h2>

            <p className="about-lead">
              Nestled in Jubilee Hills, <strong>Bean & Bloom Cafe</strong> was born out of a simple desire: 
              to create an inviting neighborhood haven where exceptional specialty coffee meets 
              freshly baked artisanal goods.
            </p>

            <p className="about-body">
              Whether you are stopping by for your dawn espresso, settling in with your laptop for an 
              inspiring afternoon work session, or catching up with cherished friends over warm cinnamon rolls, 
              we cultivate a comfortable, green-filled atmosphere where time slows down and genuine connections bloom.
            </p>

            {/* Feature Highlights Grid */}
            <div className="about-highlights-grid">
              {highlights.map((item, index) => (
                <div key={index} className="about-highlight-card">
                  <div className="highlight-icon-box">{item.icon}</div>
                  <div>
                    <h3 className="highlight-title">{item.title}</h3>
                    <p className="highlight-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-footer-action">
              <a href="#menu" className="btn btn-secondary inline-flex">
                <span>Explore What We Brew</span>
                <ArrowRightIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
