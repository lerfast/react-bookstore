import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigation">
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/categories" className="nav-link">
          Categories
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
