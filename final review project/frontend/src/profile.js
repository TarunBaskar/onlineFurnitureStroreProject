import React from 'react';
import './profile.css';
import Navbar from './navbar';
import Footer from './footer';
import avatar from './photo/avatar.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from './redux/userSlice';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/'); 
  };

  if (!user) {
    navigate('/'); 
    return null; 
  }

  const address =async()=>{
    
  } 

  return (
    <>
      <Navbar />
      <center>
        <div className="profile-page">
          <div className="profile-card" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}>
            <h2>PROFILE DETAILS</h2>
            <img src={avatar} alt="Avatar" className="profile-card_avatar" />
            <div className="profile-card_info">
              <h2 className="profile-card_name">{user.username}</h2>
              </div>
        <div className="profile-card_info">
        <span className="profile-card_lable" style={{fontWeight:'bold'}}>Email: </span>
        <span className="profile-card_value">{user.email}</span>
         </div>
         <div className="profile-card_info">
          <span className="profile-card_label">Phone.no: </span>
          <span className="profile-card_value">000-000-0000</span>
         </div>
         <div className="profile-card_info">
          <span className="profile-card_label">Location:12,kumar street,coimabtore </span>
           <span className="profile-card_value">{address}</span>
            </div>
            {/* <button className="profile-card_button">Edit Profile</button> */}
            {/* <br></br><br></br> */}
             
            <button onClick={handleLogout} className="profile-card_button">Logout</button>
          </div>
        </div>
      </center><div style={{paddingTop:'110px'}}></div>
      <Footer />
    </>
  );
};

export default ProfilePage;
