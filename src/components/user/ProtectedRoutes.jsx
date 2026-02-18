import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Common from "./Common";

function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("token");

  return !isAuthenticated ? (
    <>
      <Common/>
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoute;
