import { useParams } from "react-router-dom";
import { orders } from "../../data/orders.js";
import { getCarById } from "../../utils/cars.js";
import { getClientById } from "../../utils/clients.js";
import { CarSummary } from "../cars/CarSummary.jsx";
import { ClientSummary } from "../clients/ClientSummary.jsx";
export function OrderDetails() {
  const {id} = useParams();
  console.log(Number(id));
  if (id == null) return <></>;
  const order = orders.find((o) => o.id === Number(id));
  
  const car = getCarById(order.carId);
  console.log(car.clientId)
  const client = getClientById(car.clientId);
  console.log(client.id)
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
