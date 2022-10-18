import React from "react";
import ReactEcharts from "echarts-for-react";

function BarChart() {
  const style = {
    height: "90vh",
    width: "100vw",
  };

  const option = {
    // color: [
    //   'pink',
    //   '#2f4554',
    //   '#61a0a8',
    //   '#d48265',
    //   '#91c7ae',
    //   '#749f83',
    //   '#ca8622',
    //   '#bda29a',
    //   '#6e7074',
    //   '#546570',
    //   '#c4ccd3'
    // ],
    title: {
      text: "Nayan Chart",
      subtext: "This chart all time great",
    },
    legend: {
      show: true,
    },
    labelLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.3)'
      },
      smooth: 0.2,
      length: 10,
      length2: 20
    },
    tooltip: {
      show: true,
    },
    grid: {
      show: true,
      borderColor: "#000",
    },
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    },

    xAxis: {
      show: true,
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      alignTicks: true,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
        color: [
          "#2f4554",
          "#61a0a8",
          "#d48265",
          "#91c7ae",
          "#749f83",
          "#ca8622",
          "#bda29a",
          "#6e7074",
          "#546570",
          "#c4ccd3",
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

export default BarChart;
