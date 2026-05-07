import { useState, useEffect, useCallback } from "react";
import CatCard from "./components/CatCard.jsx";
import BackgroundGradient from "./components/BackgroundGradient.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";

const API_URL = "https://api.freeapi.app/api/v1/public/cats/cat/random";

export default function App() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  const fetchCat = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const json = await response.json();
      const data = json.data;

      const catObj = {
        id: data.id || crypto.randomUUID(),
        url: data.url || data.image,
        breed: data.name,
        temperament: data.temperament,
        origin: data.origin,
        description: data.description,
        lifeSpan: data.life_span,
        weight: data.weight?.metric,
      };

      setCat(catObj);
      setHistory((prev) => [catObj, ...prev].slice(0, 10));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="h-screen relative overflow-x-hidden">
      {/* Background gradient blobs */}
      <BackgroundGradient />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Header */}
        <Header />

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 lg:gap-8">

        <MainContent
          cat={cat}
          loading={loading}
          error={error}
          fetchCat={fetchCat}
          />
        {/* Sidebar history */}
        <Sidebar history={history} />
          </div>
      <Footer />
      </div>
    </div>
  );
}
