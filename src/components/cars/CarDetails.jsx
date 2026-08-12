import { getCarMakeModel } from "../../utils/cars.js";
import { cars} from "../../data/cars.js";
import {CarList} from "../../components/cars/CarList";
import { useParams } from "react-router-dom";
export function CarDetails() {
  
  const { id } = useParams()
  const car = cars.find(c => c.id === parseInt(id))

  if (!car) return <div>Car is not found</div>

  return (
    <div className="mt-4!">
      <h2>
        {getCarMakeModel(car)}
      </h2>
        <div>Car details</div>
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
