import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaHome } from 'react-icons/fa';
import Sidebar from './sidebar';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const handleMenuToggle = () => {
  //   setMenuOpen(!menuOpen);
  // };


  return (
    <nav className="navbar">
      <div className="navbar__left">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        {/* <div className={menuOpen ? 'menu open' : 'menu'} id="menu">
          <button className="navbar__menuButton" onClick={handleMenuToggle}>
            <span role="img" aria-label="Menu">
              ☰
            </span>
          </button>
          {menuOpen && (
            <div className="dropdown">
              <ul className="dropdown__list">
                <li className="dropdown__item">
                  <Link to="/home">Sofa</Link>
                </li>
                <li className="dropdown__item">
                  <Link to="/home">Bed</Link>
                </li>
                <li className="dropdown__item">
                  <Link to="/home">Dinning table</Link>
                </li>
              </ul>
            </div>
          )}
        </div> */}

        <div className="menu">
          <h1 style={{ color: 'lightgray' }} id="title1">
            INDIAN FURNITURE
          </h1>
        </div>
      </div>
      <div className="navbar__center">
        <input type="text" placeholder="Search..." className="navbar__searchInput" />
        <button className="navbar__searchButton">
          <span role="img" aria-label="Search">
            🔍
          </span>
        </button>
      </div>
      <div className="navbar__right">
       
        <Link to="/profile" className="navbar__button">
          <span role="img" aria-label="Profile">
            👤
          </span>
        </Link>
        <Link to="/cart" className="navbar__button">
          <span role="img" aria-label="Cart">
            🛒
          </span>
        </Link>
        <Link to="/home" className="home-button">
            <FaHome size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


