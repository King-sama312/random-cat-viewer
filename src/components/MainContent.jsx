import { useEffect } from "react";
import React from "react";
import CatCard from "./CatCard.jsx";

function MainContent({ cat, loading, error, fetchCat }) {
  useEffect(() => {
    fetchCat();
  }, [fetchCat]);

  return (
    <>
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
    </>
  );
}

export default MainContent;
