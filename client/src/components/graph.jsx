import React, { Component } from "react";
import { Chart } from "react-google-charts";

class Graph extends Component {
  state = { data: [], dataLoadingStatus: "false" };

  componentWillReceiveProps(nextprops) {
    const newData = [0, 0, 0];

    const testArray = [
      ["x", "Temperature", "Humidity"],
      [0, 0, 0],
      [1, 10, 20],
      [2, 23, 30],
      [3, 17, 30],
      [4, 18, 10],
      [5, 9, 2],
      [6, 11, 9],
      [7, 27, 10],
      [8, 33, 15],
      [9, 40, 20],
      [10, 32, 21],
      [11, 35, 32]
    ];

    for (let i = 1; i < nextprops.data.length; i++) {
      newData[i] = [i, i, i];
    }
    newData[0] = ["x", "Temperature", "Humidity"];
    this.setState({ data: testArray, dataLoadingStatus: "ready" });
    /* const testArray = [
      ["x", "Temperature", "Humidity"],
      [0, 0, 0],
      [1, 10, 20],
      [2, 23, 30],
      [3, 17, 30],
      [4, 18, 10],
      [5, 9, 2],
      [6, 11, 9],
      [7, 27, 10],
      [8, 33, 15],
      [9, 40, 20],
      [10, 32, 21],
      [11, 35, 32]
    ];*/
  }

  render() {
    return this.state.dataLoadingStatus === "ready" ? (
      <div className={"my-pretty-chart-container"}>
        {console.log(this.state.data)}
        <Chart
          chartType="LineChart"
          data={[this.state.data]}
          options={{
            curveType: "function",
            hAxis: {
              title: "Date"
            },
            vAxis: {
              title: "Temperature"
            }
          }}
          rootProps={{ "data-testid": "1" }}
          width="100%"
          height="400px"
          legendToggle
        />
      </div>
    ) : (
      <h1>------------Loading Data...</h1>
    );
  }
}

export default Graph;
