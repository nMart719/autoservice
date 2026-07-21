import "./styles/variables.css"
import "./styles/style.css";
import { Layout } from "./components/layout/Layout";
import { Clients } from "./pages/Clients";
import { Cars } from "./pages/Cars";
import { Dashboard } from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="clients" element={<Clients />} />
          <Route path="cars" element={<Cars />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
