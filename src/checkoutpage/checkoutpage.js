import React from 'react';
import './checkout.css';

const CheckoutPage = ({ cartItems }) => {
  if (!cartItems || cartItems.length === 0) {
    return <div className="checkout-page empty-cart">No items in cart</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(cartItems); // Cart items information
  };

  return (
    <div className="checkout-page">
      <h2 className="checkout-title">Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img className="item-image" src={item.imageUrl} alt={item.name} />
              <div className="item-details">
                <div className="item-name">{item.name}</div>
                <div className="item-price">{item.price}</div>
                <div className="item-quantity">Quantity: {item.quantity}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="shipping-details">
          <h3 className="shipping-title">Shipping Information</h3>
          <div className="shipping-inputs">
            <input type="text" name="fullName" placeholder="Full Name" required className="shipping-input" />
            <input type="text" name="addressLine1" placeholder="Address Line 1" required className="shipping-input" />
            <input type="text" name="addressLine2" placeholder="Address Line 2" className="shipping-input" />
            <div className="city-state-zip">
              <input type="text" name="city" placeholder="City" required className="shipping-input small-input" />
              <input type="text" name="state" placeholder="State" required className="shipping-input small-input" />
              <input type="text" name="zip" placeholder="ZIP/Postal Code" required className="shipping-input small-input" />
            </div>
            <input type="text" name="country" placeholder="Country" required className="shipping-input" />
            <input type="tel" name="phoneNumber" placeholder="Phone Number" required className="shipping-input" />
          </div>
        </div>
        <button type="submit" className="place-order-btn">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
