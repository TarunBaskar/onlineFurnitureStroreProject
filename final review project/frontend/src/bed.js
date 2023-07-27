import React, { useContext,useState,useEffect }   from 'react';
import ProductItem from './bedproitem';
import './bed.css';
import Navbar from './navbar';
import Footer from './footer';
import { SearchContext } from './searchContext';
import axios  from 'axios';

const Bed = () => {
  const { searchQuery } = useContext(SearchContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByType("bed"); 
  }, []);

  const fetchProductsByType = async (type) => {
    try {
      const response = await axios.get(`http://localhost:8080/products/getproducts/${type}`);
      // alert(response.data.Bed)
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
    <h2 style={{fontFamily:'font-serif italic',paddingTop:'100px'}}>Bed Product List</h2>
      <p style={{textAlign:'center',fontFamily:'font-serif italic'}}>"Sleep like royalty in the lap of luxury, where dreams are woven with the finest threads of comfort and elegance."</p>
    <div className='bed_productList'>
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

export default Bed;
