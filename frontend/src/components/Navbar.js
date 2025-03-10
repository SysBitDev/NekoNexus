import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Головна</Link>
        </li>
        <li>
          <Link to="/trainings">Навчання</Link>
        </li>
        <li>
          <Link to="/messages">Повідомлення</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
