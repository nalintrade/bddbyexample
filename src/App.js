import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bills" element={<div><h2>Bills Page</h2><p className="home-link">
          <a href="/dashboard" className="back-home">← Back to Dashboard</a>
        </p></div>} />
        <Route path="/usage" element={<div><h2>Usage Page</h2><p className="home-link">
          <a href="/dashboard" className="back-home">← Back to Dashboard</a>
        </p></div>} />
        <Route path="/pay-bill" element={<div><h2>Pay Bill Page</h2><p className="home-link">
          <a href="/dashboard" className="back-home">← Back to Dashboard</a>
        </p></div>} />
        <Route path="/change-plan" element={<div><h2>Change Plan Page</h2><p className="home-link">
          <a href="/dashboard" className="back-home">← Back to Dashboard</a>
        </p></div>} />
        <Route path="/move-house" element={<div><h2>Move House Page</h2><p className="home-link">
          <a href="/dashboard" className="back-home">← Back to Dashboard</a>
        </p></div>} />
        <Route path="/support" element={<div><h2>Support Page</h2><p className="home-link">
          <a href="/dashboard" className="back-home">← Back to Dashboard</a>
        </p></div>} />
      </Routes>
    </Router>
  );
}

export default App;
