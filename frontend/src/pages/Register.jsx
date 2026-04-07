import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const handleRegister = async () => {
    try {
      await api.post("/auth/register", form);
      toast.success("Account created");
      nav("/");
    } catch {}
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-xl w-96 shadow-lg border border-gray-700">
        <h2 className="text-white text-2xl mb-6 text-center font-bold">
          Register
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
          onClick={handleRegister}
          className="w-full bg-green-500 hover:bg-green-600 p-2 rounded text-white"
        >
          Register
        </button>
      </div>
    </div>
  );
}