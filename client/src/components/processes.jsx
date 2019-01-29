import React, { Component } from "react";
import { Link } from "react-router-dom";
import View from "./view";

import axios from "axios";
const apiEndpoint = "http://localhost/api/process/";

class Processes extends Component {
  state = { Process_name: [], toView: false, onFocus: "", ProcessName: "" };

  handleDelete = async p => {
    //console.log(p);
    const result = await axios.delete(apiEndpoint + p.id);
    console.log(result);

    const Process_name = this.state.Process_name.filter(pro => pro.id !== p.id);
    this.setState({ Process_name });
  };

  handleView = p => {
    //console.log("View: ", p);
    this.setState({
      toView: true,
      onFocus: p.IdDevice1,
      ProcessName: p.Process_name
    });
  };

  async componentDidMount() {
    const { data: Process_name } = await axios.get(apiEndpoint);
    //console.log({ Process_name });
    this.setState({ Process_name });
  }
  render() {
    if (this.state.toView === true) {
      return (
        <View
          NumSerie={this.state.onFocus}
          ProcessName={this.state.ProcessName}
        />
      );
    }
    if (this.state.Process_name.length === 0)
      return <h2>There are no processes in database</h2>;
    return (
      <div>
        <p className="text-center">
          Showing {this.state.Process_name.length} processes in the database
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Process</th>

              <th>
                <Link
                  to="/addProcess"
                  style={{ marginLeft: 0, marginTop: 10 }}
                  className="btn btn-success btn-sm"
                >
                  Add Process
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {//<Process processName="Proceso numero 1" />
            this.state.Process_name.map(p => (
              <tr key={p.id}>
                <td>
                  {" "}
                  <span style={{ marginRight: 10, color: "blue" }}>{p.id}</span>
                  <span style={{ fontStyle: "Italic" }}>{p.Process_name}</span>
                </td>
                <td />
                <td>
                  <button
                    onClick={() => this.handleView(p)}
                    className="btn btn-primary btn-sm"
                  >
                    View
                  </button>
                </td>
                <td>
                  <button
                    style={{ marginLeft: 10 }}
                    onClick={() => this.handleDelete(p)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Processes;
