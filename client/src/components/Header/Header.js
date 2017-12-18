import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <NavLink className="header__link" to="/">Home (all movies)</NavLink>
      <NavLink className="header__link" to ="/new-movie">Add a movie</NavLink>
    </div>
  )
};

export default Header;