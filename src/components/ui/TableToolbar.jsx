import { useState } from "react";
export function TableToolBar({ table, search, onSearchChange, onFilterClick }) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  table = String(table).charAt(0).toUpperCase() + String(table).slice(1);
  return (
    <div className="table_header">
      <h2>{table}</h2>
      <div className="table_actions">
        <input
          type="search"
          value={search}
          name="search"
          onFocus={() => setIsSearchExpanded(true)}
          onBlur={() => setIsSearchExpanded(false)}
          className={`search_input${isSearchExpanded ? " expanded" : ""}`}
          onChange={onSearchChange}
          placeholder={isSearchExpanded ? "Search" : ""}
        />

        <button className="filter_button" >
          Filter
        </button>
        <div className="filter_dropdown">
          <label>Filter</label>
          <select name="filter" id="filter" onChange={onFilterClick}>
            <option value="All">All</option>
            <option value="BMW">BMW</option>
            <option value="Audi">Audi</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Toyota">Toyota</option>
          </select>
        </div>
      </div>
    </div>
  );
}
