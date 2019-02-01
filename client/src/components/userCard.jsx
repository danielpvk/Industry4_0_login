import React, { Component } from "react";

export class UserCard extends Component {
  state = { update: false };

  componentWillReceiveProps(nextprops) {
    this.setState({ update: true });
    console.log(this.props);
  }

  render() {
    return this.state.update ? (
      <div className="card" style={{ width: "12rem" }}>
        <div className="card-body dashboard">
          <h5
            className="card-title"
            style={{ textAlign: "center", color: this.props.color }}
          >
           User Name: {this.props.text}
          </h5>

          <div className="row">
            <div className="col-sm">
              <img src={this.props.image} alt={"Card"} />
            </div>
            <div className="col-sm">
              <span
                style={{
                  fontSize: "2rem",
                  textAlign: "right",
                  color: this.props.color
                }}
              >
              Email:  {this.props.value}
              </span>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <h1>Sin Info</h1>
    );
  }
}

export default StatsCard;
