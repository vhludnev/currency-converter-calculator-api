import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = ()=> {

  return (   
    <div className="header-nav">
      <div className="container">
        <nav>
          <NavLink to="/">Main</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Nav;