import { cars } from "../data/cars";
import { useState } from "react";
import {CarList} from "../components/cars/CarList";
export function Cars() {
  return <CarList cars={cars}></CarList>;
}
