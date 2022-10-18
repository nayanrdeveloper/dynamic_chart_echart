import React from "react";
import ReactEcharts from "echarts-for-react";

function TangentialPolar() {
  const option = {
    title: [
      {
        text: "Tangential Polar Bar Label Position (middle)",
      },
    ],
    polar: {
      radius: [30, "80%"],
    },
    angleAxis: {
      max: 4,
      startAngle: 75,
    },
    radiusAxis: {
      type: "category",
      data: ["a", "b", "c", "d"],
    },
    tooltip: {},
    series: {
      type: "bar",
      data: [2, 1.2, 2.4, 3.6],
      coordinateSystem: "polar",
      label: {
        show: true,
        position: "middle",
        formatter: "{b}: {c}",
      },
    },
  };
  return (
    <div className="p-4">
      <div className="flex gap-4">
        <div>
          <div className="flex gap-2 items-center">
            <label>Name:</label>
            <input type={"text"} className="input-text" />
          </div>
        </div>
        <div className="border border-black rounded-md">
          <ReactEcharts option={option} style={{ height: 500, width: 500 }} />
        </div>
      </div>
    </div>
  );
}

export default TangentialPolar;
