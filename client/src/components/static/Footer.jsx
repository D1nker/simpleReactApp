import React from 'react';
import '../../assets/css/App.css';
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="App-footer">
      <footer>
        <ul className="list-unstyled list-inline text-center">
          <li className="">
            <a className="" href="github">
              <FaGithub className="fa-icon" size="2em" />
            </a>
          </li>
          <li className="">
            <a className="" href="twitter">
              <FaTwitter className="fa-icon" size="2em" />
            </a>
          </li>
          <li className="">
            <a className="" href="idkyet">
              <FaLinkedinIn className="fa-icon" size="2em" />
            </a>
          </li>
        </ul>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright
          <p className="mention">Made by d1nker with love</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
