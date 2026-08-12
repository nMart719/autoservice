import { orders } from "../../data/orders.js";
import { getCarById } from "../../utils/cars.js";
import { getClientById } from "../../utils/clients.js";
import { CarSummary } from "../cars/CarSummary.jsx";
import { ClientSummary } from "../clients/ClientSummary.jsx";
export function OrderDetails({ orderId }) {
  if (orderId == null) return <></>;
  const order = orders.find((o) => o.id === Number(orderId));
  
  const car = getCarById(order.carId);
  console.log(car.clientId)
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
