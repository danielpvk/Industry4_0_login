import React, { Component } from "react";
import { Link } from "react-router-dom";


import axios from "axios";
const apiEndpoint = "http://localhost/api/process/";

export default class ProcessSidebar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      Process_name: [], 
      toView: false, 
      onFocus: "", 
      ProcessName: "" 
    }
  }
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
                  <span style={{ fontStyle: "Italic" }}>{p.Process_name}</span>
                </td>
                <td />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
