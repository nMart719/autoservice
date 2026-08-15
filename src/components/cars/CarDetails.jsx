import { getCarById, getCarMakeModel } from "../../utils/cars.js";
import { CarList } from "../../components/cars/CarList";
import { getOrdersByCar } from "../../utils/orders.js";
import { useParams } from "react-router-dom";
import { OrderSummaryList } from "../orders/OrderSummaryList.jsx";
import { ClientSummary } from "../clients/ClientSummary.jsx";
import { getClientById } from "../../utils/clients.js";
export function CarDetails() {
  const { id } = useParams();
  const car = getCarById(Number(id));
  if (!car) return <div>Car is not found</div>;
  const orders = getOrdersByCar(car.id);
  console.log(car.clientId);
  return (
    <div className="mt-4!">
      <h2>{getCarMakeModel(car)}</h2>
      <div>----------------------</div>
      <div>VIN: {car.vin}</div>
      <div>Plate number: {car.plateNumber}</div>
      <div>--------Owner:--------</div>
      <ClientSummary
        client={getClientById(car.clientId)}
      ></ClientSummary>
      <div>-------Service history-------</div>
      <OrderSummaryList orders={orders} showCar={false}></OrderSummaryList>
    </div>
  );
}
