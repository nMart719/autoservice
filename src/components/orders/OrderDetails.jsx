import { useParams } from "react-router-dom";
import { getCarById } from "../../utils/cars.js";
import { getClientById } from "../../utils/clients.js";
import { CarSummary } from "../cars/CarSummary.jsx";
import { ClientSummary } from "../clients/ClientSummary.jsx";
import { getOrderById } from "../../utils/orders.js";
export function OrderDetails() {
  const {id} = useParams();
  if (id == null) return <></>;
  const order = getOrderById(Number(id));
  
  const car = getCarById(order.carId);
  const client = getClientById(car.clientId);
  return (
    <div className="mt-4!">
      <h2>
        Order #{order.id}
      </h2>
        <div>----------------------</div>
            <div>Status: {order.status}</div>
            <div>Date: {order.date}</div>
            <div>Description: {order.description}</div>
            <div>Vehicle:</div>
            <CarSummary car={car}></CarSummary>
            <div>Client:</div>
            <ClientSummary client={client}></ClientSummary>
    </div>
  );
}
