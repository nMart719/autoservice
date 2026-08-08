import { getCarsByClient } from "../utils/cars"
import { orders } from "../data/orders"

export function getOrdersByCar(carId) {
  return orders.filter(order => order.carId === carId)
}
export function getOrdersByClient(clientId) {
    const carsByClient = getCarsByClient(clientId);
    return carsByClient.flatMap(car =>
        getOrdersByCar(car.id)
    );
}