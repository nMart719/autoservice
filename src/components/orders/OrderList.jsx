import { getFullName } from "../../utils/clients";
import { getCar } from "../../utils/cars";
export function OrderList({ orders, onSelect }) {
    
  return (
    <div>
      <div>
        {/* <input type="search">Search</input> */}
        {/* <input type="button">Filter</input> */}
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
              onSelect(order.id);
            }}>
                <td className="text-left">{getCar(order.car)}</td>
                <td className="text-left">{getFullName(order.client)}</td>
                <td className="text-left">{order.description}</td>
                <td className="text-left">{order.date}</td>
                <td className="text-left">{order.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
