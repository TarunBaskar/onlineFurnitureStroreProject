import React from 'react';
import Rating from './rating';

const SofaproductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p><span>&#8377;</span>{product.price}</p>
      <Rating rating={product.rating} />
      <button>Add to Cart</button>
    </div>
  );
};

export default SofaproductItem;
