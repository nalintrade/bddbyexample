import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../auth/auth.js";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const result = loginUser(username, password);
    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign in to Mercury</h2>
        <p>Access your account with ease.</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign In</button>
        </form>

        <p className="signup-link">
          Don’t have an account? <a href="/signup">Create one</a>
        </p>

        <p className="home-link">
          <a href="/" className="back-home">← Back to Home</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
