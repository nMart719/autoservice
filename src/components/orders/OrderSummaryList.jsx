import { getCarById, getCarMakeModel } from "../../utils/cars";
import { useNavigate } from "react-router-dom";
export function OrderSummaryList({ orders, showCar }) {
  const navigate = useNavigate();
  const ordersWithCars = orders.map(order => ({
    ...order,
    car: getCarById(order.carId)
}));
  return (
    <div>
      <div>
        {/* <input type="search">Search</input> */}
        {/* <input type="button">Filter</input> */}
      </div>
      <table id="table_order_list">
        <thead>
          <tr>
            {showCar && <th className="text-left">Car</th>}
            <th className="text-left">Description</th>
            <th className="text-left">Date</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {ordersWithCars.map((order) => {
            return (
              <tr
                key={order.id}
                onClick={() => {
                  navigate(`/orders/${order.id}`);
                }}
              >
                {showCar && (
                  <td className="text-left">{getCarMakeModel(order.car)}</td>
                )}
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
