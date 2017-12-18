import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">Home (all movies)</NavLink>
    </div>
  )
};

export default Header;