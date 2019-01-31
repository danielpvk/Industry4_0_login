import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
const apiEndpoint = "http://ec2-3-83-99-249.compute-1.amazonaws.com/api/process/";

class AddProcess extends Component {
  state = {
    process: {
      Process_name: "",
      Process_Description: "",
      idDevice1: "",
      toProceses: false
    }
  };
  handleSubmit = async e => {
    e.preventDefault();
    console.log("Add Process in database");
    const result = await axios.post(apiEndpoint, this.state.process);
    console.log(result);
    this.setState({ toProceses: true });
  };

  handleChange = e => {
    const process = { ...this.state.process };
    process[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ process });
  };

  handleCancel = e => {
    e.preventDefault();
    window.location.href = "/processes";
  };

  render() {
    if (this.state.toProceses === true) {
      return <Redirect to="/processes" />;
    } else
      return (
        <div className="jumbotron m-4">
          <h1>Add Process</h1>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="Process_name">Process Name</label>
              <input
                value={this.state.process.Process_name}
                onChange={this.handleChange}
                autoFocus
                id="Process_name"
                name="Process_name"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Process_Description">Process Description</label>
              <input
                name="Process_Description"
                onChange={this.handleChange}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="NumSerie">Serial Number</label>
              <input
                name="IdDevice1"
                onChange={this.handleChange}
                type="text"
                className="form-control"
              />
            </div>
            <button className="btn btn-primary">Add</button>
            <Link
              to="/processes"
              style={{ float: "right" }}
              className="btn btn-danger"
            >
              Cancel
            </Link>
          </form>
        </div>
      );
  }
}

export default AddProcess;
