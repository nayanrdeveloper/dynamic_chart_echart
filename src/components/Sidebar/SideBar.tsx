import React from "react";
import { IconType } from "react-icons";
import { AiOutlineBarChart, AiFillPieChart } from "react-icons/ai";
import { BsBarChartSteps } from "react-icons/bs";
import { Link } from 'react-router-dom';

function SideBar(props: any) {
  console.log(props);

  interface itemType {
    name: String;
    to: String;
    icon: IconType;
  }
  const itemList: itemType[] = [
    {
      name: "Bar",
      to: "/",
      icon: AiOutlineBarChart,
    },
    {
      name: "Column",
      to: "/colum",
      icon: BsBarChartSteps,
    },
    {
      name: "Pie",
      to: "/pie",
      icon: AiFillPieChart,
    },
    {
      name: "Doughnut",
      to: "/doughnut",
      icon: AiFillPieChart,
    },
    {
      name: "TangentialPolar",
      to: "/tangentialPolar",
      icon: AiFillPieChart,
    },
    {
      name: "TreeMap",
      to: "/treemap",
      icon: AiFillPieChart,
    },
    {
      name: "Funnel",
      to: "/funnel",
      icon: AiFillPieChart,
    },
  ];
  return (
    <div
      className={`bg-sidebar text-white h-screen flex flex-col px-2 items-center py-3 ${
        props.open ? "w-36" : "w-10"
      } duration-300`}
    >
      <ul className="flex flex-col gap-2">
        {itemList &&
          itemList.map((item: itemType) => {
            return (
              <li className="p-1 cursor-pointer hover:text-white duration-300 hover:bg-slate-300 rounded-md text-center">
                <Link to={`${item.to}`}>
                <span className="flex gap-2">
                  <item.icon />
                  <span className={props.open ? "" : "hidden"}>
                    {item.name}
                  </span>
                </span>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default SideBar;
