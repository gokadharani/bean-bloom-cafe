import React from 'react';
import { testimonials } from '../data/testimonialsData';
import { StarIcon, SparklesIcon } from './Icons';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-tag">
            <SparklesIcon size={16} />
            <span>Community Love</span>
          </div>
          <h2 className="section-title">What Our Guests Say</h2>
          <p className="section-subtitle">
            From daily coffee rituals to remote workday sanctuary, here is what 
            our vibrant community has to share.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="testimonial-rating-row">
                <div className="star-rating-box">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <StarIcon key={idx} size={18} className="star-filled" />
                  ))}
                </div>
                <span className="testimonial-tag">{item.tag}</span>
              </div>

              <blockquote className="testimonial-quote">
                “{item.review}”
              </blockquote>

              <div className="testimonial-user-row">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="testimonial-avatar"
                  loading="lazy"
                />
                <div className="testimonial-user-info">
                  <h3 className="testimonial-user-name">{item.name}</h3>
                  <p className="testimonial-user-role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cafe Community Banner */}
        <div className="community-banner">
          <div className="community-banner-content">
            <h3 className="community-banner-title">Join Our Coffee Club</h3>
            <p className="community-banner-desc">
              Enjoy 10% off your first online pickup order and receive invites to weekend coffee tastings.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Join the Table
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
