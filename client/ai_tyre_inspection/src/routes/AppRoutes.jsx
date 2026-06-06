import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Vehicles from "../pages/Vehicle";
import Inspection from "../pages/Inspection";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/inspections" element={<Inspection/>}/>
    </Routes>
  );
};

export default AppRoutes;