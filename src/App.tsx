import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/Sidebar/SideBar";
import { Routes, Route } from "react-router-dom";
import BarChart from "./components/Charts/BarChart/BarChart";
import PieChart from "./components/Charts/PieChart/PieChart";
import Doughnut from "./components/Charts/Doughnut/Doughnut";
import TangentialPolar from "./components/Charts/TangentialPolar/TangentialPolar";
import Treemap from "./components/Charts/Treemap/Treemap";
import Funnel from "./components/Charts/Funnel/Funnel";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="flex">
        <div>
          <SideBar open={sideBarOpen} setSideBarOpen={setSideBarOpen} />
        </div>
        <div>
          <NavBar open={sideBarOpen} setSideBarOpen={setSideBarOpen} />
          <Routes>
            <Route index element={<BarChart />} path="/" />
            <Route index element={<PieChart />} path="/pie" />
            <Route index element={<Doughnut />} path="/doughnut" />
            <Route index element={<TangentialPolar />} path="/tangentialPolar" />
            <Route index element={<Treemap />} path="/treemap" />
            <Route index element={<Funnel />} path="/funnel" />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
