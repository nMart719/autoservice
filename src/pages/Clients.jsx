
import { ClientDetails } from "../components/clients/ClientDetails";
import { ClientList } from "../components/clients/ClientList";
import { clients } from "../data/clients";
import { useState, useMemo } from "react";
import { cars } from "../data/cars"
export function Clients() {
const clientsWithCounts = useMemo(() => {
    return clients.map(client => ({
      ...client,
      carsCount: cars.filter(c => c.clientId === client.id).length
    }))
  }, [clients, cars]);
  const [selectedClientId, setSelectedClientId] = useState(null);
  return (
    <>
      <ClientList clients={clientsWithCounts} onSelect={setSelectedClientId}></ClientList>
      <ClientDetails clientId={selectedClientId}></ClientDetails>
    </>
  );
}
