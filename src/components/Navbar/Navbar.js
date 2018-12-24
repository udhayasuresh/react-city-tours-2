import React, { Component } from 'react'
import './Navbar.scss';
import logo from '../../logo.png';
 class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img src={logo} alt="city tours logo"/>
        <ul className="nav-links">
        <li>
            <a href="/" className="nav-link">
            Home
            </a>
        </li>
        <li>
            <a href="/" className="nav-link">
            About
            </a>
        </li>
        <li>
            <a href="/" className="nav-link active">
            Tours
            </a>
        </li>
        </ul>
      </div>
    )
  }
}
export default Navbar;
