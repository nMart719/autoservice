import { OrderList } from "../components/orders/OrderList.jsx";
import { OrderDetails } from "../components/orders/OrderDetails.jsx";
// import { getOrdersByCar, getOrdersByClient } from "../utils/orders.js";
import { filterOrders, searchOrders,  } from "../data/orders.js";
import {useState} from 'react';
export function Orders() {
  const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
      status: "All",
      date: "All",
    });
    function handleFilterClick(e) {
    const selectedFilter = e.target.value;
    setFilters((filters) => ({ ...filters, status: selectedFilter }));
    //setIsFilterOpen((isFilterOpen) => !isFilterOpen);
    console.log(e.target.value);
  }

  function handleSearchClick(e) {
    const value = e.target.value;
    setSearch(value);
  }
  
const filteredBySearch = searchOrders(search);
  const filteredOrders = filterOrders(filteredBySearch, filters);
  return <>
  <div id="orders_page">
        <TableToolBar
          table="Clients"
          search={search}
          onSearchChange={handleSearchClick}
          onFilterClick={handleFilterClick}
        ></TableToolBar>
        <OrderList orders={filteredOrders}></OrderList>
      </div>
  <h2>Orders</h2>
    
  </>;
}
