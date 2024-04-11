import React, { useState } from 'react';
import './BodyPage.css';
import Header from './header/header';
import CheckoutPage from './checkoutpage/checkoutpage';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

const BodyPage1 = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([
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
  ]);
  const [isAddProductFormOpen, setIsAddProductFormOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', imageUrl: '' });
  const [editableProductId, setEditableProductId] = useState(null); // State to track which product is being edited
  const [editedProduct, setEditedProduct] = useState({ name: '', price: '', imageUrl: '' });

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

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const updateCartItem = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState);
  };

  const addProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setIsAddProductFormOpen(false);
    setNewProduct({ Art_ID:' ',name: '', price: '', imageUrl: '' });
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleEditProduct = (productId) => {
    setEditableProductId(productId);
    const productToEdit = products.find(product => product.id === productId);
    setEditedProduct({ ...productToEdit });
  };

  const submitEditedProduct = () => {
    const updatedProducts = products.map(product => {
      if (product.id === editableProductId) {
        return { ...editedProduct };
      }
      return product;
    });
    setProducts(updatedProducts);
    setEditableProductId(null); // Reset editableProductId after updating the product
  };

  return (
    <div>
      <Header headName="SignOut" cartCount={cartItems.length} toggleCart={toggleCart} />
      <div className="body-page">
        <div className="product-grid">
          {/* Plus icon to toggle add product form */}
          <div onClick={() => setIsAddProductFormOpen(true)}>
            <AddIcon />
            <span>Add Product</span>
          </div>

          {/* Add product form */}
          {isAddProductFormOpen && (
            <div className="add-product-modal">
              <div className="add-product-modal-content">
                <span className="add-product-modal-close" onClick={() => setIsAddProductFormOpen(false)}>&times;</span>
                <h2>Add Product</h2>
                <form onSubmit={addProduct}>
                <input type="text" value={newProduct.Art_ID} onChange={(e) => setNewProduct({ ...newProduct, Art_ID: e.target.value })} placeholder="Artist ID" required />
                  <input type="text" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} placeholder="Product Name" required />
                  <input type="text" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} placeholder="Price" required />
                  <input type="text" value={newProduct.imageUrl} onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })} placeholder="Image URL" required />
                  <button type="submit">Add Product</button>
                </form>
              </div>
            </div>
          )}

          {/* Display existing products */}
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-info">
                {/* Editable fields */}
                {editableProductId === product.id ? (
                  <div>
                    <input type="text" value={editedProduct.name} onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })} />
                    <input type="text" value={editedProduct.price} onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })} />
                    <input type="text" value={editedProduct.imageUrl} onChange={(e) => setEditedProduct({ ...editedProduct, imageUrl: e.target.value })} />
                    <button onClick={submitEditedProduct}>Submit</button>
                  </div>
                ) : (
                  <div>
                    <div className="product-name">{product.name}</div>
                    <div className="product-price">{product.price}</div>
                  </div>
                )}
                <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                  <AddIcon /> Add to Cart
                </button>
                {/* Admin functionalities */}
                <DeleteIcon onClick={() => deleteProduct(product.id)} />
                <EditIcon onClick={() => handleEditProduct(product.id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Conditionally render CheckoutPage based on isCartOpen */}
      {isCartOpen && (
        <CheckoutPage
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateCartItem={updateCartItem}
        />
      )}
    </div>
  );
};

export default BodyPage1;
