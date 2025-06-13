import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login_page";
import Dashboard from "./pages/admin_dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

