import "./Dashboard.css";
import { clients } from "../data/clients";
import { cars } from "../data/cars";
export function Dashboard() {
  
  return <>
  <h2>Dashboard</h2>
  <div className="cards_wrapper">
  <div className="dashboard_card"><span>Clients: {clients.length}</span></div>
  <div className="dashboard_card"><span>Cars: {cars.length}</span></div>
  </div>
  </>;
}
