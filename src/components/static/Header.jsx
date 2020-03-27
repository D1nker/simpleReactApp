import React from 'react';
import logo from '../../assets/img/logo.svg';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div className="App-header">
      <nav>
        <ul>
          <Link to="app">Home</Link>{" "}
          {/* <Link to="dis">Invoices</Link>{" "} */}
          {/* <Link to="invoices">Invoices</Link>{" "} */}

          {/* <li><a href="home">Home</a></li> */}
          <li><a href="discover">Discover</a></li>
          <li><a href="login">Login</a></li>
        </ul>
    </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome <code>d1nker</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </header>
    </div>
  )
}

export default Header
