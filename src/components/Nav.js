import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/cat">Cats</NavLink></li>
        <li><NavLink to="/dog">Dogs</NavLink></li>
        <li><NavLink to="/laptop">Laptops</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;