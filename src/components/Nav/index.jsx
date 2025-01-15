import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">
            <img src="/assets/images/logo1.png" alt="Company Logo" className="nav-logo" />
          </Link>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="menu-icon"></span>
          </button>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/">Rack Audit</Link></li>
          <li><Link to="/audits">Audit List</Link></li>
          <li><Link to="/templates">Reports</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <li><Link to="/scheduled-audits">Scheduled Audits</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
