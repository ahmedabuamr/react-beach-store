import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

export class Navbars extends Component {
  state = {
    isOpen: false
  };
  handelToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="..." />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handelToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbars;
