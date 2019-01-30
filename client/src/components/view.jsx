import React, { Component } from "react";
//import { Link } from "react-router-dom";
import StatsCard from "./statsCard";
import Graph from "./graph";
import axios from "axios";
const apiEndpoint = "http://localhost/device/numserie/";

class View extends Component {
  state = { data: [], LectureP1: 0, LectureP2: 0, size: 0 };

  async componentDidMount() {
    const result = await axios.get(apiEndpoint + this.props.NumSerie);
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
        <div className="jumbotron">
          <h1 className="display-4" style={{ display: "inline" }}>
            Process Name:
          </h1>
          <h1
            className="display-6"
            style={{ color: "red", display: "inline", paddingLeft: "20" }}
          >
            {this.props.ProcessName}
          </h1>
          <p className="lead">
            This is the Industry 4.0 Process, this dashboard shows all the
            sensors information for the process.
          </p>

          <h2>Sensor Serial Number: {this.props.NumSerie}</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <StatsCard
                value={this.state.LectureP1}
                text={"Temp (ºC)"}
                image={"./assets/icons/temp.jpg"}
                color={"blue"}
              />
            </div>
            <div className="col-sm">
              <StatsCard
                value={this.state.LectureP2}
                text={"Humidity (%)"}
                image={"./assets/icons/dew.jpg"}
                color={"red"}
              />
            </div>
            <div className="col-sm">
              <StatsCard
                value={this.state.size}
                text={"DataPoints"}
                image={"./assets/icons/points.jpg"}
              />
            </div>
          </div>
        </div>

        <Graph data={this.state.data} />
        <div className="tabla">
          <h2 style={{ textAlign: "center" }}>Data</h2>
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
      </div>
    );
  }
}

export default View;
