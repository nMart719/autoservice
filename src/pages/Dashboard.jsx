import "./Dashboard.css"
import { ClientDetails } from "../components/clients/ClientDetails";
import { ClientList } from "../components/clients/ClientList";
import { clients } from "../data/clients";
import { Sidebar } from "../components/layout/Sidebar";
import { Header } from "../components/layout/Header";
import { useState } from "react";
export default function Dashboard() {
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [sidebarShow, setSidebarShow] = useState(false);
  console.log(sidebarShow);
  return (
    <>
      <Header isSidebarShow={sidebarShow} onToggle={setSidebarShow}/>
      <main>
        <Sidebar isShow={sidebarShow}></Sidebar>
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
