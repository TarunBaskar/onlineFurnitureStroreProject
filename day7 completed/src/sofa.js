import React, { useContext }   from 'react';
import ProductItem from './sofaproitem';
import './sofa.css';
import Navbar from './navbar';
import Footer from './footer';
import s1 from './photo//sofa//s1.jpg'
import s2 from './photo//sofa//s2c.jpg'
import s3 from './photo//sofa//s3.jpg'
import s4 from './photo//sofa//s4.jpg'
import s5 from './photo//sofa//s5.jpg'
import s6 from './photo//sofa//s6.jpg'
import { SearchContext } from './searchContext';

const Sofa = () => {
  const { searchQuery } = useContext(SearchContext);

  const products = [
    {
      id: 1,
      name: 'London Chaise Sofa',
      price: 100000,
      imageUrl: s1,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Milton Zi Sofa',
      price: 203945,
      imageUrl: s2,
      rating: 3.8,
    },
    {
      id: 3,
      name: 'Polter Sofa, Boucle Sand',
      price: 120003,
      imageUrl: s3,
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Cesare Lounge Sofa',
      price: 234000,
      imageUrl: s4,
      rating: 4.5,
    },
    {
      id: 5,
      name: 'Montado Lounge Sofa, Natural',
      price: 590000,
      imageUrl: s5,
      rating: 3.8,
    },
    {
      id: 6,
      name: 'Firenze Lounge Sofa',
      price: 1200000,
      imageUrl: s6,
      rating: 4.2,
    },
    
  ];
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
