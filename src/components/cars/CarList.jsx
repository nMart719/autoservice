export function CarList({cars}){
    console.log(cars);
return(
    <div>
        {cars.map((car) => {
        return (
          <div key={car.id}>
            <table>
              <tbody>
                <tr>
                  <td>Make:</td>
                  <td>{car.make}</td>
                </tr>
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

