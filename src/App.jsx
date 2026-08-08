import "./styles/variables.css"
import "./styles/reset.css";
import "./styles/style.css";
import "./styles/typography.css";
import "./styles/table.css";
import "./styles/page.css";
import { Layout } from "./components/layout/Layout";
import { Clients } from "./pages/Clients";
import { Cars } from "./pages/Cars";
import { Dashboard } from "./pages/Dashboard";
import { Orders } from "./pages/Orders";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="clients" element={<Clients />} />
          <Route path="cars" element={<Cars />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
