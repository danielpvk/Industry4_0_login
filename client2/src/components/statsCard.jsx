import React, { Component } from "react";

export class StatsCard extends Component {
  state = { update: false };

  componentWillReceiveProps(nextprops) {
    this.setState({ update: true });
  }

  render() {
    return this.state.update ? (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title" style={{ textAlign: "center" }}>
            Real Time {this.props.text}
          </h5>
          <p
            className="mx-auto"
            style={{ fontSize: "3rem", textAlign: "center" }}
          >
            {this.props.value}
          </p>
        </div>
      </div>
    ) : (
      <h1>Sin Info</h1>
    );
  }
}

export default StatsCard;
