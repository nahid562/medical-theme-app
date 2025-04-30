import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link to="/themes" className={location.pathname === '/themes' ? 'active' : ''}>Themes</Link>
    </nav>
  );
};

export default MenuBar;