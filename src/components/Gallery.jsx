import React, { useState } from 'react';
import { galleryItems } from '../data/galleryData';
import { SparklesIcon, CloseIcon } from './Icons';

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-tag">
            <SparklesIcon size={16} />
            <span>Visual Glimpses</span>
          </div>
          <h2 className="section-title">Life at Bean & Bloom</h2>
          <p className="section-subtitle">
            Take a stroll through our cozy corners, sunlit botanical spaces, 
            and handcrafted culinary delights.
          </p>
        </div>

        {/* Masonry / Adaptive Gallery Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-item-card gallery-item-${index + 1}`}
              onClick={() => setSelectedPhoto(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedPhoto(item)}
              aria-label={`View photo: ${item.title}`}
            >
              <div className="gallery-img-container">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="gallery-item-category">{item.category}</span>
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-desc">{item.description}</p>
                  <span className="gallery-zoom-hint">Click to enlarge</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="lightbox-backdrop"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Preview"
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close Lightbox"
            >
              <CloseIcon size={24} />
            </button>
            <div className="lightbox-image-box">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.alt}
                className="lightbox-img"
              />
            </div>
            <div className="lightbox-caption">
              <div className="lightbox-category-tag">{selectedPhoto.category}</div>
              <h3 className="lightbox-title">{selectedPhoto.title}</h3>
              <p className="lightbox-desc">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
