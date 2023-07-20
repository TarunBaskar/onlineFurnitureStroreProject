import React, { useContext }   from 'react';
import ProductItem from './bedproitem';
import './bed.css';
import Navbar from './navbar';
import Footer from './footer';
import b1 from './photo//bed//b1.jpg';
import b2 from './photo//bed//b2.jpg';
import b3 from './photo//bed//b3.jpg';
import b4 from './photo//bed//b4.jpg';
import b5 from './photo//bed//b5.jpg';
import b6 from './photo//bed//b6.jpg';
import { SearchContext } from './searchContext';

const Bed = () => {
  const { searchQuery } = useContext(SearchContext);

  const products = [
    {
      id: 1,
      name: 'Roseberry Headboard',
      price: 2000000,
      imageUrl: b1,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'DOMKAPA Echo Bed',
      price: 490000,
      imageUrl: b2,
      rating: 3.8,
    },
    {
      id: 3,
      name: 'Suite Dreams Poster Bed',
      price: 9900000,
      imageUrl: b3,
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Milo Canopy Bed',
      price: 2900000,
      imageUrl: b4,
      rating: 4.5,
    },
    {
      id: 5,
      name: 'ReMix Wood Bed',
      price: 299900,
      imageUrl: b5,
      rating: 3.8,
    },
    {
      id: 6,
      name: 'Palmer Super King Bed',
      price: 999999,
      imageUrl: b6,
      rating: 4.2,
    },
    
  ];
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
