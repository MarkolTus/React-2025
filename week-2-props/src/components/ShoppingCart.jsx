import React, { useState, useEffect } from 'react';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Load the cart from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Save the cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Handle adding an item to the cart
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!item || !price || quantity <= 0) return; // Validation

    const newItem = {
      id: Date.now(), // Simple unique ID using current timestamp
      name: item,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };
    setCart([...cart, newItem]);
    setItem('');
    setPrice('');
    setQuantity(1); // Reset input fields
  };

  // Handle removing an item from the cart
  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== id);
    setCart(updatedCart);
  };

  // Calculate the total price of all items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, currentItem) => {
      return total + currentItem.price * currentItem.quantity;
    }, 0).toFixed(2); // Return total price as string with 2 decimals
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="Item Name"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          type="test"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
        <button type="submit">Add to Cart</button>
      </form>

      <h2>Cart Items</h2>
      <ul>
        {cart.map((cartItem) => (
          <li key={cartItem.id}>
            <span>
              {cartItem.name} - ${cartItem.price} x {cartItem.quantity}
            </span>
            <button onClick={() => handleRemoveItem(cartItem.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default ShoppingCart;