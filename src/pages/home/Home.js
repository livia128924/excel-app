import React, { useState, useEffect } from "react";
import Chart from "../../components/charts/Chart";
import Info from "../../components/info/Info";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import * as XLSX from "xlsx";
import { Table } from "react-bootstrap";
function Home() {
  const [items, setItems] = useState([]);

  

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };

  return (
    <div className="home">
      <div className="chart">
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

      <table class="table container">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Nota 1</th>
            <th scope="col">Nota 2</th>
          </tr>
        </thead>
        <tbody>
          {items.map((d) => (
            <tr key={d.Nome}>
              <th>{d.Nome}</th>
              <th>{d.Nota1}</th>
              <td>{d.Nota2}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    <Info />
    <Chart data={items} title="User Analytics" grid dataKey="Nome"/>
    <div className="homeWidgets">
      <WidgetSm  nota={items}/>
      <WidgetLg/>
    </div>
  </div>
  );
}

export default Home;
