import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "../services/api";

export default function App() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    const data = await API.get("/");
    setMessage(data.message);
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div>
      <h1>{message}</h1>

      <h2><Link to="/movies">Movies</Link></h2>
    </div>
  );
}
