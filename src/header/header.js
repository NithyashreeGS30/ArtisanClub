

import React from 'react';
import './Header.css';
import logo from '../logo1.png';

const Header = ({ headName, cartCount, toggleCart }) => { // Pass toggleCart function as prop
  return (
    <div className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Logo"
      />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <button className="header__searchButton">Search</button>
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
