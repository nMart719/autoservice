import { cars } from "../data/cars"

export function getCarsByClient(clientId) {
  return cars.filter(car => car.clientId === clientId)
}