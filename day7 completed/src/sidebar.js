import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './sidebar.css';
import avatar from './photo//avatar.jpg';
import { useSelector } from 'react-redux'
import { selectUser } from './redux/userSlice.js'

export default props => {
  const user=useSelector(selectUser)
  return (
    <Menu>
        <div>
            <center>
        <div className='sidebar_img'>
        <img src={avatar} alt="Avatar" className="profile-card_avatar" /><br></br>
        <b><i>{user.username}</i></b>
        </div>
        ------------------------<br></br>
        
      <Link to='/' className="menu-item" >
        Sign in
      </Link><br></br>
      <Link to='/register' className="menu-item" >
        Registration   
      </Link><br></br>
      ------------------------
      <h2>Furniture</h2>
      <Link to='/home/bed' className="menu-item" >
        Bed 
      </Link><br></br>
      <Link to='/home/dinning_set' className="menu-item" >
        Dining set   
      </Link><br></br>
      <Link to='/home/sofa' className="menu-item" >
           Sofa
      </Link><br></br>
      <Link to='/home/dressing' className="menu-item" >
        Dressing Table   
      </Link><br></br>
      ------------------------
      </center>
      </div>
    </Menu>
  );
};