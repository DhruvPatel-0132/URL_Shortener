import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function Navbar() {
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    nav("/");
  };

  return (
    <div className="flex justify-between items-center bg-gray-800/50 backdrop-blur-md p-4 rounded-xl mb-6 border border-gray-700">
      <h1 className="text-xl font-bold text-blue-400">Shortify</h1>

      <button
        onClick={logout}
        className="flex items-center gap-2 bg-red-500 px-4 py-1 rounded hover:bg-red-600"
      >
        <LogOut size={16} /> Logout
      </button>
    </div>
  );
}