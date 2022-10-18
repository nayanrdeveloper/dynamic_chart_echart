import React from "react";
import ReactEcharts from "echarts-for-react";

function Funnel() {
  const option = {
    title: {
      text: "Funnel",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c}%",
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    legend: {
      data: ["Show", "Click", "Visit", "Inquiry", "Order"],
    },
    series: [
      {
        name: "Funnel",
        type: "funnel",
        left: "10%",
        top: 60,
        bottom: 60,
        width: "80%",
        min: 0,
        max: 100,
        minSize: "0%",
        maxSize: "100%",
        sort: "descending",
        gap: 2,
        label: {
          show: true,
          position: "inside",
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: "solid",
          },
        },
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
        emphasis: {
          label: {
            fontSize: 20,
          },
        },
        data: [
          { value: 60, name: "Visit" },
          { value: 67, name: "Internet" },
          { value: 12, name: "Computer" },
          { value: 28, name: "fish" },
          { value: 79, name: "Equality" },
          { value: 79, name: "Animal" },
          { value: 40, name: "Inquiry" },
          { value: 20, name: "Order" },
          { value: 80, name: "Click" },
          { value: 100, name: "Show" },
        ],
      },
    ],
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

export default Funnel;
