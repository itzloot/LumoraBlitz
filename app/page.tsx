"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Portfolio", "SaaS", "Dashboard", "Landing", "Blog", "E-commerce", "Productivity"];

  const templates = [
    { id: 1, name: "Blitz Portfolio Dark", category: "Portfolio", tech: "Next.js + Tailwind", desc: "Minimal dark portfolio with gradient hero" },
    { id: 2, name: "SaaS Launch Pro", category: "SaaS", tech: "React + Tailwind", desc: "High-conversion landing with pricing" },
    { id: 3, name: "Lumora Task Manager", category: "Productivity", tech: "React", desc: "Interactive todo with add/delete" },
    // Add 100+ more later...
  ];

  const filtered = templates.filter(t => 
    (t.name.toLowerCase().includes(search.toLowerCase()) || t.desc.toLowerCase().includes(search.toLowerCase())) &&
    (activeCategory === "All" || t.category === activeCategory)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white">
      {/* Hero */}
      <header className="py-32 text-center">
        <h1 className="text-7xl md:text-9xl font-black">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            LumoraBlitz
          </span>
        </h1>
        <p className="mt-6 text-3xl text-gray-300">Lightning-Fast Premium Templates</p>
        <p className="mt-4 text-xl text-gray-400 max-w-4xl mx-auto">
          Hundreds of ready-to-use designs — copy with one click.
        </p>
      </header>

      {/* Search + Filters */}
      <div className="sticky top-0 z-10 bg-gray-950/80 backdrop-blur-lg py-6">
        <div className="max-w-7xl mx-auto px-6">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search templates..."
            className="w-full p-5 bg-gray-900/70 border border-gray-700 rounded-2xl focus:ring-2 focus:ring-cyan-500/50 mb-6"
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm transition-all ${
                  activeCategory === cat ? "bg-gradient-to-r from-cyan-600 to-purple-600" : "bg-gray-800/50 hover:bg-gray-700/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map(t => (
          <div key={t.id} className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition">
            <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{t.desc}</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-xs">{t.category}</span>
              <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-xs">{t.tech}</span>
            </div>
          </div>
        ))}
      </main>

      <footer className="py-12 text-center text-gray-500 border-t border-gray-800">
        © 2026 LumoraBlitz • By Fahad Malik
      </footer>
    </div>
  );
}