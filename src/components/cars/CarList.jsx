import cars from "../../data/cars.js";
function CarList(){
return(
    <div>
        {cars.map(car=>{
            <div key={car.id}>
                {car.Model} {car.vin} {car.plateNumber}
            </div>
        })}
    </div>
);
}

export default CarList;