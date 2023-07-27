import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';
import axios from 'axios';

const RegistrationPage = () => {
  const [id,setId]=useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    setAddressError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError('');
  };

 const validateForm = () =>{
  if (!name) {
    setNameError('Please enter your name.');
    return false;
  }

  if (!email) {
    setEmailError('Please enter your email.');
    return false;
  }

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    setEmailError('Please enter a valid email address.');
    return false;
  }

  if (!address) {
    setAddressError('Please enter your address.');
    return false;
  }

  if (!password) {
    setPasswordError('Please enter your password.');
    return false;
  }



  if (!confirmPassword) {
    setConfirmPasswordError('Please confirm your password.');
    return false;
  }


  if (password !== confirmPassword) {
    setConfirmPasswordError('Passwords do not match.');
    return false;
  }
    return true;
 }
  

  async function handleSubmit  (e) {
    e.preventDefault();
    if(validateForm()){
      console.log(validateForm());

    console.log('Registration submitted:', name, email,address, password);
    try
  {
    
   await axios.post("http://localhost:8080/api/v1/auth/register",
  {
  
  name:name,
  address : address,
  email:email,
  password:password,
 

  });
   
     setId("");
    setName("");
    setAddress("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    
  
  
  }
catch(err)
  {
    alert("User Registation Failed");
  }
  
  navigate('/');
  alert("You successfully Registered");
    }
    
  };

  return (
    <>
    <div className='registration-page split'>
    <h1 id='title'>Indian Furniture </h1>
    </div>
    <div className="registration-page1 split">
      <div className="registration-card fog-border">
        <h2 style={{ textAlign: 'center' }}>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="form-input"
              placeholder="Enter your name"
            />
            {nameError && <p className="error-message" style={{color:'red'}}>{nameError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="form-input"
              placeholder="Enter your email"
            />
            {emailError && <p className="error-message" style={{color:'red'}}>{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={handleAddressChange}
              className="form-input"
              placeholder="Enter your address"
            />
            {addressError && <p className="error-message" style={{color:'red'}}>{addressError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="password-input-wrapper">
              <input
                
                type='password'
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="form-input"
                placeholder="Enter your password"
              />
              
            </div>
            {passwordError && <p className="error-message" style={{color:'red'}}>{passwordError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <div className="password-input-wrapper">
              <input
               
                id="confirmPassword"
                type='password'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="form-input"
                placeholder="Confirm your password"
              />
          
            </div>
            {confirmPasswordError && (
              <p className="error-message" style={{color:'red'}}>{confirmPasswordError}</p>
            )}
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
          <div className="signup-link">
            Already have an account? <Link to="/" style={{color:'white' }}>Log in</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default RegistrationPage;

