// import React, { useState,useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './login.css';
// import { useDispatch } from 'react-redux';
// import { login } from './redux/userSlice.js';

// const LoginPage = () => {

//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [userError, setUserError] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [formdata, setFormdata] = useState({
//     username: '',
//     password: ''
//   })

//   const handleChange = (e) => {
//     setFormdata({ ...formdata, [e.target.id]: e.target.value })
//   }

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setEmailError('');
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     setPasswordError('');
//   };

//   const handleRememberMeChange = () => {
//     setRememberMe(!rememberMe);
//   };

//   const handleSubmit = (e) => {
//     console.log(formdata.username,formdata.email,formdata.password)
//     e.preventDefault();

//     if(!username){
//       setUserError('Please Enter your name');
//       return;
//     }

//     if (!email) {
//       setEmailError('Please enter your email.');
//       return;
//     }

//     const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
//     if (!emailRegex.test(email)) {
//       setEmailError('Please enter a valid email address.');
//       return;
//     }

//     if (!password) {
//       setPasswordError('Please enter your password.');
//       return;
//     }else if(password<=8){
//       setPasswordError('password should atleast contain 8 character')
//     }

    

//     console.log('Login submitted:', email, password);
//     console.log('Remember Me:', rememberMe);

//     navigate('/');
//     alert("You successfully Login");
//     dispatch(login({
//       username :formdata.username
//     }))
//   };

//   const handleForgotPassword = () => {
//     console.log('Forgot Password:', email); 
//   };

//   return (
//     <>
//       <div className='login-page split'>
//         <h1 id='title'>Indian Furniture </h1>
//       </div>
//       <div className="login-page1 split">
//         <div className="login-card fog-border">
//           <h2 className="login-heading">Login</h2>
//           <form onSubmit={handleSubmit}>
//           <div className="form-group">
//               <label htmlFor="text">UserName:</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={formdata.username}
//                 onChange={handleChange}
//                 className="form-input"
//                 placeholder="Enter your Username"
//                 // required
//               />
//               {userError && <p className="error-message" style={{ color: 'red' }}>{userError}</p>}
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formdata.email}
//                 onChange={handleChange}
//                 onChange1={handleEmailChange}
//                 className="form-input"
//                 placeholder="Enter your email"
//                 // required
//               />
//               {emailError && <p className="error-message" style={{ color: 'red' }}>{emailError}</p>}
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={formdata.password}
//                 onChange={handleChange}
//                 className="form-input"
//                 placeholder="Enter your password"
//                 // required
//               />
//               {passwordError && <p className="error-message" style={{ color: 'red' }}>{passwordError}</p>}
//             </div>
//             <div className="form-group">
//               <div className="form-groupc">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={rememberMe}
//                     onChange={handleRememberMeChange}
//                   />
//                   Remember Me
//                 </label>
//               </div>
//               <div className="form-groupf">
//                 <a href="www.google.com" onClick={handleForgotPassword}>
//                   Forgot Password?
//                 </a>
//               </div>
//             </div>
//             <button type="submit" className="login-button">
//               Log In
//             </button>
//             <div className="signup-link">
//               Don't have an account? <Link to="/register" style={{ color: 'white' }}>Sign up</Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';
import { useDispatch } from 'react-redux';
import { login } from './redux/userSlice.js';

const LoginPage = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setUserError('Please enter your name');
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

    if (!password) {
      setPasswordError('Please enter your password.');
      return;
    } else if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long.');
      return;
    }

    console.log('Login submitted:', email, password);
    console.log('Remember Me:', rememberMe);

    navigate('/home');
    alert('You successfully Login');
    dispatch(login({ username }));
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
            <div className='form-group'>
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


