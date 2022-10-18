import React from "react";
import ReactEcharts from "echarts-for-react";

function Doughnut() {
  const options = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };
  return <div className="p-4">
  <div className="flex gap-4">
    <div>
      <div className="flex gap-2 items-center">
        <label>Name:</label>
        <input type={"text"} className="input-text" />
      </div>
    </div>
    <div className="border border-black rounded-md">
      <ReactEcharts option={options} style={{ height: 500, width: 500 }} />
    </div>
  </div>
</div>;
}

export default Doughnut;
