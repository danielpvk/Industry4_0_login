import React, { Component } from "react";
import { Chart } from "react-google-charts";

class Graph extends Component {
  state = { data: [], dataLoadingStatus: "false" };

  formatDate(d) {
    console.log(d);
    var newStr = d.substring(0, d.length - 1);
    const dateObject = new Date(newStr);
    console.log(dateObject);
    return (
      dateObject.toLocaleDateString("es-MX") +
      " " +
      dateObject.toLocaleTimeString()
    );
  }

  componentWillReceiveProps(nextprops) {
    const newData = [0, 0, 0];
    //console.log(nextprops.data);
    for (let i = 1; i < nextprops.data.length; i++) {
      //console.log(nextprops.data[i].createdAt);
      newData[i] = [
        new Date(nextprops.data[i].createdAt),
        nextprops.data[i].LectureP1,
        nextprops.data[i].LectureP2
      ];
    }
    newData[0] = ["x", "Temperature", "Humidity"];
    this.setState({ data: newData, dataLoadingStatus: "ready" });
  }

  render() {
    return this.state.dataLoadingStatus === "ready" ? (
      <div className="wrapper" style={{ marginTop: "300" }}>
        <div className={"my-pretty-chart-container"}>
          <Chart
            chartType="LineChart"
            data={this.state.data}
            options={{
              curveType: "function",
              hAxis: { title: "Date" },
              vAxis: { title: "Temperature" },
              animation: {
                duration: 1000,
                easing: "inAndOut",
                startup: true
              },
              explorer: {
                maxZoomOut: 2,
                keepInBounds: true
              },
              backgroundColor: "#e9ecef"
            }}
            rootProps={{ "data-testid": "1" }}
            width="99%"
            height="700px"
            legendToggle
          />
        </div>
      </div>
    ) : (
      <h1>------------Loading Data...</h1>
    );
  }
}

export default Graph;
