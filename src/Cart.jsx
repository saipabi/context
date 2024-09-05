import { useContext } from 'react';
import { CartContext } from './CartContext';
import './styles.css';

const Cart = () => {
  const { cart, updateQuantity, totalAmount, totalQuantity } = useContext(CartContext);

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="container">
      <h1>Your Cart</h1>
      <div className="cart-list">
        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>{item.title}</div>
            <div>Price: ${item.price}</div>
            <div className="quantity-controls">
              <button onClick={() => handleDecrease(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrease(item)}>+</button>
            </div>
            <div>Total: ${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total Quantity: {totalQuantity}</h3>
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
