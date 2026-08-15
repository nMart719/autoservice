import { cars } from "../data/cars"

export function getCarsByClient(clientId) {
  return cars.filter(car => car.clientId === clientId)
}

export function getCarMakeModel(car) {
    if (!car) return "Unknown car";
  return `${car.make} ${car.model} `
}

export function getCarById(carId) {
  return cars.find(car => car.id === carId)
}