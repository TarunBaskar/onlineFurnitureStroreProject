// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from './navbar';
// import Footer from './footer';

// const Profile = () => {
// //   const [profileData, setProfileData] = useState(null);

// //   useEffect(() => {
// //     const fetchProfileData = async () => {
// //       try {
// //         const response = await axios.get('/api/profile'); 
// //         setProfileData(response.data);
// //       } catch (error) {
// //         console.error('Error fetching profile data:', error);
// //       }
// //     };

// //     fetchProfileData();
// //   }, []);

// //   if (!profileData) {
// //     return <div>Loading...</div>;
// //   }

//   return (
//     <>
//     
//     <div>
//       <h2 style={{padding:'100px'}}>Profile Details</h2>
//       {/* <p>Name: {profileData.name}</p>
//       <p>Email: {profileData.email}</p> */}
//       {/* Display other profile details */}
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default Profile;

import React from 'react';
import './profile.css';
import Navbar from './navbar';
import Footer from './footer';
import avatar from './photo//avatar.jpg';
import { useSelector } from 'react-redux'
import { selectUser } from './redux/userSlice.js'

const ProfilePage = () => {
  const user=useSelector(selectUser)
  return (
    <>
    <Navbar/>
    <center>
    <div className="profile-page">
      <div className="profile-card" style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'}}>
        <h2>PROFILE DETAILS</h2>
        <img src={avatar} alt="Avatar" className="profile-card_avatar" />
        <div className="profile-card_info">
        <h2 className="profile-card_name">{user.username}</h2>
        </div>
        <div className="profile-card_info">
        <span className="profile-card_lable" style={{fontWeight:'bold'}}>Email: </span>
        <span className="profile-card_value">tarun@gmail.com</span>
        </div>
        <div className="profile-card_info">
          <span className="profile-card_label">Phone.no: </span>
          <span className="profile-card_value">000-000-0000</span>
        </div>
        <div className="profile-card_info">
          <span className="profile-card_label">Location: </span>
          <span className="profile-card_value">79/11,kumaran street,Coimbatore</span>
        </div>
        <button className="profile-card_button">Edit Profile</button>
      </div>
    </div>
    </center>
    <Footer/>
    </>
  );
};

export default ProfilePage;
