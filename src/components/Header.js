import React from 'react';
import Form from './Form';
import Nav from './Nav';

// The "Header" component contains the search bar and the default navigation buttons
const Header = (props) => {
  return (
    <div className="header-container">
      <Form searching={props.searching} />
      <Nav />
    </div>
  );
}

export default Header;