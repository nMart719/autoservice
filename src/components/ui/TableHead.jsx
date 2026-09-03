import { useState } from "react";
export function TableHead({ columns, handleSorting }) {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const handleSortingChange = (accessor) => {
    console.log("handleSortingChange", accessor);
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };
  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }) => (
          <th
            key={accessor}
            className={`text-left sort ${sortField === accessor ? (order === "asc" ? "sort_asc" : "sort_desc") : ""}`}
            onClick={sortable ? () => handleSortingChange(accessor) : null}
          >
            {label}
            <span className="sort-icon"></span>
          </th>
        ))}
      </tr>
    </thead>
  );
}
