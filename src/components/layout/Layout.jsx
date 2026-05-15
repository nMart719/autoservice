import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom"
export function Layout() {
  const [sidebarShow, setSidebarShow] = useState(false);
  return (
    <>
      <Header isSidebarShow={sidebarShow} onToggle={setSidebarShow}/>
      <main>
        <Sidebar isShow={sidebarShow}></Sidebar>
        <section>
          <Outlet/>
        </section>
      </main>
    </>
  );
}
