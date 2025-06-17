// testing phase 
/*
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
  allowedRoles?: string[]; // optional role check
}

function ProtectedRoute({ children, allowedRoles }: Props) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role || "")) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
*/


// app.tsx
/*
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login_page";
import AdminDashboard from "./pages/admin_dashboard";
import ItSuperAdmin from "./pages/it_super_admin";
import UsersDashboard from "./pages/users_dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/admin_dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/it_super_admin"
          element={
            <ProtectedRoute allowedRoles={["it"]}>
              <ItSuperAdmin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/users_dashboard"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <UsersDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
*/