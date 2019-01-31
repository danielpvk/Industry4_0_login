import React, { Component } from "react";
import { NavLink, Route, Link } from "react-router-dom";
import { Media, Container, Row, Col } from "reactstrap";
import View from "./view";
import axios from "axios";
const apiEndpoint =
  "http://ec2-3-83-99-249.compute-1.amazonaws.com/api/process/";

export default class ProcessSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      Process_name: [],
      toView: false,
      onFocus: "",
      ProcessName: ""
    };
  }
  async componentDidMount() {
    const { data: Process_name } = await axios.get(apiEndpoint);
    //console.log({ Process_name });
    this.setState({ Process_name });
  }
  funcionlocal(a) {
    console.log(a);
    localStorage.setItem("onFocus", { a });
  }
  render() {
    if (this.state.Process_name.length === 0)
      return <h2>There are no processes in database</h2>;
    return (
      <div>
        
        <Row>
          <NavLink
            to="/Processes"
            style={{
              marginLeft: 0,
              marginTop: 10,
              marginRight: 50,
              width: "100%",
              color: "#FFFfff",
              backgroundColor: "383838"
            }}
            className="btn btn-dark btn-lg"
            span="glyphicon glyphicon-tasks"
          >
            Processes
          </NavLink>
        </Row>
        <Row>
          <Col md="1" />
          <Col md="11">
            <tbody>
              {//<Process processName="Proceso numero 1" />
              this.state.Process_name.map(p => (
                <tr key={p.id}>
                  <td>
                  <Link
                    to={`/view/${p.IdDevice1}`}
                    className="btn btn-primary btn-sm"
                  >
                    {p.Process_name}
                   </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Col>
        </Row>
        <Row>
          <NavLink
            to="/addProcess"
            style={{ marginLeft: 0, marginTop: 10 }}
            className="btn btn-dark btn-lg"
          >
            Add Process
          </NavLink>
        </Row>
      </div>
    );
  }
}

/* if (this.state.Process_name.length === 0)
return <h2>There are no processes in database</h2>;
return (
<div>
  <table className="table">
    <thead>
      <tr>
        <th>
            
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
         
        </tr>
      ))}
    </tbody>
    <tr>
          <Link
            to="/addProcess"
            style={{ marginLeft: 0, marginTop: 10 }}
            className="btn btn-success btn-sm"
          >
            Add Process
          </Link>
++++++++++++++++++++++++++
            <button
                      onClick={() => this.funcionlocal(p.IdDevice1)}
                      to={`/view/${p.IdDevice1}`}
                      style={{
                        marginLeft: 0,
                        marginTop: 10,
                        marginRight: 10,
                        width: "100%",
                        backgroundColor: "383838"
                      }}
                      className="btn btn-light btn-sm text-left"
                    >
                      {p.Process_name}
                    </button>







          ++++++++++++++++++++++++
    </tr>
  </table>
</div>
); */
