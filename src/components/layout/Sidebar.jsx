import "./Sidebar.css"
export function Sidebar() {
  return (
    <aside>
      <nav>
        <ul>
          <li className="sidebar_menu_item">Dashboard</li>
          <li className="sidebar_menu_item">Cars</li>
          <li className="sidebar_menu_item">Clients</li>
        </ul>
      </nav>
    </aside>
  );
}
