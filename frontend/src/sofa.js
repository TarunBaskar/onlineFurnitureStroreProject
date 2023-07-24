import React, { useContext,useEffect,useState }   from 'react';
import ProductItem from './sofaproitem';
import './sofa.css';
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios';

import { SearchContext } from './searchContext';

const Sofa = () => {
  const { searchQuery } = useContext(SearchContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByType("sofa"); 
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
    <div className='sofa_productList'>
      <h2 style={{fontFamily:'font-serif italic'}}>Sofa Product Items</h2>
      <p style={{textAlign:'center',fontFamily:'font-serif italic'}}>"Unwind in opulence on a sofa that embraces you with plush sophistication, where every moment becomes a lavish retreat."</p><br></br>
      
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

export default Sofa;
