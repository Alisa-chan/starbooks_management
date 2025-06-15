import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login_page";
import UsersDashboard from "./pages/users_dashboard";
import AdminDashboard from "./pages/admin_dashboard";
import ITSuperAdmin from "./pages/it_super_admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users_dashboard" element={<UsersDashboard />} />
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/it_super_admin" element={<ITSuperAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;