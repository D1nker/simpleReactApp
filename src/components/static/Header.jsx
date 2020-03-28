import React from 'react';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="App-header">
      <nav>
        <ul>
        <Link to="/">Home</Link>
        <Link to="/discover">Discover</Link>
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
