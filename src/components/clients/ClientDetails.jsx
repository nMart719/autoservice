import { getCarsByClient } from "../../utils/cars.js";
import {CarList} from "../../components/cars/CarList";
import { useParams } from "react-router-dom";
import { OrderSummaryList } from "../orders/OrderSummaryList.jsx";
import { getOrdersByClient } from "../../utils/orders.js";
import { getClientById } from "../../utils/clients.js";
export function ClientDetails() {
  const { id } = useParams()
  if (id == null) return <></>;
  const client = getClientById(Number(id));
  const cars = getCarsByClient(client.id);
  const orders = getOrdersByClient(client.id);
  return (
    <div className="mt-4!">
      <h2>
        {client.name} {client.surname} {client.phone} {client.email} Cars:{cars.length}
      </h2>
        <CarList cars={cars}></CarList>
        <div>--------Orders-----------</div>
        <OrderSummaryList orders={orders} showCar={true}></OrderSummaryList>
      {/* {cars.map((car) => {
        return (
          <div key={car.id}>
            <table>
              <tbody>
                <tr>
                  <td>Model:</td>
                  <td>{car.model}</td>
                </tr>
                <tr>
                  <td>VIN:</td>
                  <td>{car.vin}</td>
                </tr>
                <tr>
                  <td>Plate number:</td>
                  <td>{car.plateNumber}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })} */}
    </div>
  );
}
