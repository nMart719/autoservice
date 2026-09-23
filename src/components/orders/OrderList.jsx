// import { getFullName } from "../../utils/clients";
// import { getCarMakeModel } from "../../utils/cars";
import { useState } from "react";
import { TableHead } from "../ui/TableHead";
import { TableBody } from "../ui/TableBody";
export function OrderList({ orders}) {
    const [sortConfig, setSortConfig] = useState({
      sortField: "",
      sortOrder: "asc",
    });
    const columns = [
      { label: "Car", accessor: "carMakeModel", sortable: false },
      { label: "Client", accessor: "clientName", sortable: false },
      { label: "Description", accessor: "description", sortable: false },
      { label: "Date", accessor: "date", sortable: true },
      { label: "Status", accessor: "status", sortable: true },
    ];
    const handleSorting = (sortField, sortOrder) => {
      setSortConfig({
        sortField: sortField,
        sortOrder: sortOrder,
      });
    };
    const sortedData = orders.sort((a, b) => {
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
{/* <div>
      <div>
      </div>
      <table id="table_order_list">
        <thead>
          <tr>
            <th className="text-left">Car</th>
            <th className="text-left">Client</th>
            <th className="text-left">Description</th>
            <th className="text-left">Date</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr key={order.id} onClick={() => {
              navigate(`/orders/${order.id}`);
            }}>
                <td className="text-left">{getCarMakeModel(order.car)}</td>
                <td className="text-left">{getFullName(order.client)}</td>
                <td className="text-left">{order.description}</td>
                <td className="text-left">{order.date}</td>
                <td className="text-left">{order.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div> */}
