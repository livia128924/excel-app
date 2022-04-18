import React from "react";
import Chart from "../../components/charts/Chart";
import Info from "../../components/info/Info";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

function Home() {

  return (
    <div className="home">
    <Info />
    <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    <div className="homeWidgets">
      <WidgetSm/>
      <WidgetLg/>
    </div>
  </div>
  );
}

export default Home;
