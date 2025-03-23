import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import GetQuote from "./pages/GetQuote";
import VehicleUsage from "./pages/VehicleUsage";
import CoverageSelection from "./pages/CoverageSelection";
import QuoteSummary from "./pages/QuoteSummary";
import PolicyApplication from "./pages/PolicyApplication";
import DriverInformation from "./pages/DriverInformation";



function App() {
  return (
    // <Router>
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
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/vehicle-usage" element={<VehicleUsage />} />
        <Route path="/driver-information" element={<DriverInformation />} />
        <Route path="/coverage-selection" element={<CoverageSelection />} />
        <Route path="/quote-summary" element={<QuoteSummary />} />
        <Route path="/policy-application" element={<PolicyApplication />} />

        
        
        <Route path="/support" element={<div><h2>Support Page</h2><p className="home-link">
          <a href="/dashboard" className="back-home">← Back to Dashboard</a>
        </p></div>} />
      </Routes>
    // </Router>
  );
}

export default App;
