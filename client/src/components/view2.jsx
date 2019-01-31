import React, { Component } from "react";
//import { Link } from "react-router-dom";
import StatsCard from "./statsCard";
import Graph from "./graph";
import axios from "axios";
const apiEndpoint = "http://localhost/device/numserie/";


class View2 extends Component {
  state = { data: [], LectureP1: 0, LectureP2: 0, size: 0 };

  async componentDidMount() {
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
  }

  formatDate(d) {
    const dateObject = new Date(d);
    return (
      dateObject.toLocaleDateString("es-MX") +
      " " +
      dateObject.toLocaleTimeString()
    );
  }

  render() {
    return (
      <div>
        <h1>Detail</h1>
        <h2>Process Name: {this.props.ProcessName}</h2>
        <h2>Sensor Number: {this.props.NumSerie}</h2>
        <hr />

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <StatsCard value={this.state.LectureP1} text={"Temp (ºC)"} />
            </div>
            <div className="col-sm">
              <StatsCard value={this.state.LectureP2} text={"Humidity (%)"} />
            </div>
            <div className="col-sm">
              <StatsCard value={this.state.size} text={"DataPoints"} />
            </div>
          </div>
        </div>

        <Graph data={this.state.data} />

        <h2>Data</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Temperature (ºC)</th>
              <th>Humidity (Relative%)</th>

              <th>
                <button
                  style={{ marginLeft: 0, marginTop: 10 }}
                  className="btn btn-success btn-sm"
                >
                  Return to List
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {//<Process processName="Proceso numero 1" />
            this.state.data
              .slice(0)
              .reverse()
              .map(p => (
                <tr key={p.id}>
                  <td>
                    <span style={{ fontStyle: "Italic" }}>
                      {this.formatDate(p.createdAt)}
                    </span>
                  </td>
                  <td>
                    <span style={{ fontStyle: "Italic" }}>{p.LectureP1}</span>
                  </td>
                  <td>
                    <span style={{ fontStyle: "Italic" }}>{p.LectureP2}</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default View2;


