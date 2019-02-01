import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Navbar } from "reactstrap";
import {
  FaUser,
  FaSignOutAlt,
  FaInfinity,
  FaSignInAlt,
  FaUserPlus
} from "react-icons/fa";

export default class NavbarComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn
    };
  }
  render() {
    return (
      <Navbar style={{ alignItems: "right" }}>
        <Col md="3" />
        <Col md="3">
          {this.props.isLoggedIn && (
            <NavLink to={"/"} activeStyle={{ color: "#222" }}>
              <FaInfinity /> Home{" "}
            </NavLink>
          )}
        </Col>
        <Col md="3">
          {/*   <img src={'/assets/icons/login.jpg'} imageWrapper={{height: 20, width: 20}}/> */}
          {!this.props.isLoggedIn && (
            <NavLink to={"/login"} activeStyle={{ color: "#222" }}>
              <FaSignInAlt /> Login{" "}
            </NavLink>
          )}
          {this.props.isLoggedIn && (
            <a href={"/"}>
              <FaUser /> {this.props.loggedUserName}{" "}
            </a>
          )}
        </Col>
        <Col md="3">
          {!this.props.isLoggedIn && (
            <NavLink to={"/signup"} activeStyle={{ color: "#222" }}>
              {" "}
              <FaUserPlus /> Signup{" "}
            </NavLink>
          )}
          {this.props.isLoggedIn && (
            <NavLink to={"/logout"} activeStyle={{ color: "#222" }}>
              {" "}
              <FaSignOutAlt /> Logout{" "}
            </NavLink>
          )}
        </Col>
      </Navbar>
    );
  }
}
