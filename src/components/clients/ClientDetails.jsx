import { getCarsByClient } from "../../utils/cars.js";
import { clients } from "../../data/clients.js";
export function ClientDetails({ clientId }) {
  console.log(clientId, typeof clientId);
  if (clientId == null) return <></>;
  const client = clients.find((c) => c.id === Number(clientId));

  const cars = getCarsByClient(client.id);
  return (
    <div>
      <h2>
        {client.name} {client.surname} {client.phone} {client.email} Cars:{cars.length}
      </h2>
      {cars.map((car) => {
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
      })}
    </div>
  );
}
