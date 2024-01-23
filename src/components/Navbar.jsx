// Navbar.js

import React from "react";
import {NavLink, Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: '#000000' }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <h1 style={{ marginLeft: '35px' }}><span style={{ color: '#006AEC' }}>Scrapi</span>Fy</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto nav-component">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signup" className="nav-link">Sign up</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
