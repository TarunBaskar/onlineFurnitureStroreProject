import React, { useState } from 'react';
import axios from 'axios';
import './feedback.css';
import Navbar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

const CustomerSupportForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      description: description,
    };

    axios.post('http://localhost:8081/addsupport', formData)
      .then((response) => {
        console.log('Form submitted successfully:', response);
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <>
    <Navbar/>
    <div className="form-container" style={{paddingTop:'100px'}}>
      <h2>Customer Support Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className='f'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className='f'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            rows="4"
            className='f'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <Link to="/home">
        <button type="submit">Submit</button></Link>
      </form>
    </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <Footer/>
    </>
  );
};

export default CustomerSupportForm;
