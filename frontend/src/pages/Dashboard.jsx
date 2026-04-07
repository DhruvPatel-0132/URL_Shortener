import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import { Copy } from "lucide-react";

export default function Dashboard() {
  const [url, setUrl] = useState("");
  const [custom, setCustom] = useState("");
  const [history, setHistory] = useState([]);
  const [shortUrl, setShortUrl] = useState("");

  const create = async () => {
    if (!url.startsWith("http")) {
      return toast.error("Enter valid URL");
    }

    const res = await api.post("/url/shorten", {
      originalUrl: url,
      customCode: custom,
    });

    setShortUrl(res.data.shortUrl);
    toast.success("Short URL created!");
    fetchHistory();
  };

  const fetchHistory = async () => {
    const res = await api.get("/url/history");
    setHistory(res.data);
  };

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied!");
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black p-6 text-white">
      <Navbar />

      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Input */}
      <div className="bg-gray-800/50 p-6 rounded-xl mb-6 border border-gray-700">
        <div className="flex gap-3">
          <input
            className="flex-1 p-2 bg-gray-900 rounded border border-gray-700"
            placeholder="Enter URL"
            onChange={(e) => setUrl(e.target.value)}
          />

          <input
            className="p-2 bg-gray-900 rounded border border-gray-700"
            placeholder="Custom alias"
            onChange={(e) => setCustom(e.target.value)}
          />

          <button
            onClick={create}
            className="bg-blue-500 px-4 rounded hover:bg-blue-600"
          >
            Shorten
          </button>
        </div>
      </div>

      {/* Result */}
      {shortUrl && (
        <div className="mb-6 flex justify-between items-center bg-green-900/30 p-4 rounded border border-green-700">
          <a href={shortUrl} target="_blank">
            {shortUrl}
          </a>
          <button onClick={() => copy(shortUrl)}>
            <Copy size={16} />
          </button>
        </div>
      )}

      {/* History */}
      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
        <h2 className="text-xl mb-4">History</h2>

        {history.map((item) => {
          const link = `http://localhost:3000/${item.shortCode}`;

          return (
            <div
              key={item._id}
              className="flex justify-between items-center mb-3 p-3 bg-gray-900 rounded"
            >
              <div>
                <p className="text-sm">{item.originalUrl}</p>
                <p className="text-blue-400">{link}</p>
                <p className="text-xs">Clicks: {item.clicks}</p>
              </div>

              <button onClick={() => copy(link)}>
                <Copy size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}