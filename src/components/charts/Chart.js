import "./chart.css";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

function Chart(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Todas as notas",
      },
    },
  };

  const labels = [
    "Adriano",
    "Bruno",
    "Carlos",
    "Daniel",
    "Flávia",
    "Gabriel",
    "Laís",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Nota 1",
        data: props.data.Nota1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Nota2",
        data:  props.data.Nota2,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="chart">
      <Bar options={options} data={data} />
    </div>
  );
}

export default Chart;
