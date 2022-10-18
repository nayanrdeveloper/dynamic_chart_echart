import React from "react";
import ReactEcharts from "echarts-for-react";

function Treemap() {
  const option = {
    series: [
      {
        type: "treemap",
        data: [
          {
            name: "nodeA",
            value: 10,
            children: [
              {
                name: "nodeAa",
                value: 4,
              },
              {
                name: "nodeAb",
                value: 6,
              },
            ],
          },
          {
            name: "nodeB",
            value: 20,
            children: [
              {
                name: "nodeBa",
                value: 20,
                children: [
                  {
                    name: "nodeBa1",
                    value: 20,
                  },
                ],
              },
            ],
          },
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

export default Treemap;
