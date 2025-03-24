import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../auth/auth.js";
import { Link } from "react-router-dom"; // ✅ Ensure this is imported
import "./Dashboard.css";
// import bannerImage from "../assets/DashBoardBanner.png"; 


const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (

<div className="dashboard-container">

      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="logo">MercuryDemo</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bills">Bills</Link></li>
          <li><Link to="/usage">Usage</Link></li>
          <li><Link to="/pay-bill">Pay Bill</Link></li>
          <li><Link to="/change-plan">Change Plan</Link></li>
          <li><Link to="/move-house">Move House</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/get-quote">Get a Quote</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
      </nav>

      {/* Banner Section */}
      <div className="banner">
        {/* <img src={bannerImage} alt="MercuryDemo Banner" className="banner-image" /> */}
        <div className="ballnermain"> <h1>MercuryDemo</h1> </div>
        <div className="banner-text">
          <h2>Powering Your Home with Renewable Energy</h2>
          <p>Discover sustainable solutions tailored for you.</p>
        </div>

      </div>


      {/* <div className="banner">
        <h2>Your Banner Here</h2>
        <p>Add your promotional message or image here.</p>
      </div> */}

      {/* Page Content */}
      <div className="content">
        <h2>Welcome to Your Dashboard</h2>
        <p>Select a section to manage your account.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>



  );
};

export default Dashboard;
