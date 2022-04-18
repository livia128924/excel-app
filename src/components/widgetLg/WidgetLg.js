import { ChartPizza } from "../ChartPIzza";
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Grafico Pizza</h3>

    <ChartPizza/>
    </div>
  );
}