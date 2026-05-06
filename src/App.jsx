import { useState, useEffect, useCallback } from "react";
import CatCard from "./components/CatCard.jsx";

const API_URL = "https://api.freeapi.app/api/v1/public/cats/cat/random";

export default function App() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  const fetchCat = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const json = await response.json();
      const data = json.data;

      // Build a normalized cat object from whatever the API returns
      const catData = {
        id: data.id || crypto.randomUUID(),
        url: data.url || data.image || data.breeds?.[0]?.image?.url || "",
        breed: data.name || "Unknown Breed",
        temperament: data.temperament || "Mysterious & Independent",
        origin: data.origin || "Somewhere wonderful",
        description:
          data.description ||
          "A beautiful feline companion, captured in a moment of pure cat-ness.",
        lifeSpan: data.life_span || "—",
        weight: data.weight?.metric || "—",
      };

      setCat(catData);
      setHistory((prev) => [catData, ...prev].slice(0, 10));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch one cat on mount
  useEffect(() => {
    fetchCat();
  }, [fetchCat]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-150 h-150 rounded-full bg-amber-500/4 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 rounded-full bg-orange-600/3 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Header */}
        <header className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-400 pulse-dot" />
            <span className="text-xs tracking-[0.25em] uppercase text-(--text-muted)">
              Live Feed
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95]">
            Random
            <br />
            <span className="text-amber-400">Cat</span> Viewer
          </h1>
          <p className="mt-4 text-(--text-muted) text-sm sm:text-base max-w-md">
            Every click brings you a new feline friend. Powered by the Random Cat
            API.
          </p>
        </header>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 lg:gap-8">
          {/* Cat display area */}
          <div>
            {/* Fetch button */}
            <button
              onClick={fetchCat}
              disabled={loading}
              className="group mb-6 inline-flex items-center gap-3 px-6 py-3 rounded-lg
                         bg-amber-400 text-(--bg) font-semibold text-sm tracking-wide
                         hover:bg-amber-300 active:scale-[0.97]
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-200 cursor-pointer"
            >
              <svg
                className={`w-4 h-4 transition-transform duration-500 ${
                  loading ? "animate-spin" : "group-hover:rotate-180"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              {loading ? "Fetching..." : "New Cat"}
            </button>

            {/* Cat card or error state */}
            {error ? (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center">
                <p className="text-red-400 font-medium mb-2">
                  Failed to load cat
                </p>
                <p className="text-sm text-(--text-muted) mb-4">{error}</p>
                <button
                  onClick={fetchCat}
                  className="text-sm text-amber-400 underline underline-offset-4 hover:text-amber-300 cursor-pointer"
                >
                  Try again
                </button>
              </div>
            ) : (
              <CatCard cat={cat} loading={loading} />
            )}
          </div>

          {/* Sidebar: history */}
          <aside className="order-3 lg:order-2">
            <div className="rounded-2xl border border-white/6 bg-(--surface)/60 backdrop-blur-sm p-5">
              <h2 className="text-xs tracking-[0.2em] uppercase text-(--text-muted) mb-5">
                Recent Cats
              </h2>

              {history.length === 0 ? (
                <p className="text-sm text-(--text-muted) italic">
                  No cats yet...
                </p>
              ) : (
                <div className="space-y-3">
                  {history.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/3 transition-colors cursor-default"
                    >
                      <div className="w-10 h-10 rounded-md overflow-hidden shrink-0 bg-(--surface-light)">
                        <img
                          src={item.url}
                          alt={item.breed}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-(--text-primary) truncate">
                          {item.breed}
                        </p>
                        <p className="text-[10px] text-(--text-muted) truncate">
                          {item.origin}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/6">
          <p className="text-xs text-(--text-muted)">
            Built with React + Tailwind CSS &middot; Data from{" "}
            <a
              href="https://freeapi.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400/70 hover:text-amber-400 underline underline-offset-2"
            >
              FreeAPI
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
