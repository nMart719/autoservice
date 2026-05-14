import "./Dashboard.css"
import { ClientDetails } from "../components/clients/ClientDetails";
import { ClientList } from "../components/clients/ClientList";
import { clients } from "../data/clients";
import { Sidebar } from "../components/layout/Sidebar";
import { Header } from "../components/layout/Header";
import { useState } from "react";
export default function Dashboard() {
  const [selectedClientId, setSelectedClientId] = useState(null);
  console.log(selectedClientId, typeof selectedClientId);
  return (
    <>
      <Header />
      <main>
        <Sidebar></Sidebar>
        <section>
          <ClientList
            clients={clients}
            onSelect={setSelectedClientId}
          ></ClientList>
          <ClientDetails clientId={selectedClientId}></ClientDetails>
        </section>
      </main>
    </>
  );
}
