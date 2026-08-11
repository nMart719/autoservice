import { clients } from "../data/clients"
export function getClientById(clientId) {
  return clients.find(client => client.id === clientId)
}
export const getFullName = (client) =>
  `${client.name} ${client.surname}`
