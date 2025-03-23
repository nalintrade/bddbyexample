import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VehicleUsage = () => {
  const navigate = useNavigate();
  const [usage, setUsage] = useState({
    annualMileage: "",
    primaryUse: "",
    parkingLocation: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUsage({ ...usage, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!usage.annualMileage || isNaN(usage.annualMileage)) newErrors.annualMileage = "Annual mileage is required";
    if (!usage.primaryUse) newErrors.primaryUse = "Primary use is required";
    if (!usage.parkingLocation) newErrors.parkingLocation = "Parking location is required";
    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      navigate("/driver-information", { state: { usage } });
    }
  };

  return (
    <div className="usage-container">
      <h2>Enter Vehicle Usage Details</h2>
      <form>
        <label>Annual Mileage:</label>
        <input type="text" name="annualMileage" value={usage.annualMileage} onChange={handleChange} />
        {errors.annualMileage && <span className="error">{errors.annualMileage}</span>}

        <label>Primary Use:</label>
        <select name="primaryUse" value={usage.primaryUse} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Commuting">Commuting</option>
          <option value="Personal">Personal</option>
          <option value="Business">Business</option>
        </select>
        {errors.primaryUse && <span className="error">{errors.primaryUse}</span>}
        <br />
        <label>Parking Location:</label>
        <select name="parkingLocation" value={usage.parkingLocation} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Garage">Garage</option>
          <option value="Driveway">Driveway</option>
          <option value="Street">Street</option>
        </select>
        <br />
        {errors.parkingLocation && <span className="error">{errors.parkingLocation}</span>}
<button style={{ marginBottom: "10px" }} onClick={() => navigate("/get-quote", { state: { usage } })}>Back</button>
        <button type="button" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default VehicleUsage;
