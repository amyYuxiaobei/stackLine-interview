import { Line } from "react-chartjs-2";
import React from "react";
import "./chart.css";
interface Sale {
  retailSales: number;
  retailerMargin: number;
  weekEnding: string;
  wholesaleSales: number;
  unitsSold: number;
}
interface ChartProps {
  chartData: Sale[];
}

export const Chart = ({ chartData }: ChartProps) => {
  let retailSalesData = [];
  let retailerMarginData = [];
  for (let i = 0; i + 3 < chartData.length; i = i + 4) {
    let monthlyRetailSales =
      chartData[i].retailSales +
      chartData[i + 1].retailSales +
      chartData[i + 2].retailSales +
      chartData[i + 3].retailSales;

    let monthlyRetailerMargin =
      chartData[i].retailerMargin +
      chartData[i + 1].retailerMargin +
      chartData[i + 2].retailerMargin +
      chartData[i + 3].retailerMargin;
    retailSalesData.push(monthlyRetailSales);
    retailerMarginData.push(monthlyRetailerMargin);
  }
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "retailSales",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(0,150,255,0.4)",
        borderColor: "rgba(0,150,255,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(0,150,255,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(0,150,255,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: retailSalesData
      },
      {
        label: "retailerMargin",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(155,147,179,0.4)",
        borderColor: "rgba(155,147,179,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(155,147,179,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(155,147,179,1)",
        pointHoverBorderColor: "rgba(220,220,100,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: retailerMarginData
      }
    ]
  };

  return (
    <div className="chart">
      <Line
        data={data}
        type={{}}
        options={{
          plugins: { title: { display: true, text: "Retail Sales" } }
        }}
      />
    </div>
  );
};
