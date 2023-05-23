import React from 'react';
import { Link } from 'react-router-dom';

import Home from './Home';

const Navbar = () => {

  return (
    
    <nav className="navbar">
        <div className="nav-buttons">
            <Link to="/" className="nav-button">Home</Link>
            <Link to="/work" className="nav-button">Work</Link>
            <Link to="/aboutme" className="nav-button">About</Link>
        </div>
    </nav>
  );
};

export default Navbar;
