import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink onClick={props.incrementTwo} to="/cats">Cats</NavLink></li>
        <li><NavLink onClick={props.incrementTwo} to="/dogs">Dogs</NavLink></li>
        <li><NavLink onClick={props.incrementTwo} to="/laptops">Laptops</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;