import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function CarList({ cars }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredCars = cars.filter((car) => {
    Object.values(car).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase()),
    );
  });

  return (
    <div>
      <div>
        <input
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="search"
        ></input>
        {/* <input type="button">Filter</input> */}
      </div>
      <table id="table_car_list">
        <thead>
          <tr>
            <th className="text-left">Make</th>
            <th className="text-left">Model</th>
            <th className="text-left">VIN</th>
            <th className="text-left">Plate number</th>
          </tr>
        </thead>
        <tbody>
          {filteredCars.length > 0
            ? filteredCars.map((car) => {
                return (
                  <tr
                    key={car.id}
                    onClick={() => {
                      navigate(`/cars/${car.id}`);
                    }}
                  >
                    <td className="text-left">{car.make}</td>
                    <td className="text-left">{car.model}</td>
                    <td className="text-left">{car.vin}</td>
                    <td className="text-left">{car.plateNumber}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}
