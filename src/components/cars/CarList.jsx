import { useState } from "react";
import { TableHead } from "../ui/TableHead";
import { TableBody } from "../ui/TableBody";
export function CarList({ cars }) {
  const [tableData, setTableData] = useState(cars);
  const columns = [
    { label: "Make", accessor: "make", sortable: true },
    { label: "Model", accessor: "model", sortable: true },
    { label: "VIN", accessor: "vin", sortable: false },
    { label: "Plate number", accessor: "plateNumber", sortable: false },
  ];
  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };
  return (
    <div>
      <table id="table_car_list">
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody columns={columns} tableData={tableData} />
      </table>
    </div>
  );
}
