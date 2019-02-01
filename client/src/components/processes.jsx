import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import AddProcess from "./addProcess";
import View from "./view";
import axios from "axios";
const apiEndpoint =
  "http://ec2-3-83-99-249.compute-1.amazonaws.com/api/process/";

class Processes extends Component {
  state = { Process_name: [], toView: false, onFocus: "", ProcessName: "" };

  handleDelete = async p => {
    //console.log(p);
    const result = await axios.delete(apiEndpoint + p.id);
    console.log(result);

    const Process_name = this.state.Process_name.filter(pro => pro.id !== p.id);
    this.setState({ Process_name });
  };



  async componentDidMount() {
    const { data: Process_name } = await axios.get(apiEndpoint);
    //console.log({ Process_name });
    this.setState({ Process_name });
  }
  render() {
    if (this.state.Process_name.length === 0)
      return <h2>There are no processes in database</h2>;
    return (
      <div>
        <Route path={"/view/:id"} render={props => <View {...props} />} />
        <p className="text-center">
          Showing {this.state.Process_name.length} processes in the database
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Process</th>

              <th>
                <Route path={"/addProcess"} render={() => <AddProcess />} />
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
                  <Link
                    to={`/view/${p.IdDevice1}`}
                    className="btn btn-primary btn-sm"
                  >
                    View
                  </Link>
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
