import { getCarMakeModel } from "../../utils/cars";
import { Link } from "react-router-dom"
export function CarSummary({car}){
    return(
        <div>
        <div>{getCarMakeModel(car)}</div>
        <Link to={`/cars/${car.id}`}>View car</Link>
    </div>
    );
}