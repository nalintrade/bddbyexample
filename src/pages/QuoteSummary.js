// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const QuoteSummary = () => {
    const navigate = useNavigate();
    const dummyQuote = {
      quoteNumber: "QTE58001299849",
      price: "$31.66",
      frequency: "Per fortnight",
      benefits: [
        "Theft of your car",
        "Accidental damage to windscreens and windows",
        "Fire damage to your car",
        "Accidental damage caused by flood or storm",
        "Vandalism of your car",
        "Guarantee on repairs by our preferred repairers for covered claims",
        "Damage caused by uninsured drivers of another vehicle",
        "Damaging someone else's car or property (up to $20 million)",
        "Injuries you cause when using your car (up to $5 million)",
        "New car replacement if your car is written off",
        "Transport home if your car is stolen or damaged",
        "Replacement keys and locks",
        "Children’s car seats",
        "Towing"
      ]
    };
  
    return (
      <div className="quote-summary-container">
        <h2>Your Quote</h2>
        <p>Quote number: {dummyQuote.quoteNumber}</p>
        <div className="quote-box">
          <span className="price">{dummyQuote.price}</span>
          <span style={{ margin: "0 15px" }}></span>
          <select>
            <option>{dummyQuote.frequency}</option>
          </select>
          <br /><br />
          <button>Email Quote</button>
        </div>
  
        <h3>See what’s covered</h3>
        <div className="benefits-box" style={{ textAlign: "left", padding: "15px", border: "1px solid #ccc" }}>
          {dummyQuote.benefits.map((benefit, index) => (
            <div key={index} className="benefit-item" style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{benefit}</span>
              <span className="tick-mark">✔</span>
            </div>
          ))}
        </div>
  
        <div className="navigation-buttons" style={{ marginTop: "20px" }}>
          <button style={{ marginBottom: "10px" }} onClick={() => navigate("/coverage-selection")}>Back</button>
          <button onClick={() => navigate("/policy-application")}>Proceed to Application</button>
        </div>
      </div>
    );
  };
  export default  QuoteSummary ;