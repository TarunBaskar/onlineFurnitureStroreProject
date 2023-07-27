import React from 'react';
import './aboutus.css';
import Navbar from './navbar';
import Footer from './footer';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <section className="about-us" style={{padding:"100px"}}>
      <div className="about-us-image">
        <img src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg" alt='about'/>
      </div>
      <div className="about-us-content">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-description">
          Welcome to our online furniture store, where we are passionate about providing you with exceptional furniture and an unparalleled shopping experience. With our secure payment options and dedicated customer support, we strive to make your furniture shopping journey smooth and enjoyable. Discover the perfect pieces for your space at INDIAN FURNITURE.
        </p>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default AboutUs;
