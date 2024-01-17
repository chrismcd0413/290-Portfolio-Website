//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="App-nav">
        <Link to="/">Home</Link>
        <Link to="../deliveries">Deliveries</Link>
        <Link to="../gallery">Gallery</Link>
        <Link to="../order">Order</Link>
        <Link to="../staff ">Staff</Link>
        <Link to="../topics">Topics</Link>
    </nav>

  );
}

export default Nav;
