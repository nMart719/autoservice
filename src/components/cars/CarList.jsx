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
            <th>Make:</th>
            <th>Model:</th>
            <th>VIN:</th>
            <th>Plate number:</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => {
            return (
              <tr key={car.id}>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.vin}</td>
                <td>{car.plateNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
