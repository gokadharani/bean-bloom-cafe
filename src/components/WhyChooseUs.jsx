import React from 'react';
import { CoffeeIcon, LeafIcon, HeartCareIcon, WifiLaptopIcon } from './Icons';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Freshly Brewed',
      icon: <CoffeeIcon size={28} />,
      badge: 'Peak Aromatics',
      description:
        'Every single cup is extracted fresh on-demand using micro-batch roasted beans to unlock deep nuanced flavor notes.'
    },
    {
      id: 2,
      title: 'Quality Ingredients',
      icon: <LeafIcon size={28} />,
      badge: 'Farm to Cup',
      description:
        'From single-estate Arabica coffee beans to organic dairy, pure Ceylon spices, and authentic Belgian chocolate.'
    },
    {
      id: 3,
      title: 'Made With Care',
      icon: <HeartCareIcon size={28} />,
      badge: 'Artisan Passion',
      description:
        'Our certified baristas and seasoned pastry bakers pour love and precision into every cup and golden crust.'
    },
    {
      id: 4,
      title: 'Work-Friendly Space',
      icon: <WifiLaptopIcon size={28} />,
      badge: 'Productivity Haven',
      description:
        'Equipped with blazing-fast 300 Mbps Wi-Fi, abundant charging outlets at every booth, ambient jazz, and lush indoor plants.'
    }
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="section-container">
        <div className="section-header text-center">
          <div className="section-tag">
            <HeartCareIcon size={16} />
            <span>The Bean & Bloom Standard</span>
          </div>
          <h2 className="section-title">Why Coffee Lovers Choose Us</h2>
          <p className="section-subtitle">
            We believe extraordinary cafe experiences happen when quality craft, 
            thoughtful hospitality, and soothing environments come together.
          </p>
        </div>

        <div className="why-us-grid">
          {features.map((feature) => (
            <div key={feature.id} className="why-us-card">
              <div className="why-us-icon-wrapper">
                {feature.icon}
              </div>
              <div className="why-us-badge">{feature.badge}</div>
              <h3 className="why-us-title">{feature.title}</h3>
              <p className="why-us-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
