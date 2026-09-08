import { clients } from "../data/clients"
import { cars } from "../data/cars"
const clientsWithCounts = (() => {
    return clients.map(client => ({
      ...client,
      carsCount: cars.filter(c => c.clientId === client.id).length
    }))
  }, [clients, cars]);
export function getClientById(clientId) {
  return clients.find(client => client.id === clientId)
}
export function getFullName(client){
    if (!client) return "Unknown client";
  return `${client.name} ${client.surname}`
}

export function searchClients(search) {
  return clientsWithCounts.filter((client) => {
    return Object.values(client).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase()),
    );
  });
}

export function filterClients(clients, filters) {
  //console.log(cars, filters);
  return clientsWithCounts.filter((client) => {
    const matchesName = filters.name === "All" || getFullName(client) === filters.name;

    const matchesCarsCount = filters.carsCount === "All" || client.carsCount === filters.carsCount;


    return matchesName && matchesCarsCount;
  });
}
