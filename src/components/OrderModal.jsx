import React, { useState } from 'react';
import { CloseIcon, BagIcon, CheckIcon, CoffeeIcon } from './Icons';

const OrderModal = ({ isOpen, onClose, cart, onUpdateQuantity, onClearCart }) => {
  const [orderStep, setOrderStep] = useState('review'); // 'review' | 'success'
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupTime, setPickupTime] = useState('15 mins');
  const [formError, setFormError] = useState('');
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setFormError('Please enter your name for order pickup.');
      return;
    }
    if (!customerPhone.trim() || customerPhone.trim().length < 10) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setFormError('');
    const generatedId = 'BB-' + Math.floor(1000 + Math.random() * 9000);
    setOrderId(generatedId);
    setOrderStep('success');
    if (onClearCart) onClearCart();
  };

  const handleClose = () => {
    setOrderStep('review');
    setFormError('');
    onClose();
  };

  return (
    <div className="order-modal-backdrop" onClick={handleClose} role="dialog" aria-modal="true">
      <div className="order-modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="order-modal-header">
          <div className="order-modal-title-box">
            <BagIcon size={20} className="order-modal-icon" />
            <h3 className="order-modal-title">
              {orderStep === 'success' ? 'Order Confirmed!' : 'Your Cafe Pickup Tray'}
            </h3>
          </div>
          <button
            type="button"
            className="order-modal-close"
            onClick={handleClose}
            aria-label="Close Order Tray"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <div className="order-modal-body">
          {orderStep === 'success' ? (
            <div className="order-success-view">
              <div className="order-success-icon-box">
                <CheckIcon size={36} />
              </div>
              <h4 className="success-order-num">Pickup Order #{orderId}</h4>
              <p className="success-order-greeting">
                Thank you, <strong>{customerName}</strong>! Your artisanal order is being handcrafted with love.
              </p>
              <div className="order-pickup-summary-card">
                <div className="pickup-line">
                  <span>Estimated Ready In:</span>
                  <strong>{pickupTime}</strong>
                </div>
                <div className="pickup-line">
                  <span>Pickup Location:</span>
                  <strong>12 Jubilee Hills Rd, Hyderabad</strong>
                </div>
                <div className="pickup-line">
                  <span>Contact:</span>
                  <strong>{customerPhone}</strong>
                </div>
              </div>
              <p className="order-demo-reminder">
                *This is an interactive demonstration for portfolio review.
              </p>
              <button
                type="button"
                className="btn btn-primary w-full"
                onClick={handleClose}
              >
                Done & Back to Menu
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="order-empty-state">
              <div className="empty-cart-icon">
                <CoffeeIcon size={44} />
              </div>
              <h4>Your pickup tray is empty</h4>
              <p>Explore our menu of specialty coffees, fresh croissants, and cakes to add items.</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClose}
              >
                Browse Menu Items
              </button>
            </div>
          ) : (
            <div>
              {/* Items List */}
              <div className="order-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="order-item-row">
                    <img src={item.image} alt={item.name} className="order-item-thumb" />
                    <div className="order-item-details">
                      <h4 className="order-item-name">{item.name}</h4>
                      <span className="order-item-cat">{item.category} • ₹{item.price} each</span>
                    </div>
                    <div className="order-qty-controller">
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        aria-label={`Decrease ${item.name}`}
                      >
                        -
                      </button>
                      <span className="qty-number">{item.quantity}</span>
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        aria-label={`Increase ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                    <span className="order-item-subtotal">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* Bill Summary */}
              <div className="order-bill-card">
                <div className="bill-row">
                  <span>Subtotal</span>
                  <span>₹{totalAmount}</span>
                </div>
                <div className="bill-row">
                  <span>Taxes (5% GST included)</span>
                  <span>₹{Math.round(totalAmount * 0.05)}</span>
                </div>
                <div className="bill-divider" />
                <div className="bill-row bill-total">
                  <span>Total Amount</span>
                  <span>₹{totalAmount}</span>
                </div>
              </div>

              {/* Pickup Information Form */}
              <form onSubmit={handlePlaceOrder} className="pickup-form">
                <h4 className="form-subheading">Quick Counter Pickup Details</h4>

                {formError && <div className="form-error-banner">{formError}</div>}

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="order-name">Your Name</label>
                    <input
                      id="order-name"
                      type="text"
                      placeholder="e.g. Neha Verma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="order-phone">Mobile Number</label>
                    <input
                      id="order-phone"
                      type="tel"
                      placeholder="10-digit number"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="order-time">Ready In</label>
                  <select
                    id="order-time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="form-select"
                  >
                    <option value="15 mins">15 minutes (Express)</option>
                    <option value="30 mins">30 minutes</option>
                    <option value="45 mins">45 minutes</option>
                    <option value="Custom time on arrival">Pay & collect on arrival</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-full btn-lg">
                  Confirm Pickup Order (₹{totalAmount})
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
