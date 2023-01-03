import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import uniqid from 'uniqid';
import './index.css';

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/items">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
