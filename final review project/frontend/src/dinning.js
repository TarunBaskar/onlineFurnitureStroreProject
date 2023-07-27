import React, { useContext,useState,useEffect }  from 'react';
import ProductItem from './dinningproitem';
import './dinning.css';
import Navbar from './navbar';
import Footer from './footer'; 
import axios from 'axios';

import { SearchContext } from './searchContext';


const Dinning = () => {
  const { searchQuery } = useContext(SearchContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByType("dinning"); 
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
    <div className='dinning_productList'>
      <h2 style={{fontFamily:'font-serif italic'}}>Dinning Set Product List</h2>
      <p style={{textAlign:'center',fontFamily:'font-serif italic'}}>"Gather around a dining table that radiates grandeur, where culinary delights are savored amidst an ambiance of refined extravagance."</p>
      
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
export default Dinning;

