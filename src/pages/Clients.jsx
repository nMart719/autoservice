
import { ClientDetails } from "../components/clients/ClientDetails";
import { ClientList } from "../components/clients/ClientList";
import { clients } from "../data/clients";
import {  useMemo } from "react";
import { cars } from "../data/cars"
export function Clients() {
const clientsWithCounts = useMemo(() => {
    return clients.map(client => ({
      ...client,
      carsCount: cars.filter(c => c.clientId === client.id).length
    }))
  }, [clients, cars]);
  return (
    <>
    <h2>Clients</h2>
      <ClientList clients={clientsWithCounts}></ClientList>
    </>
  );
}
