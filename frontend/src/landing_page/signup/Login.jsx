import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/login", {
        email,
        password,
      });
      if (res.data.status) {
        navigate("/dashboard"); // Redirect to dashboard after login
      } else {
        setMsg(res.data.message || "Login failed");
      }
    } catch (err) {
      setMsg("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
      {msg && <div>{msg}</div>}
    </form>
  );
}

export default Login;