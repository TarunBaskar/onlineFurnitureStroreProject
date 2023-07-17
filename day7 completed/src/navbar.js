import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaHome } from 'react-icons/fa';
import Sidebar from './sidebar';
import { SearchContext } from './searchContext';

const Navbar = () => {
  const { searchQuery, handleSearchQueryChange } = useContext(SearchContext);

  const handleSearchInputChange = (e) => {
    handleSearchQueryChange(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
       
        <div className="menu">
          <h1 style={{ color: 'lightgray' }} id="title1">
            INDIAN FURNITURE
          </h1>
        </div>
      </div>
      {/* <div className="navbar__center">
        <input type="text" placeholder="Search..." className="navbar__searchInput" />
        <button className="navbar__searchButton">
          <span role="img" aria-label="Search">
            🔍
          </span>
        </button>
      </div> */}
      <div className="navbar__center">
        <input
          type="text"
          placeholder="Search..."
          className="navbar__searchInput"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
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

// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import { FaHome } from 'react-icons/fa';
// import { SearchContext } from './SearchContext';

// const Navbar = () => {
//   const { searchQuery, handleSearchQueryChange } = useContext(SearchContext);

//   const handleSearchInputChange = (e) => {
//     handleSearchQueryChange(e.target.value);
//   };

//   return (
//     <nav className="navbar">
//       {/* ...existing code... */}
//       <div className="navbar__center">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="navbar__searchInput"
//           value={searchQuery}
//           onChange={handleSearchInputChange}
//         />
//         <button className="navbar__searchButton">
//           <span role="img" aria-label="Search">
//             🔍
//           </span>
//         </button>
//       </div>
//       {/* ...existing code... */}
//     </nav>
//   );
// };

// export default Navbar;

