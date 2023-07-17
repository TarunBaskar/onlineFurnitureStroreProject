import React, { useContext }   from 'react';
import ProductItem from './dressingproitem';
import './dressing.css';
import Navbar from './navbar';
import Footer from './footer';
import dr1 from './photo//dressing//dr1.jpg'
import dr2 from './photo//dressing//dr2.jpg'
import dr3 from './photo//dressing//dr3.jpg'
import dr4 from './photo//dressing//dr4.jpg'
import dr5 from './photo//dressing//dr5.jpg'
import dr6 from './photo//dressing//dr6.jpg'
import { SearchContext } from './searchContext';


const ProductList = () => {
  const { searchQuery } = useContext(SearchContext);

  const products = [
    {
      id: 1,
      name: 'PORADA Maskara Dressing Table Set',
      price: 99999,
      imageUrl: dr1,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Walton Mirrored Glass Dressing Table',
      price: 120000,
      imageUrl: dr2,
      rating: 3.8,
    },
    {    
      id: 3,
      name: 'Archivolto Dressing Table',
      price: 50000,
      imageUrl: dr3,
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Calliope Dressing Table & Mirror',
      price: 300000,
      imageUrl: dr4,
      rating: 4.5,
    },
    {
      id: 5,
      name: 'Victor Dressing Table with Mirror',
      price: 1000090,
      imageUrl: dr5,
      rating: 3.8,
    },
    {
      id: 6,
      name: 'Rhapsody Dressing Table',
      price: 120000,
      imageUrl: dr6,
      rating: 4.2,
    },
    
  ];
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
