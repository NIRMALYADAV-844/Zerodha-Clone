import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/signup", {
        email,
        password,
        username,
      });
      if (res.data.status) {
        navigate("/dashboard");
      } else {
        setMsg(res.data.message || "Signup failed");
      }
    } catch (err) {
      setMsg("Signup failed");
    }
  };

return (
  <div className="flex min-h-screen items-center justify-center">
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Sign Up</h2>
      <form onSubmit={handleSignup} className="space-y-5">
        <div>
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Signup
        </button>
        {msg && <div className="text-red-500 text-center">{msg}</div>}
           {msg && <div className="text-red-500 text-center">{msg}</div>}
      </form>
    </div>
  </div>
);
}

export default Signup;