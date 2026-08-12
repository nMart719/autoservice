import { clients } from "../data/clients"
export function getClientById(clientId) {
  return clients.find(client => client.id === clientId)
}
export function getFullName(client){
  return `${client.name} ${client.surname}`
}
