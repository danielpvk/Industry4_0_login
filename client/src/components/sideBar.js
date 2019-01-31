import React from "react";
import { NavLink } from "react-router-dom";
import ProcessSidebarComp from "./processSidebar";
import { Container, Row } from "reactstrap";
import { FaSignOutAlt, FaInfinity, FaSignInAlt } from "react-icons/fa";

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn
    };
  }
  render() {
    return (
      <Container style={{ paddingLeft: "0px", paddingRight: "0px" }}>
        <Row style={{ paddingLeft: "2rem" }}>
          <ul className="nav navbar-nav ">
            {this.props.isLoggedIn && (
              <li>
                {" "}
                <NavLink to={"/"} activeStyle={{ color: "#222" }}>
                  <FaInfinity /> Home{" "}
                </NavLink>{" "}
              </li>
            )}

            {this.props.isLoggedIn && (
              <li>
                {" "}
                <ProcessSidebarComp
                  isLoggedIn={this.state.inSession}
                  loggedUserName={this.state.loggedUserName}
                />{" "}
              </li>
            )}

            {this.props.isLoggedIn && (
              <li>
                {" "}
                <NavLink to={"/logout"} activeStyle={{ color: "#ccc" }}>
                  {" "}
                  <FaSignOutAlt /> Logout{" "}
                </NavLink>{" "}
              </li>
            )}
            {!this.props.isLoggedIn && (
              <li>
                {" "}
                <NavLink to={"/login"} activeStyle={{ color: "#ccc" }}>
                  {" "}
                  <FaSignInAlt /> Login{" "}
                </NavLink>{" "}
              </li>
            )}
          </ul>
        </Row>
      </Container>
    );
  }
}
