import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './cartContext';
import Navbar from './navbar';
import Footer from './footer';
import './delivery.css';

const Checkout = () => {
  const { cartItems, calculateTotalPrice } = useContext(CartContext);
const feedbackpage = () =>{
  alert("Your Order is Placed , Fill the feedBack Form");
}
  return (
    <>
      <Navbar />
      <center>
      <div className="checkout-container">
        <h2 className="checkout-title">Checkout</h2>
        <div className="checkout-items">
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.name} className="checkout-item-image" />
              <div className="checkout-item-details">
                <h3 className="checkout-item-name">{item.name}</h3>
                <p className="checkout-item-price"><span>&#8377;</span>{item.price}</p>
                <p className="checkout-item-quantity">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout-total">
          <p className="checkout-total-text">Total:</p>
          <p className="checkout-total-price"><span>&#8377;</span>{calculateTotalPrice()}</p>
        </div>
        <div className="payment-form">
          <h3>Payment Information</h3>
          <form>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input type="text" id="cardNumber" name="cardNumber" required />
            </div>
            <div className="form-group">
              <label htmlFor="expirationDate">Expiration Date:</label>
              <input type="text" id="expirationDate" name="expirationDate" required />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" name="cvv" required />
            </div>
          </form>
        </div>
        <Link to="/feedback">
        <button className="checkout-confirm" onClick={feedbackpage}>Confirm Order</button></Link>
        <p className="checkout-back">
          <Link to="/cart">Back to Cart</Link>
        </p>
      </div>
      </center>
      <Footer />
    </>
  );
};

export default Checkout;
