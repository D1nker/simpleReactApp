import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
import logo from '../../assets/img/logo.svg';

const Header = () => {
  return (
    <div className="App-heading">
      <nav className="navbar navbar-expand-md">
        <div className="d-flex w-50">
          <a className="" href="/">
            <FaReact className="fa-icon" size="1.5em" />
          </a>
        </div>
        <div className="navbar-collapse collapse justify-content-center" id="collapsingNavbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/discover">
                Discover
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/discover">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link className="navbar-text small text-truncate mt-1 w-50 text-right" to="/discover">
          Contact
        </Link>
      </nav>
      <div className="App-header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome</p>
          {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a> */}
        </header>
      </div>
    </div>
  );
};

export default Header;
