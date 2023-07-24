import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from './redux/userSlice.js';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userError, setUserError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUserError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const validateForm = () => {
    if (!username) {
      setUserError('Please enter your name');
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

    if (!password) {
      setPasswordError('Please enter your password.');
      return false;
    } else if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login submitted:', username, email, password);
      try {
        await axios.post('http://localhost:8080/login/save', {
          userName: username,
          email: email,
          mPassword: password,
        });

        setId('');
        setUsername('');
        setEmail('');
        setPassword('');

        console.log('Login submitted:', email, password);
        console.log('Remember Me:', rememberMe);

        navigate('/home');
        alert('You successfully Login');
        dispatch(login({ username, email }));
      } catch (err) {
        alert('User Login Failed');
      }
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password:', email);
  };

  return (
    <>
      <div className='login-page split'>
        <h1 id='title'>Indian Furniture </h1>
      </div>
      <div className='login-page1 split'>
        <div className='login-card fog-border'>
          <h2 className='login-heading'>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='username'>Username:</label>
              <input
                type='text'
                id='username'
                value={username}
                onChange={handleUsernameChange}
                className='form-input'
                placeholder='Enter your username'
              />
              {userError && <p className='error-message' style={{ color: 'red' }}>{userError}</p>}
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={handleEmailChange}
                className='form-input'
                placeholder='Enter your email'
              />
              {emailError && <p className='error-message' style={{ color: 'red' }}>{emailError}</p>}
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={handlePasswordChange}
                className='form-input'
                placeholder='Enter your password'
              />
              {passwordError && <p className='error-message' style={{ color: 'red' }}>{passwordError}</p>}
            </div>
            <div className='form-group1'>
              <div className='form-groupc'>
                <label>
                  <input
                    type='checkbox'
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  Remember Me
                </label>
              </div>
              <div className='form-groupf'>
                <a href='www.google.com' onClick={handleForgotPassword}>
                  Forgot Password?
                </a>
              </div>
            </div>
            <button type='submit' className='login-button'>
              Log In
            </button>
            <div className='signup-link'>
              Don't have an account? <Link to='/register' style={{ color: 'white' }}>Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
