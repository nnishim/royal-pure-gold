import React from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

import { DiagramNum, DiagramSC, DiagramTitle, DiagramTop, DiagramYear, DiagramYears } from "./DiagramSC";
Chart.register(...registerables);

function Diagram() {
  const data = {
    labels: ["", "", "", ""],
    datasets: [
      {
        label: "First dataset",
        data: [85, 40, 68, 25],
        fill: true,
        backgroundColor: "rgba(51, 160, 44, 0.8)",
        tension: .4,
        borderColor: 'transparent'
      },
      {
        label: "Second dataset",
        data: [78, 53, 54, 5],
        fill: true,
        backgroundColor: "rgba(178, 223, 138, 0.8)",
        tension: .4,
        borderColor: 'transparent'
      },
      {
        label: "Third dataset",
        data: [25, 50, 75, 60],
        fill: true,
        backgroundColor: "rgba(31, 120, 180, 0.8)",
        pointColor: "#0000000",
        pointStrokeColor: "#0000000",
        tension: .4,
        borderColor: 'transparent'
      },
      {
        label: "Four dataset",
        data: [10, 60, 78, 10],
        fill: true,
        backgroundColor: "rgba(166, 206, 227, 0.8)",
        tension: .4,
        borderColor: 'transparent'
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 0
      }
    },
    plugins:{
      legend: {
        display: false
      },
    },
  }

  return (
    <>
      <DiagramSC>
        <DiagramTitle>Финансовые показатели</DiagramTitle>
        <DiagramTop>
          <DiagramYears borderBottom>
            <DiagramYear>2018</DiagramYear>
            <DiagramYear>2019</DiagramYear>
            <DiagramYear>2020</DiagramYear>
            <DiagramYear>2021</DiagramYear>
          </DiagramYears>
          <DiagramYears>
            <DiagramNum>13498</DiagramNum>
            <DiagramNum>19908</DiagramNum>
            <DiagramNum>11488</DiagramNum>
            <DiagramNum>17001</DiagramNum>
          </DiagramYears>
        </DiagramTop>
        <Line data={data} options={options}/>
      </DiagramSC>
    </>
  );
}

export default Diagram;
