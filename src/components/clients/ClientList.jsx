//import { getFullName } from "../../utils/clients";
import { useState } from "react";
import { TableHead } from "../ui/TableHead";
import { TableBody } from "../ui/TableBody";
export function ClientList({ clients }) {
  const [sortConfig, setSortConfig] = useState({
      sortField: "",
      sortOrder: "asc",
    });
    const columns = [
      { label: "Name", accessor: "name", sortable: true },
      { label: "Phone", accessor: "phone", sortable: false },
      { label: "Email", accessor: "email", sortable: false },
      { label: "Cars count", accessor: "carsCount", sortable: true },
    ];
    const handleSorting = (sortField, sortOrder) => {
      setSortConfig({
        sortField: sortField,
        sortOrder: sortOrder,
      });
    };
    const sortedData = clients.sort((a, b) => {
      const { sortField, sortOrder } = sortConfig;
  
      if (!sortField) return 0;
      if (a[sortField] == null && b[sortField] == null) return 0;
      if (a[sortField] == null) return 1;
      if (b[sortField] == null) return -1;
      return (
        a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
          numeric: true,
        }) * (sortOrder === "asc" ? 1 : -1)
      );
    });
    return (
      <div>
        <table id="table_clients_list">
          <TableHead columns={columns} handleSorting={handleSorting} />
          <TableBody columns={columns} tableData={sortedData} path={"clients"}/>
        </table>
      </div>
    );
}
