//import "./Dashboard.css";

import { getOrdersByCar, getOrdersByClient } from "../utils/orders.js";
export function Orders() {
  console.log(getOrdersByCar(1));
  console.log(getOrdersByClient(1));

  return <>
  <h2>Orders</h2>
  
  </>;
}
