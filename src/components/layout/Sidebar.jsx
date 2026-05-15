import "./Sidebar.css"
import { Link } from "react-router-dom"
export function Sidebar({isShow}) {
  return (
    <aside className={isShow ? "showSidebar" : ''}>
      <nav>
        <ul>
          <li className="sidebar_menu_item"><Link to="/">Dashboard</Link></li>
          <li className="sidebar_menu_item"><Link to="/cars">Cars</Link></li>
          <li className="sidebar_menu_item"><Link to="/clients">Clients</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
