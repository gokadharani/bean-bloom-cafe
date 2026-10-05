import React, { useState } from 'react';
import { MapPinIcon, ClockIcon, PhoneIcon, MailIcon, DirectionIcon, CheckIcon } from './Icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include a short message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate submission without backend
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 700);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const googleMapsUrl = 'https://maps.google.com/?q=Jubilee+Hills,+Hyderabad,+Telangana+500033';

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-tag">
            <MapPinIcon size={16} />
            <span>Visit & Connect</span>
          </div>
          <h2 className="section-title">Visit Us in Jubilee Hills</h2>
          <p className="section-subtitle">
            Have a question, catering request, or looking to book a table for your group?
            We’d love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Cafe Information Card */}
          <div className="contact-info-panel">
            <div className="panel-inner">
              <span className="cafe-badge-pill">Fictional Demo Location</span>
              <h3 className="cafe-info-title">Bean & Bloom Cafe</h3>
              <p className="cafe-info-tagline">
                Your sanctuary for freshly roasted coffee, oven-baked warmth, and botanical calmness.
              </p>

              <div className="info-block-list">
                {/* Address */}
                <div className="info-block-item">
                  <div className="info-icon-box">
                    <MapPinIcon size={22} />
                  </div>
                  <div className="info-text">
                    <h4>Address</h4>
                    <p>12 Jubilee Hills Road</p>
                    <p>Hyderabad, Telangana 500033</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="info-block-item">
                  <div className="info-icon-box">
                    <ClockIcon size={22} />
                  </div>
                  <div className="info-text">
                    <h4>Opening Hours</h4>
                    <p><strong>Monday–Friday:</strong> 8:00 AM – 9:00 PM</p>
                    <p><strong>Saturday–Sunday:</strong> 9:00 AM – 10:00 PM</p>
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="info-block-item">
                  <div className="info-icon-box">
                    <PhoneIcon size={22} />
                  </div>
                  <div className="info-text">
                    <h4>Phone</h4>
                    <p>
                      <a href="tel:+919876543210" className="contact-link">
                        +91 98765 43210
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-block-item">
                  <div className="info-icon-box">
                    <MailIcon size={22} />
                  </div>
                  <div className="info-text">
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:hello@beanandbloomcafe.com" className="contact-link">
                        hello@beanandbloomcafe.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="directions-action">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full inline-flex"
                >
                  <DirectionIcon size={18} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact & Inquiry Form */}
          <div className="contact-form-panel">
            <div className="panel-inner">
              <h3 className="form-panel-title">Send Us a Message</h3>
              <p className="form-panel-desc">
                Drop us a note below and our team will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="form-success-banner" role="alert">
                  <div className="success-icon-wrapper">
                    <CheckIcon size={28} />
                  </div>
                  <h4 className="success-title">Thank You, {formData.name || 'Friend'}!</h4>
                  <p className="success-message">
                    Your message has been received with warmth. We’ll respond to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={handleReset}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="contact-form">
                  {/* Name field */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Full Name <span className="text-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className="error-message">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email & Phone Row */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="text-required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. ananya@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <span id="email-error" className="error-message">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="e.g. +91 98765 00000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type / Subject */}
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      What can we help you with?
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="General Inquiry">General Inquiry & Feedback</option>
                      <option value="Table Reservation">Table Reservation (4+ guests)</option>
                      <option value="Event / Workshop">Host an Event or Book Club</option>
                      <option value="Catering">Office Coffee & Bakery Catering</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message <span className="text-required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us what's on your mind..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <span id="message-error" className="error-message">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary w-full submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
