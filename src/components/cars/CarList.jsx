import { useNavigate } from "react-router-dom";
import {useState} from "react";
export function CarList({ cars }) {
  const navigate = useNavigate();
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor) => {
    const newOrder = accessor === sortField && order === "asc" ? "desc" : "asc";

    setSortField(accessor);
    setOrder(newOrder);
  };
  const sortedCars = [...cars].sort((a, b) => {
    if (!sortField) return 0;

    const valueA = a[sortField]?.toString() ?? "";
    const valueB = b[sortField]?.toString() ?? "";

    return (
      valueA.localeCompare(valueB, "en", {
        numeric: true,
      }) * (order === "asc" ? 1 : -1)
    );
  });
  if (cars.length === 0)
    return <div style={{ width: "100%" }}>No cars found</div>;
  return (
    <div>
      <table id="table_car_list">
        <thead>
          <tr>
            <th
              className={`text-left sort ${sortField === "make" ? (order === "asc" ? "sort_asc" : "sort_desc") : ""}`}
              onClick={() => handleSortingChange("make")}
            >
              Make<span className="sort-icon"></span>
            </th>
            <th
              className={`text-left sort ${sortField === "model" ? (order === "asc" ? "sort_asc" : "sort_desc") : ""}`}
              onClick={() => handleSortingChange("model")}
            >
              Model<span className="sort-icon"></span>
            </th>
            <th
              className="text-left"
              onClick={() => handleSortingChange("vin")}
            >
              VIN<span className="sort-icon"></span>
            </th>
            <th
              className="text-left"
              onClick={() => handleSortingChange("plateNumber")}
            >
              Plate number<span className="sort-icon"></span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedCars.map((car) => {
            return (
              <tr
                key={car.id}
                onClick={() => {
                  navigate(`/cars/${car.id}`);
                }}
              >
                <td className="text-left">{car.make}</td>
                <td className="text-left">{car.model}</td>
                <td className="text-left">{car.vin}</td>
                <td className="text-left">{car.plateNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
