import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Products Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link">
          Products List
        </NavLink>
        <NavLink to="/add" className="link">
          Add Products
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
