import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful");
      nav("/dashboard");
    } catch {}
  };

  return (
    <div className="h-screen flex items-center justify-center bg-linear-to-br from-gray-900 to-black">
      <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-xl w-96 shadow-lg border border-gray-700">
        <h2 className="text-white text-2xl mb-6 text-center font-bold">
          Login
        </h2>

        <input
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-gray-900 border border-gray-700 text-white"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 rounded bg-gray-900 border border-gray-700 text-white"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded text-white"
        >
          Login
        </button>

        <p className="text-gray-400 mt-4 text-sm text-center">
          No account?{" "}
          <Link to="/register" className="text-blue-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}