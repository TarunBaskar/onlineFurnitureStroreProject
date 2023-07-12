import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './sidebar.css';
import avatar from './photo//avatar.jpg';

export default props => {
  return (
    <Menu>
        <div>
            <center>
        <div className='sidebar_img'>
        <img src={avatar} alt="Avatar" className="profile-card_avatar" /><br></br>
        <b><i>Tarun</i></b>
        </div>
        ------------------------
        
      <Link to='/' className="menu-item" >
        Sign in
      </Link><br></br>
      <Link to='/register' className="menu-item" >
        Registion   
      </Link><br></br>
      ------------------------
      <h2>Furniture</h2>
      <Link to='/home/bed' className="menu-item" >
        Bed 
      </Link><br></br>
      <Link to='/home/dinning_set' className="menu-item" >
        Dinning set   
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