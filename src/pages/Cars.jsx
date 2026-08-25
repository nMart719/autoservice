import { cars } from "../data/cars";
import { useState } from "react";
import {CarList} from "../components/cars/CarList";
import "../components/cars/Cars.css";
import { TableToolBar } from "../components/ui/TableToolBar";
  //const [isFilterOpen, setIsFilterOpen] = useState(false);

  //
export function Cars() {
 const [search, setSearch] = useState("");
 const filteredCars = cars.filter((car) => {
    return Object.values(car).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase()),
    );
  });
  return <div id="cars_page">
     <TableToolBar table="Cars" search={search} setSearch={setSearch}></TableToolBar>
  <CarList cars={filteredCars}></CarList>
  </div>;
}
