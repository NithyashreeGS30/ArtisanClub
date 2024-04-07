import React, { useState } from 'react';
import './BodyPage.css';
import Header from './header/header';
import CheckoutPage from './checkoutpage/checkoutpage'; 

const BodyPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // State to track whether the cart is open

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
  
    if (existingItemIndex !== -1) {
      const updatedCartItems = cartItems.map((item, index) => {
        if (index === existingItemIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
  
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState); // Toggle the state variable
  };

  const products = [
    { id: 1, name: 'Product 1', price: '$10', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$20', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$30', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: '$40', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: '$50', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', price: '$60', imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Product 7', price: '$70', imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Product 8', price: '$80', imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Product 9', price: '$90', imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Product 10', price: '$100', imageUrl: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Product 10', price: '$100', imageUrl: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Product 10', price: '$100', imageUrl: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
      <Header headName="SignOut" cartCount={cartItems.length} toggleCart={toggleCart} /> {/* Pass toggleCart function */}
      <div className="body-page">
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="product-price">{product.price}</div>
                <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Conditionally render CheckoutPage based on isCartOpen */}
      {isCartOpen && <CheckoutPage cartItems={cartItems} />}
    </div>
  );
};

export default BodyPage;
