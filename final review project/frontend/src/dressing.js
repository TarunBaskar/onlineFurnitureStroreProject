import React, { useContext,useState,useEffect }   from 'react';
import ProductItem from './dressingproitem';
import './dressing.css';
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios';

import { SearchContext } from './searchContext';


const ProductList = () => {
  const { searchQuery } = useContext(SearchContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByType("dressing"); 
  }, []);

  const fetchProductsByType = async (type) => {
    try {
      const response = await axios.get(`http://localhost:8080/products/getproducts/${type}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
    <Navbar/>
    <div className='dressing_productList'>
      <h2 style={{fontFamily:'font-serif italic'}}>Dressing Table Product List</h2>
      <p style={{textAlign:'center',fontFamily:'font-serif italic'}}>"Indulge in the exquisite allure of a dressing table that whispers elegance, reflecting your beauty as you prepare to conquer the world."</p>
      
      <br></br>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductList;
