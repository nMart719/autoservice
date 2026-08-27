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

export function searchCars(search) {
  return cars.filter((car) => {
    return Object.values(car).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase()),
    );
  });
}

export function filterCars(cars, filters) {
  console.log(cars, filters)
  return cars.filter((car) => {
    const matchesMake =
      filters.make === "All" || car.make === filters.make;

    const matchesModel =
      filters.model === "All" || car.model === filters.model;

    const matchesClient =
      filters.clientId === "All" ||
      car.clientId === Number(filters.clientId);

    return matchesMake && matchesModel && matchesClient;
  });
}