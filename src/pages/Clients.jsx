import { ClientDetails } from "../components/clients/ClientDetails";
import { ClientList } from "../components/clients/ClientList";
import { useState } from "react";
import { searchClients, filterClients } from "../utils/clients";
import { TableToolBar } from "../components/ui/TableToolbar";
export function Clients() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    name: "All",
    carsCount: "All",
  });
  function handleFilterClick(e) {
    const selectedFilter = e.target.value;
    setFilters((filters) => ({ ...filters, name: selectedFilter }));
    //setIsFilterOpen((isFilterOpen) => !isFilterOpen);
    console.log(e.target.value);
  }

  function handleSearchClick(e) {
    const value = e.target.value;
    setSearch(value);
  }

  const filteredBySearch = searchClients(search);
  const filteredClients = filterClients(filteredBySearch, filters);
  return (
    <div id="clients_page">
      <TableToolBar
        table="Clients"
        search={search}
        onSearchChange={handleSearchClick}
        onFilterClick={handleFilterClick}
      ></TableToolBar>
      <ClientList clients={filteredClients}></ClientList>
    </div>
  );
}
