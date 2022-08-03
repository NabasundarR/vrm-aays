import React from "react";
import BarCharts from "../charts/BarCharts";
import LineChart from "../charts/LineChart";
import "react-loading-skeleton/dist/skeleton.css";
import MapChart from "../charts/MapChart";

export default function Report() {
  return (
    <div>
      <div className="charts_diagram">
        <div className="Charts_items">
          <BarCharts />
        </div>
        <div className="Charts_items">
          <LineChart />
        </div>
      </div>
    </div>
  );
}
