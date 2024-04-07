import React from "react";
import "./home.scss";
import Featuredinfo from "../../featuredinfo/Featuredinfo";
import Chart from "../../chart/Chart";
import { userData } from "../../dummydata";
import Widgetsm from "../../widgetsm/Widgetsm";
import WidgetsL from "../../widgetsL/WidgetsL";
export default function Home() {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart data={userData} title={"User Analytics"} grid datakey={"Active User"} />
      <div className="homeWidgets">
        <Widgetsm/>
        <WidgetsL/>
      </div>
    </div>
  );
}