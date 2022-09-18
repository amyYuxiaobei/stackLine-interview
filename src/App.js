import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { Chart } from "./components/Chart";
import ProductInfo from "./components/ProductInfo";
import { Table } from "./components/Table";

export default function App() {
  const data = useSelector((state) => state.salesData[0]);
  const { image, title, subtitle, tags } = data;
  return (
    <div className="App">
      <ProductInfo product={{ image, title, subtitle, tags }} />
      <div className="right">
        <Chart chartData={data.sales} />
        <Table tableData={data.sales} />
      </div>
    </div>
  );
}
