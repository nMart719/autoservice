import { useState } from "react";
export function TableToolBar({table, search, setSearch }) {
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    table = String(table).charAt(0).toUpperCase() + String(table).slice(1);
  return (
    <div className="table_header">
        <h2>{table}</h2>
        <div className="table_actions">
          <input
            type="search"
            value={search}
            onFocus={() => setIsSearchExpanded(true)}
            onBlur={() => setIsSearchExpanded(false)}
            className={`search_input${isSearchExpanded ? " expanded" : ""}`}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={isSearchExpanded ? "Search" : ""}
          />

          {/* <button onClick={() => setIsFilterOpen(prev => !prev)}>
            Filter
          </button> */}
        </div>
      </div>
  )}