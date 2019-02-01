import React, { Component } from "react";
import { Link } from "react-router-dom";
import StatsCard from "./statsCard";
import { Container, Row, Col } from "reactstrap";
const apiEndpoint =
  "http://ec2-3-83-99-249.compute-1.amazonaws.com/device/numserie/";

class Viewuser extends Component {
  componentDidMount(){
    console.log("props view user");
    console.log(this.props);
  }
  

  render() {
    return (
      <div className="card" style={{ width: "12rem" }}>
        <div className="card-body dashboard">
          <h5
            className="card-title"
            style={{ textAlign: "center", color: this.props.color }}
          >
           User Name: {this.props.loggedUserName}
          </h5>

          <div className="row">
            <div className="col-sm">
              <img src={this.props.image} alt={"Card"} />
            </div>
            <div className="col-sm">
              <span
                style={{
                  fontSize: "1rem",
                  textAlign: "right",
                  color: this.props.color
                }}
              >
              Email:  {this.props.loggedUserEmail}
              </span>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}

export default Viewuser;
