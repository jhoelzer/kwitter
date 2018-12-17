import React from "react";
import "../styling/main.css";
import octogif from "../octo1.gif";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {

  render() {
    console.log(this.props.pathname);
    return (
      <div className="navWrapper">
        <ul className="navBar">
          <li>
            <img src={octogif} alt="" className="octo" />
          </li>
          <li className="navTitle">Kwitter</li>
        </ul>

        <ul className="navBarLinks">
          <li
            className={
              this.props.pathname === "/edit" ||
              this.props.pathname === "/home" ||
              this.props.pathname === "/register"
                ? "hide"
                : ""
            }
          >
            <Link to="/" id="loginLink">
              Login
            </Link>
          </li>
          <li
            className={
              this.props.pathname === "/register" ||
              this.props.pathname === "/" ||
              this.props.pathname === "/logout"
                ? "hide"
                : ""
            }
          >
            <Link to="/edit" id="editLink">
              Edit Profile
            </Link>
          </li>
          <li
            className={
              this.props.pathname === "/register" ||
              this.props.pathname === "/" ||
              this.props.pathname === "/logout" ||
              this.props.pathname === "/home"
                ? "hide"
                : ""
            }
          >
            <Link to="/home" id="homeLink">
              Homepage
            </Link>
          </li>
          <li
            className={
              // this.props.pathname === "/" ||
              // this.props.pathname === "/logout" ||
              this.props.pathname === "/register" ? "hide" : ""
            }
          >
            <Link to="/register" id="logoutLink">
              Sign up
            </Link>
          </li>
          <li
            className={
              this.props.pathname === "/" ||
              this.props.pathname === "/logout" ||
              this.props.pathname === "/register"
                ? "hide"
                : ""
            }
          >
            <Link to="/logout" id="logoutLink">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { pathname: state.router.location.pathname };
};

export default connect(mapStateToProps)(Navbar);