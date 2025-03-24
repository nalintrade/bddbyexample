import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../auth/auth.js";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const result = registerUser(username, password);
    if (result.success) {
      navigate("/login");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Your Account</h2>
        <p>Sign up to access your MercuryDemo account.</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSignup}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Create Account</button>
        </form>
        <p className="signin-link">
          Already have an account? <a href="/login">Sign in</a>
        </p>
        <p className="terms">
          By signing up, you agree to our
          <button className="link-button" onClick={() => alert("Terms & Conditions placeholder")}>
            Terms & Conditions
          </button>
          and
          <button className="link-button" onClick={() => alert("Privacy Policy placeholder")}>
            Privacy Policy
          </button>.
        </p>
        <p className="home-link">
          <a href="/" className="back-home">← Back to Home</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
