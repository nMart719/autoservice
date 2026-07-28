export function CarList({ cars }) {
  console.log(cars);
  return (
    <div>
      <div>
        {/* <input type="search">Search</input> */}
        {/* <input type="button">Filter</input> */}
      </div>
      <table id="table_car_list">
        <thead>
          <tr>
            <th className="text-left">Make:</th>
            <th className="text-left">Model:</th>
            <th className="text-left">VIN:</th>
            <th className="text-left">Plate number:</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => {
            return (
              <tr key={car.id}>
                <td className="text-left">{car.make}</td>
                <td className="text-left">{car.model}</td>
                <td className="text-left">{car.vin}</td>
                <td className="text-left">{car.plateNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
