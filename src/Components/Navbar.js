import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
export default function Navbar() {
  return (
    <div>
      <br />
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
        <div className="collapse navbar-collapse show ml-sm-5">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/recipes">
                All Recipes
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/recipes/:id">
                1 Recipe
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <br />
    </div>
  );
}
