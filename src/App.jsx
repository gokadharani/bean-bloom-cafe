import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import { BagIcon } from './components/Icons';

function App() {
  const [cart, setCart] = useState([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // Cart Handlers
  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app-wrapper">
      {/* Navbar with sticky header & order tray counter */}
      <Navbar
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Menu onAddToCart={handleAddToCart} />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Order Tray Quick Button (appears when items in cart) */}
      {totalCartCount > 0 && (
        <button
          type="button"
          className="floating-cart-fab"
          onClick={() => setIsOrderModalOpen(true)}
          aria-label="View Order Tray"
        >
          <div className="fab-inner">
            <BagIcon size={22} />
            <span className="fab-count">{totalCartCount}</span>
            <span className="fab-label">View Order Tray</span>
          </div>
        </button>
      )}

      {/* Interactive Order / Pickup Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

export default App;
