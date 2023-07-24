
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './productManagement.css';
// import Footer from './footer';
import Navbar from './navbar';

const API_URL = 'http://localhost:8080/products';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
    rating: '',
    type: '',
  });

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/getproducts`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (selectedProduct) {
        await axios.put(
          `${API_URL}/updateproduct/${selectedProduct.id}`,
          newProduct
        );
      } else {
        await axios.post(`${API_URL}/addproducts`, newProduct);
      }

      fetchProducts();
      setNewProduct({
        name: '',
        price: '',
        image: '',
        rating: '',
        type: '',
      });
      setSelectedProduct(null);
    } catch (error) {
      console.error('Error adding/updating product:', error);
    }
  };

  const handleUpdateClick = (product) => {
    setSelectedProduct(product);
  };

  useEffect(() => {
    setNewProduct({
      name: selectedProduct ? selectedProduct.name : '',
      price: selectedProduct ? selectedProduct.price : '',
      image: selectedProduct ? selectedProduct.image : '',
      rating: selectedProduct ? selectedProduct.rating : '',
      type: selectedProduct ? selectedProduct.type : '',
    });
  }, [selectedProduct]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/deleteproduct/${id}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="title">Product Management</h1>
        <div className="row">
          <div className="column">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="input"
                  placeholder="Product Name"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="input"
                  placeholder="Price"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="input"
                  placeholder="Image URL"
                  name="image"
                  value={newProduct.image}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="input"
                  placeholder="Rating"
                  name="rating"
                  value={newProduct.rating}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="input"
                  placeholder="Type"
                  name="type"
                  value={newProduct.type}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="button">
                {selectedProduct ? 'Update Product' : 'Add Product'}
              </button>
            </form>
          </div>
          <div className="column">
            <ul className="product-list">
              {products.map((product) => (
                <li key={product.id} className="product-item">
                  <h5>{product.name}</h5>
                  <p>Price: <span>&#8377;</span>{product.price}</p>
                  <p>Rating: {product.rating}</p>
                  <p>Type: {product.type}</p>
                  <button
                    className="button"
                    onClick={() => handleUpdateClick(product)}
                  >
                    Update
                  </button>
                  <br />
                  <button
                    className="button"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ProductManagement;
