
  import React from 'react'
  import Navbar from './navbar';
  import Footer from './footer';
  import bedhome from './photo//bedhomepage'
  import dinninghome from './photo//dinning set'
  import sofahome from './photo//sofahome'
  import dressinghome from './photo//dressinghome'
  import img1 from './photo//img1.png';
  import bs1 from'./photo//bed image1.jpg';
  import bs2 from'./photo//sofa image1.jpg';
  import bs3 from'./photo//dinning image1.jpg';
  import bs4 from'./photo//dressingtable image1.jpg';
  import SimpleImageSlider from './simpleImageSlider';
  import './homepage.css'
  import Rating from './rating';
  import { Link } from 'react-router-dom';
  import { FaPhone } from 'react-icons/fa';
  import { useSelector } from 'react-redux'
import { selectUser } from './redux/userSlice.js'
 

  
  function HomePage() {
    const user=useSelector(selectUser)
      return (  
          <header>
             <Navbar/>
             <div className='header2'>
              <h1 id='header2_h1'>Welcome {user.username} to Indian Furniture</h1>
              <p id='header2_p'> We offer ready-to-order furnitures plus many option for customer</p>
             </div>
             {/* <h1 style={{padding:'100px'}}>Home page</h1> */}
             <center>
             <div className='image-slider' style={{paddingTop:'50px',backgroundColor:'#fffcfc'}}>
             < SimpleImageSlider />
             </div><br/>
             </center>
             
                  <h2>Our Best Seller</h2>
                 <center>
              <div className='best_seller'>
                  <div className='bs1 img'>
                      <img src={bs1} id='bs1_img1'alt='bed' />
                      <Rating rating={4.5}/>
                      <p>"A bed is a magic carpet that takes you to dreamland."</p>
                      <p id='rupee'><span>&#8377;</span>60000</p>
                  </div>
                  <div className='bs2 img'>
                      <img src={bs2} id='bs2_img2' alt='sofa'/>
                      <Rating rating={5}/>
                      <p>"A dining table is a place to gather with loved ones and celebrate life."</p>
                      <p id='rupee'><span>&#8377;</span>30000</p>
                  </div>
                  <div className='bs3 img'>
                      <img src={bs3} id='bs3_img3' alt='dinning' />
                      <Rating rating={4}/>
                      <p>"The sofa is a place to dream big dreams."</p>
                      <p id='rupee'><span>&#8377;</span>25000</p>
                  </div>
                  <div className='bs4 img'>
                      <img src={bs4} id='bs4_img4' alt='dressingtable'/>
                      <Rating rating={4}/>
                      <p>"A good dressing table is a place to feel confident and beautiful."</p>
                      <p id='rupee'><span>&#8377;</span>35000</p>
                  </div>
              </div>
              </center> 
              <section className="features">
        <h2 className="features_title">Our Services</h2>
        <div className="features_list">
          <div className="feature">
            <i className="fas fa-shipping-fast feature_icon"></i>
            <h3 className="feature_title">Fast Shipping</h3>
            <p className="feature_description">We offer quick and reliable shipping options for all orders.</p>
          </div>
          <div className="feature">
            <i className="fas fa-couch feature_icon"></i>
            <h3 className="feature_title">Wide Selection</h3>
            <p className="feature_description">Discover a wide range of furniture options to suit your style and preferences.</p>
          </div>
          <div className="feature">
            <i className="fas fa-dollar-sign feature_icon"></i>
            <h3 className="feature_title">Affordable Prices</h3>
            <p className="feature_description">Get quality furniture at competitive and affordable prices.</p>
          </div>
          <div className="feature">
            <i className="fas fa-comments feature_icon"></i>
            <h3 className="feature_title">Customer Support</h3>
            <p className="feature_description">Our dedicated support team is available to assist you with any inquiries or concerns.</p>
          </div>
        </div>
      </section>
      <section className='allProducts'>
        <h2 className='features_title'>All Products</h2>
        <div className='allproduct_list'>
            <div className='allp' >
            
              <Link to='/home/bed'><img src={bedhome} width='300px'style={{borderRadius:'70px'}} alt='bedimg'/></Link>
              <Rating rating={4.3}/>
                  <h3>Conshohocken Upholstered Bed</h3>
                  <h4><span>&#8377;</span>70,000</h4>
            </div>
            <div className='allp' >
            <Link to='/home/dinning_set'><img src={dinninghome} width='300px' style={{borderRadius:'70px'}} alt='dinningimg'/></Link>
            <Rating rating={4.9}/>
            <h3>Modern Simple Rectangular White Horse Belly Dining Table Sets</h3>
                  <h4><span>&#8377;</span>15,50,000</h4>
            </div>
            <div className='allp'>
            <Link to='/home/sofa'><img src={sofahome} width='300px' style={{borderRadius:'70px'}} alt='sofaimg'/></Link>
            <Rating rating={4.6}/>
            <h3>Garzon 69.68" Faux Leather Square Arm Sofa</h3>
                  <h4><span>&#8377;</span>90,000</h4>
            </div>
            <div className='allp' >
            <Link to='/home/dressing'><img src={dressinghome} width='300px' style={{borderRadius:'70px'}} alt='dressingimg'/></Link>
            <Rating rating={5}/>
            <h3>39.37'' Console Table</h3>
                  <h4><span>&#8377;</span>50,000</h4>
            </div>
        </div><br/><br/>
        <div className='row'>
             <div className='column'> 
             <section className="about-us">
              <h2 className="about-us_title">About Us</h2>
              <p className="about-us_description">
                  Welcome to our online furniture store, where we are passionate about providing you with exceptional furniture and an unparalleled shopping experience. We curate a diverse collection of high-quality furniture pieces, carefully selected to suit your style and budget. With our user-friendly website, secure payment options, and dedicated customer support, we strive to make your furniture shopping journey smooth and enjoyable. Discover the perfect pieces for your space at INDIAN FURNITURE.
              </p>
             
              </section>
              </div>
              <div className='column' >
                      <img src={img1} width='700px' height='310px' alt='img1' id='img1' />
              </div>
              </div><br></br>
      </section>
      <section className="contact-us">
        <h2 className="contact-us_title"><FaPhone className='rotate' />Contact Us</h2>
        <div className="contact-us_content">
          <div className="contact-us_info">
            <h3>Our Address</h3>
            <p>76,TRK street, New Delhi, India</p>
          </div>
          <div className="contact-us_info">
            <h3>Email</h3>
            <p>indianfurniture123@gmail.com</p>
          </div>
          <div className="contact-us_info">
            <h3>Phone</h3>
            <p>+192374831</p>
          </div>
        </div>
      </section>
             <Footer/>
          </header>
      );
  }
  
  export default HomePage;