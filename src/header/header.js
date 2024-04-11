import React from 'react';
import './Header.css';
import logo from '../logo1.png';

const Header = ({ headName, cartCount, toggleCart }) => {
  // Define sample categories and artists for demonstration
  const categories = ['Category 1', 'Category 2', 'Category 3'];
  const artists = ['Artist 1', 'Artist 2', 'Artist 3'];

  return (
    <div className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Logo"
      />

      <div className="header__dropdowns">
        {/* Dropdown for categories */}
        <select className="header__dropdown">
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

        {/* Dropdown for artists */}
        <select className="header__dropdown">
          <option value="">Select Artist</option>
          {artists.map((artist, index) => (
            <option key={index} value={artist}>{artist}</option>
          ))}
        </select>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, Sign in</span>
          <span className="header__optionLineTwo">Account & Lists</span>
        </div>
        <div className="header__option">
          {/* Pass toggleCart function to onClick event */}
          <a href="#!" onClick={toggleCart} className="header__optionLineTwo" style={{color:"white",paddingTop:"5px"}}>Cart ({cartCount})</a>
        </div>
      </div>

      <div className="header__option">
        {headName === "SignIn" ? (
          <a href="/signin" className="header__optionLineTwo" style={{color:"white"}}>
            Sign In
          </a>
        ) : (
          <a href="/" className="header__optionLineTwo" style={{color:"white"}}>
            Sign Out
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
