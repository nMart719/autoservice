//import "./Dashboard.css";
import { OrderList } from "../components/orders/OrderList.jsx";
// import { getOrdersByCar, getOrdersByClient } from "../utils/orders.js";
import { orders } from "../data/orders.js";
import { cars } from "../data/cars.js";
import { clients } from "../data/clients.js";
import { useState } from "react";
export function Orders() {
  const ordersWithDetails = orders.map(order => {
    const car = cars.find(car => car.id === order.carId);
    const client = clients.find(client => client.id = car.clientId)
    return {
        ...order,
        car,
        client
    };
});
const [selectedOrderId, setSelectedOrderId] = useState(null);
  return <>
  <h2>Orders</h2>
    <OrderList orders={ordersWithDetails} onSelect={setSelectedOrderId}></OrderList>
    <OrderDetails orderId = {selectedOrderId}></OrderDetails>
  </>;
}
