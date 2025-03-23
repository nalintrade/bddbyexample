import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GetQuote = () => {
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState({
    make: "",
    model: "",
    year: "",
    registration: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!vehicle.make) newErrors.make = "Make is required";
    if (!vehicle.model) newErrors.model = "Model is required";
    if (!vehicle.year || isNaN(vehicle.year)) newErrors.year = "Valid year is required";
    if (!vehicle.registration) newErrors.registration = "Registration number is required";
    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      navigate("/vehicle-usage", { state: { vehicle } });
    }
  };

  return (
    <div className="quote-container">
      <h2>Enter Vehicle Details</h2>
      <form>
        <label>Make:</label>
        <input type="text" name="make" value={vehicle.make} onChange={handleChange} />
        {errors.make && <span className="error">{errors.make}</span>}

        <label>Model:</label>
        <input type="text" name="model" value={vehicle.model} onChange={handleChange} />
        {errors.model && <span className="error">{errors.model}</span>}

        <label>Year:</label>
        <input type="text" name="year" value={vehicle.year} onChange={handleChange} />
        {errors.year && <span className="error">{errors.year}</span>}

        <label>Registration:</label>
        <input type="text" name="registration" value={vehicle.registration} onChange={handleChange} />
        {errors.registration && <span className="error">{errors.registration}</span>}

        <button type="button" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default GetQuote;
