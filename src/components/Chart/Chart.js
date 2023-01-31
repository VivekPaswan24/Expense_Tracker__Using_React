import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {

    let dataPointsValues=props.dataPoints.map(dataPoint=>dataPoint.value)
    let totalMax=Math.max(...dataPointsValues)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lebel}
          value={dataPoint.value}
          lebel={dataPoint.lebel}
          maxVal={totalMax}
        />
      ))}
    </div>
  );
};

export default Chart;
