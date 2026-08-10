import { orders } from "../../data/orders.js";
export function OrderDetails({ orderId }) {
  const order = orders.find((c) => c.id === Number(orderId));
  
  if (orderId == null) return <></>;
  return (
    <div className="mt-4!">
      <h2>
        {order.id} status:{order.status}
      </h2>
        
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
