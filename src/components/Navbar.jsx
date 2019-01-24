import React, { Component } from "react";
import logo from "../image/logo_1.png";
import "../css/Navbar.css";
import { Link, NavLink } from "react-router-dom";
class Navbar extends Component {
  state = {
    width: 50
  };
  handlelogo = () => {
    let width = this.state.width;
    this.setState({
      width: width + "500px"
    });
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              alt="cricLogo"
              className="logoImg"
              onMouseMove={this.handlelogo}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" id="nav_item_color">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  className="nav-link"
                  id="nav_item_color"
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/teams" className="nav-link" id="nav_item_color">
                  Teams
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/images" className="nav-link" id="nav_item_color">
                  Images
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" id="nav_item_color">
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
