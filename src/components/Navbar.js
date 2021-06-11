import React from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/Nav.css'

const Nav = () => {
    return (
	<div>
    <nav className="navbar">
      <ul className="the-nav">

        <li className="logo">
          <a href="#" className="nav-link">
            <span className="logo">TTM</span>
            <FontAwesomeIcon icon="angle-double-left" size="2x" className="rotate"/>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <FontAwesomeIcon icon="sign-out-alt" size="2x" /> <span className="link-text">Log Out</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <FontAwesomeIcon icon="book" size="2x" className="Journal"/>
            <span className="link-text">Journal</span> </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <FontAwesomeIcon icon="chart-area" size="2x" /> <span className="link-text">Mood Chart</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <FontAwesomeIcon icon="microphone" size="2x" /> <span className="link-text">Record</span>
          </a>
        </li>

        <li className="nav-item">
          <Link to="/help">
          <a href="#" className="nav-link">
            <FontAwesomeIcon icon="phone-alt" size="2x" /> <span className="link-text">Help Info</span>
          </a>
          </Link>
        </li>
      </ul>
    </nav>
	</div>
    );

};

export default Nav;
