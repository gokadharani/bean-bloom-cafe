import React, { useState } from 'react';
import { menuCategories, menuItems } from '../data/menuData';
import { CoffeeIcon, SparklesIcon, BagIcon, CheckIcon } from './Icons';

const Menu = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [addedItemIds, setAddedItemIds] = useState({});

  // Real React state filtering
  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const handleAddItem = (item) => {
    if (onAddToCart) {
      onAddToCart(item);
    }
    // Show quick visual feedback
    setAddedItemIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="menu-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-tag">
            <CoffeeIcon size={16} />
            <span>Handcrafted Flavors</span>
          </div>
          <h2 className="section-title">Our Artisanal Menu</h2>
          <p className="section-subtitle">
            Every cup brewed with precision, every pastry baked fresh each morning.
            Select a category to explore our offerings.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="menu-category-tabs" role="tablist" aria-label="Menu Categories">
          {menuCategories.map((category) => {
            const count = category === 'All' 
              ? menuItems.length 
              : menuItems.filter(i => i.category === category).length;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`category-tab-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                <span>{category}</span>
                <span className="category-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="menu-grid">
          {filteredItems.map((item) => {
            const isJustAdded = addedItemIds[item.id];

            return (
              <article key={item.id} className="menu-card">
                <div className="menu-card-image-box">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-card-img"
                    loading="lazy"
                  />
                  <div className="menu-card-category-badge">
                    {item.category}
                  </div>
                  {item.popular && (
                    <div className="menu-card-popular-badge">
                      <SparklesIcon size={12} />
                      <span>Popular</span>
                    </div>
                  )}
                </div>

                <div className="menu-card-body">
                  <div className="menu-card-header">
                    <h3 className="menu-card-title">{item.name}</h3>
                    <span className="menu-card-price">₹{item.price}</span>
                  </div>

                  <p className="menu-card-desc">{item.description}</p>

                  <div className="menu-card-footer">
                    <div className="menu-card-tags">
                      {item.tags?.map((tag, idx) => (
                        <span key={idx} className="menu-tag-pill">{tag}</span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className={`btn-add-order ${isJustAdded ? 'btn-added' : ''}`}
                      onClick={() => handleAddItem(item)}
                      aria-label={`Add ${item.name} to order`}
                    >
                      {isJustAdded ? (
                        <>
                          <CheckIcon size={16} />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <BagIcon size={16} />
                          <span>Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Live Filter Summary Note */}
        <div className="menu-footer-note">
          <p>
            Showing <strong>{filteredItems.length}</strong> items in <em>{activeCategory}</em> category.
            All prices are inclusive of taxes. Fresh dairy and plant-based milks available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
