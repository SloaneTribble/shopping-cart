import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import uniqid from 'uniqid';
import './index.css';

const Nav = ({ itemCount }) => {
  return (
    <nav>
      <span id="title">Myer's Superfoods</span>
      <ul className="nav-bar">
        <Link to="/">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/items">
          <li className="nav-link">Shop</li>
        </Link>
        <Link to="/cart">
          <li className="nav-link">Cart({itemCount})</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
