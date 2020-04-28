import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/App.css';
import { FaProductHunt, FaTasks, FaReact } from 'react-icons/fa';

const Discover = () => {
  return (
    <>
      <div className="App-discover">
        <ul className="social">
          <li className="social_item">
            <Link className="social_link" to="/discover/count" style={{ color: 'white' }}>
              <FaReact size="3em" />
            </Link>
          </li>
          <li className="social_item">
            <Link className="social_link" to="/discover/todos" style={{ color: 'white' }}>
              <FaTasks size="3em" />
            </Link>
          </li>
          <li className="social_item">
            <Link className="social_link" to="/discover/products" style={{ color: 'white' }}>
              <FaProductHunt size="3em" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Discover;
