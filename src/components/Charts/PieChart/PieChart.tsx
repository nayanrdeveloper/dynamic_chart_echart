import React from 'react'
import ReactEcharts from "echarts-for-react";


function PieChart() {
  const option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {
          type:[
            'png',
            'jpg'
          ]
        },
      },
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
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
  )
}

export default PieChart