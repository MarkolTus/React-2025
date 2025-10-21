import React, { useState, useEffect } from 'react';

const ShopCartImage = () => {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(null); // New state for the image

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
      image: image ? URL.createObjectURL(image) : null, // If there's an image, create a URL for preview
    };
    setCart([...cart, newItem]);
    setItem('');
    setPrice('');
    setQuantity(1); // Reset input fields
    setImage(null); // Reset image state
  };

  // Handle removing an item from the cart
  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== id);
    setCart(updatedCart);
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Store the uploaded file in the state
    }
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
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="0.01"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
        
        {/* Image Upload Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {image && <p>Image selected: {image.name}</p>} {/* Show selected image file name */}

        <button type="submit">Add to Cart</button>
      </form>

      <h2>Cart Items</h2>
      <ul>
        {cart.map((cartItem) => (
          <li key={cartItem.id}>
            <span>
              {cartItem.name} - ${cartItem.price} x {cartItem.quantity}
            </span>
            {/* Display image if available */}
            {cartItem.image && <img src={cartItem.image} alt={cartItem.name} width="50" />}
            <button onClick={() => handleRemoveItem(cartItem.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default ShopCartImage;
