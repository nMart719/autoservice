import { useState } from "react";
import { CarList } from "../components/cars/CarList";
import "../components/cars/Cars.css";
import { TableToolBar } from "../components/ui/TableToolBar";
import { filterCars, searchCars } from "../utils/cars";
//
export function Cars() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    make: "All",
    model: "All",
    clientId: "All",
  });

  function handleFilterClick(e) {
    const selectedFilter = e.target.value;
    setFilters((filters) => ({ ...filters, make: selectedFilter }));
    //setIsFilterOpen((isFilterOpen) => !isFilterOpen);
    console.log(e.target.value);
  }

  function handleSearchClick(e) {
    const value = e.target.value;
    setSearch(value);
  }

  const filteredBySearch = searchCars(search);
  const filteredCars = filterCars(filteredBySearch, filters);
  return (
    <div id="cars_page">
      <TableToolBar
        table="Cars"
        search={search}
        onSearchChange={handleSearchClick}
        onFilterClick={handleFilterClick}
      ></TableToolBar>
      <CarList cars={filteredCars}></CarList>
    </div>
  );
}
