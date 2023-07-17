import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const RegistrationPage = () => {
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError('Please enter your name.');
      return;
    }

    if (!email) {
      setEmailError('Please enter your email.');
      return;
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!address) {
      setAddressError('Please enter your address.');
      return;
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      return;
    }

    // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    // if (!passwordRegex.test(password)) {
    //   setPasswordError(
    //     'Password must be at least 8 characters long'
    //   );
    //   return;
    // }
    // if(<8){
    //   setPasswordError('The password must contains atleast 8 character.');
    //   return;
    // }

    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password.');
      return;
    }

    // const cpasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    // if (!cpasswordRegex.test(confirmPassword)) {
    //   setConfirmPasswordError(
    //     'Password must be at least 8 characters long'
    //   );
    //   return;
    // }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      return;
    }

    console.log('Registration submitted:', name, email,address, password);
    
    navigate('/signin');
    alert("You successfully Registered");
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
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="form-input"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="show-password-button"
                onClick={handleToggleShowPassword}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {passwordError && <p className="error-message" style={{color:'red'}}>{passwordError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <div className="password-input-wrapper">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="form-input"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                className="show-password-button"
                onClick={handleToggleShowConfirmPassword}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
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

