
import { ClientDetails } from "../components/clients/ClientDetails";
import { ClientList } from "../components/clients/ClientList";
import { clients } from "../data/clients";
import { useState } from "react";
export function Clients() {
  console.log("clients")
  const [selectedClientId, setSelectedClientId] = useState(null);
  return (
    <>
      <ClientList clients={clients} onSelect={setSelectedClientId}></ClientList>
      <ClientDetails clientId={selectedClientId}></ClientDetails>
    </>
  );
}
