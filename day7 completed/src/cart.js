// import React, { useContext } from 'react';
// import './cart.css';
// import Navbar from './navbar';
// import Footer from './footer';
// import { Link } from 'react-router-dom';
// import { CartContext } from './cartContext';

// const Cart = () => {
//   const { cartItems, removeFromCart, calculateTotalPrice } = useContext(CartContext);

//   return (
//     <>
//       <Navbar />
//       <div className="cart-container">
//         <h2 className="cart-title">Shopping Cart</h2>
//         {cartItems.length === 0 ? (
//           <p className="cart-empty">Your cart is empty.</p>
//         ) : (
//           <>
//             <div className="cart-items">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="cart-item">
//                   <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
//                   <div className="cart-item-details">
//                     <h3 className="cart-item-name">{item.name}</h3>
//                     <p className="cart-item-price"><span>&#8377;</span>{item.price}</p>
//                     <button className="cart-item-remove" onClick={() => removeFromCart(item)}>
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="cart-total">
//               <p className="cart-total-text">Total:</p>
//               <p className="cart-total-price"><span>&#8377;</span>{calculateTotalPrice()}</p>
//             </div>
//             <button className="cart-checkout">Checkout</button>
//           </>
//         )}
//       </div>
//       <center>
//         <div className="haveAccount">
//           <h4>Have an Account?</h4>
//           <p>
//             Make Registration.. <Link to="/register" id="signupcart">Signup</Link>
//           </p>
//         </div>
//       </center>
//       <br></br>
//       <Footer />
//     </>
//   );
// };

// export default Cart;

import React, { useContext } from 'react';
import './cart.css';
import Navbar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { CartContext } from './cartContext';

const Cart = () => {
  const { cartItems, removeFromCart, calculateTotalPrice, incrementItem, decrementItem } = useContext(CartContext);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2 className="cart-title">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price"><span>&#8377;</span>{item.price}</p>
                    <div className="cart-item-quantity">
                      <button className="cart-item-decrement" onClick={() => decrementItem(item)}>
                        -
                      </button>
                      <span className="cart-item-count">{item.quantity}</span>
                      <button className="cart-item-increment" onClick={() => incrementItem(item)}>
                        +
                      </button>
                    </div>
                    <br></br>
                    <button className="cart-item-remove" onClick={() => removeFromCart(item)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <p className="cart-total-text">Total:</p>
              <p className="cart-total-price"><span>&#8377;</span>{calculateTotalPrice()}</p>
            </div>
            <button className="cart-checkout">Checkout</button>
          </>
        )}
      </div>
      <center>
        <div className="haveAccount">
          <h4>Have an Account?</h4>
          <p>
            Make Registration.. <Link to="/register" id="signupcart">Signup</Link>
          </p>
        </div>
      </center>
      <br></br>
      <Footer />
    </>
  );
};

export default Cart;
