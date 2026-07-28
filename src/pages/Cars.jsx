import { cars } from "../data/cars";
// import { useState } from "react";
import {CarList} from "../components/cars/CarList";
import "../components/cars/Cars.css";
export function Cars() {
  return <div id="cars-page">
  <h2>Cars</h2>
  <CarList cars={cars}></CarList>
  </div>;
}
