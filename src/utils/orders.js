import { getCarMakeModel, getCarsByClient } from "../utils/cars"
import { orders } from "../data/orders"
import { cars } from "../data/cars"
import { clients } from "../data/clients"
import { getFullName } from "./clients";
const ordersWithDetails = orders.map(order => {
    const car = cars.find(car => car.id === order.carId);
    const client = clients.find(client => client.id === car?.clientId)
    const carMakeModel = getCarMakeModel(car);
    const clientName = getFullName(client);
    return {
        ...order,
        car,
        client,
        carMakeModel,
        clientName
    };
});

export function getOrdersByCar(carId) {
  return orders.filter(order => order.carId === carId)
}
export function getOrdersByClient(clientId) {
    const carsByClient = getCarsByClient(clientId);
    return carsByClient.flatMap(car =>
        getOrdersByCar(car.id)
    );
}
export function getOrderById(orderId){
    return orders.find((o) => o.id === orderId)
}


export function searchOrders(search) {
  return ordersWithDetails.filter((order) => {
    return Object.values(order).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase()),
    );
  });
}

export function filterOrders(orders, filters) {
  //console.log(cars, filters);
  return orders.filter((order) => {
    const matchesStatus = filters.status === "All" || order.status === filters.status;

    const matchesDate = filters.date === "All" || order.date === filters.date;


    return matchesStatus && matchesDate;
  });
}
