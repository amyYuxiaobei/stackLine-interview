import DataTable from "react-data-table-component";
import React from "react";
import NumberFormat from "react-number-format";
import "./table.css";

interface Sale {
  retailSales: number;
  retailerMargin: number;
  weekEnding: string;
  wholesaleSales: number;
  unitsSold: number;
}
interface TableProps {
  tableData: Sale[];
}
const getCurrency = (val) => {
  return (
    <div>
      <NumberFormat
        value={val}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};
const columns = [
  {
    name: "WEEK ENDING",
    sortable: true,
    selector: "weekEnding"
  },
  {
    name: "RETAIL SALES",
    sortable: true,
    selector: "retailSales",
    cell: (val) => getCurrency(val.retailSales)
  },
  {
    name: "WHOLESALE SALES",
    sortable: true,
    selector: "wholesaleSales",
    cell: (val) => getCurrency(val.wholesaleSales)
  },
  {
    name: "UNITS SOLD",
    sortable: true,
    selector: "unitsSold"
  },
  {
    name: "RETAILER MARGIN",
    sortable: true,
    selector: "retailerMargin",
    cell: (val) => getCurrency(val.retailerMargin)
  }
];
export const Table = ({ tableData }: TableProps) => {
  return (
    <div className="table">
      <DataTable columns={columns} data={tableData} pagination />
    </div>
  );
};
