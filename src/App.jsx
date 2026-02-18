import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./front/Home";
import Login from "./front/Login";
import Dashboard from "./user/Dashboard";
import ProtectedRoute from "./components/user/ProtectedRoutes";
import Level from "./user/Level";
import Transaction from "./user/Transaction";
import StakingCalculator from "./user/StakingCalculator";
import Register from "./front/Register";

function App() {
  return (
    <Routes>

      <Route  element={<MainLayout />}>
         
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Route>
  <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/level" element={<Level />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/roiCalculator" element={<StakingCalculator />} />
  
  </Route>
    </Routes>
  );
}

export default App;
