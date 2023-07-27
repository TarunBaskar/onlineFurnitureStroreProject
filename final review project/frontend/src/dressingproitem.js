import React, { useContext }   from 'react';
import Rating from './rating';
import { CartContext } from './cartContext';

// import { useNavigate } from 'react-router-dom';
const DressingproductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    alert("Product is added to cart!");
    addToCart(product);
  };
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p><span>&#8377;</span>{product.price}</p>
      <Rating rating={product.rating} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default DressingproductItem;
