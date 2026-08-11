import { orders } from "../../data/orders.js";
import { getCarById } from "../../utils/cars.js";
import { getClientById, getFullName } from "../../utils/clients.js";
export function OrderDetails({ orderId }) {
  if (orderId == null) return <></>;
  const order = orders.find((o) => o.id === Number(orderId));
  
  const car = getCarById(order.carId);
  console.log(car.clientId)
  const client = getClientById(car.clientId);
  return (
    <div className="mt-4!">
      <h2>
        {order.id} status:{order.status}
      </h2>
        
          <div key={order.id}>
            <table>
              <tbody>
                <tr>
                  <td>Client name</td>
                  <td>{getFullName(client)}</td>
                </tr>
                <tr>
                  <td>Model</td>
                  <td>{car.model}</td>
                </tr>
                <tr>
                  <td>VIN</td>
                  <td>{car.vin}</td>
                </tr>
                <tr>
                  <td>Plate number</td>
                  <td>{car.plateNumber}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{order.description}</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>{order.date}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{order.status}</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  );
}
