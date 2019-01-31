import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
const apiEndpoint = "http://localhost/api/process/";

class AddProcess extends Component {
  state = { data: [], LectureP1: 0, LectureP2: 0, size: 0 };
  handleSubmit = async e => {
    const nSerie=localStorage.getItem("onFocus");
    //  const result = await axios.get(apiEndpoint + this.props.NumSerie);
    console.log("view mounted");
    console.log("num serie"+nSerie);
    const result = await axios.get(apiEndpoint + nSerie);
      console.log(result.data.length);
  
      this.setState({
        data: result.data,
        LectureP1: result.data[result.data.length - 1].LectureP1,
        LectureP2: result.data[result.data.length - 1].LectureP2,
        size: result.data.length
      });
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
