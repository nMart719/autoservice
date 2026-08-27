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
  //const [filterSelected, setFilterSelected] = useState("All");
  //const [isFilterOpen, setIsFilterOpen] = useState(false);

  function handleFilterClick(e) {
    const selectedFilter = e.target.value;
    setFilters(filters => ({ ...filters, make: selectedFilter }));
    //setIsFilterOpen((isFilterOpen) => !isFilterOpen);
    console.log(e.target.value);
  }

  function handleSearchClick(e) {
    const value = e.target.value;
    setSearch(value);
    //setIsFilterOpen((isFilterOpen) => !isFilterOpen);
    console.log(e.target.value);
  }

  const filteredBySearch = searchCars(search);
  console.log("filteredBySearch", filteredBySearch);
  const filteredCars = filterCars(filteredBySearch, filters);
console.log("filteredCars", filteredCars);
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
