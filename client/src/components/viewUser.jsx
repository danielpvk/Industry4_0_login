import React, { Component } from "react";
import { Link } from "react-router-dom";
import StatsCard from "./statsCard";
import { Container, Row, Col } from "reactstrap";
import {
  FaUser,
  FaEnvelopeSquare,
  FaKey,
  FaSignInAlt,
  FaUserPlus
} from "react-icons/fa";
const apiEndpoint =
  "http://ec2-3-83-99-249.compute-1.amazonaws.com/device/numserie/";

class Viewuser extends Component {
  componentDidMount(){
    console.log("props view user");
    console.log(this.props);
  }
  

  render() {
    return (
      <div className="card" style={{ width: "25rem" }}>
        <div className="card-body dashboard">
          <Row>
          <Col md="1">
              <FaUser />
          </Col>
          <Col md="11">
          <h5
            className="card-title"
            style={{ textAlign: "left", color: this.props.color }}
          >
            Name: {this.props.loggedUserName}
          </h5>
          </Col>
          </Row>
          <Row></Row>
          <Row> 
          <Col md="1">
              <FaEnvelopeSquare/>
          </Col>
          <Col md="11">
              <span
                style={{
                  fontSize: "1rem",
                  textAlign: "right",
                  color: this.props.color
                }}
              >
               Email:  {this.props.loggedUserEmail}
              </span>
            </Col>
          </Row>
          <Row> </Row>
          <Row> 
          <Col md="1">
              <FaKey/>
          </Col>
          <Col md="11">
              <span
                style={{
                  fontSize: "1rem",
                  textAlign: "right",
                  color: this.props.color
                }}
              >
               Password:  {this.props.loggedUserPassword}
              </span>
            </Col>
          </Row>
        </div>
      </div>
    ) 
  }
}

export default Viewuser;
