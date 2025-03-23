import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./CoverageSelection.css";

const CoverageSelection = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedOptions, setSelectedOptions] = useState(
      location.state?.selectedOptions || {}
    );
  
    const options = [
      "Excess-free glass",
      "Roadside Rescue",
      "Hire vehicle or alternative transport after an incident",
      "Trailer"
    ];
  
    const handleChange = (option) => {
      setSelectedOptions((prev) => ({
        ...prev,
        [option]: !prev[option],
      }));
    };
  
    return (
      <div className="coverage-selection-container">
        <h2>Add Optional Benefits</h2>
        <p>
          Upgrade your cover with these optional extras. If you change your mind,
          you can add or remove them from your quote later.
        </p>
        <div className="benefits-box">
          <table className="benefits-table">
            <tbody>
              {options.map((option, index) => (
                <tr key={index} className="benefit-row">
                  <td className="benefit-text">{option}</td>
                  <td className="benefit-checkbox-cell">
                    <input
                      type="checkbox"
                      className="benefit-checkbox"
                      checked={selectedOptions[option] || false}
                      onChange={() => handleChange(option)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <div className="navigation-buttons">
          <button className="nav-btn" onClick={() => navigate("/driver-information", { state: { selectedOptions } })}>Back</button>
          <button className="nav-btn" onClick={() => navigate("/quote-summary", { state: { selectedOptions } })}>Next</button>
        </div>
      </div>
    );
  };
  
  export default CoverageSelection;
  