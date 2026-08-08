import "./Sidebar.css"
import { Link } from "react-router-dom"
export function Sidebar({isShow}) {
  return (
    <aside className={isShow ? "showSidebar" : ''}>
      <nav>
        <ul>
          <li className="sidebar_menu_item"><Link to="/">Dashboard</Link></li>
          <hr></hr>
          <li className="sidebar_menu_item"><Link to="/cars">Cars</Link></li>
          <hr></hr>
          <li className="sidebar_menu_item"><Link to="/clients">Clients</Link></li>
          <hr></hr>
          <li className="sidebar_menu_item"><Link to="/orders">Orders</Link></li>
          <hr></hr>
        </ul>
      </nav>
    </aside>
  );
}
