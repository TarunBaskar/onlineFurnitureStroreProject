import React, { useContext }  from 'react';
import ProductItem from './dinningproitem';
import './dinning.css';
import Navbar from './navbar';
import Footer from './footer'; 
import d1 from './photo//dinning//d1.jpg'
import d2 from './photo//dinning//d2.jpg'
import d4 from './photo//dinning//d4.jpg'
import d5 from './photo//dinning//img3.jpg'
import d6 from './photo//dinning//d6.jpg'
import d7 from './photo//dinning//img4.jpg'
import { SearchContext } from './searchContext';


const Dinning = () => {
  const { searchQuery } = useContext(SearchContext);
  
  const products1 = [
    {
      id: 1,
      name: 'Simple Dining Table Design ',
      price: 120000,
      imageUrl: d1 ,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Modern Round Table Dining ',
      price: 123000,
      imageUrl: d2 ,
      rating: 3.8,
    },
    {
      id: 3,
      name: 'Black and White Dining Table Setting',
      price: 55000,
      imageUrl: d4 ,
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Combine Dining Table with Metal Chairs',
      price: 76000,
      imageUrl: d5,
      rating: 4.5,
    },
    {
      id: 5,
      name: 'Solid Wooden Dining Table ',
      price: 755530,
      imageUrl: d6,
      rating: 3.8,
    },
    {
      id: 6,
      name: 'Low Rise Dining Table',
      price: 123454,
      imageUrl: d7,
      rating: 4.2,
    },
    
  ];
  const filteredProducts = products1.filter((product) =>
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

