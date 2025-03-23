import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./DriverInformation.css";

const DriverInformation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [driverInfo, setDriverInfo] = useState({
    licenseYears: location.state?.driverInfo?.licenseYears || "",
    claimsInLastFiveYears: location.state?.driverInfo?.claimsInLastFiveYears || "",
  });

  const vehicleDetails = location.state?.vehicleDetails || {};
  const vehicleUsage = location.state?.vehicleUsage || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriverInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    navigate("/coverage-selection", {
      state: {
        vehicleDetails,
        vehicleUsage,
        driverInfo,
      },
    });
  };

  const handleBack = () => {
    navigate("/vehicle-usage", {
      state: {
        vehicleDetails,
        vehicleUsage,
        driverInfo,
      },
    });
  };

  return (
    <div className="driver-info-container">
      <h2>Driver Information</h2>
      <div className="form-group">
        <label htmlFor="licenseYears">License Duration (years)</label>
        <input
          type="number"
          id="licenseYears"
          name="licenseYears"
          value={driverInfo.licenseYears}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="claimsInLastFiveYears">Claims in Last 5 Years</label>
        <input
          type="number"
          id="claimsInLastFiveYears"
          name="claimsInLastFiveYears"
          value={driverInfo.claimsInLastFiveYears}
          onChange={handleChange}
        />
      </div>

      <div className="navigation-buttons">
        <button className="nav-btn" onClick={handleBack}>Back</button>
        <button className="nav-btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default DriverInformation;
