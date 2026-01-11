"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Portfolio",
    "SaaS",
    "Dashboard",
    "Landing",
    "Blog",
    "E-commerce",
    "Productivity",
    "Admin",
  ];

  const templates = [
    {
      id: 1,
      name: "Blitz Portfolio Dark",
      category: "Portfolio",
      tech: "Next.js + Tailwind",
      desc: "Minimal dark portfolio with gradient hero & smooth animations",
      preview: "dark-modern-portfolio",
    },
    {
      id: 2,
      name: "SaaS Launch Pro",
      category: "SaaS",
      tech: "React + Tailwind",
      desc: "High-conversion landing with pricing, features & testimonials",
      preview: "saas-landing",
    },
    {
      id: 3,
      name: "Lumora Task Manager",
      category: "Productivity",
      tech: "React",
      desc: "Interactive todo app with add/delete & local storage",
      preview: "task-manager",
    },
    // Add more as you go...
  ];

  const filtered = templates.filter((t) =>
    (t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase())) &&
    (activeCategory === "All" || t.category === activeCategory)
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Hero */}
      <header className="relative py-32 md:py-48 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-purple-950/20 to-transparent opacity-50" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              LumoraBlitz
            </span>
          </h1>
          <p className="mt-6 text-3xl md:text-4xl font-light text-gray-300">
            Lightning-Fast Premium Templates
          </p>
          <p className="mt-4 text-xl text-gray-400">
            Discover hundreds of production-ready web designs — copy, customize, launch in seconds.
          </p>
        </div>
      </header>

      {/* Search & Categories */}
      <div className="sticky top-0 z-20 bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/50 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search templates (portfolio, SaaS, dashboard...)"
            className="w-full p-5 bg-gray-900/70 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition mb-6"
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-600 to-purple-600 shadow-lg shadow-cyan-500/20 text-white"
                    : "bg-gray-800/50 hover:bg-gray-700/70 border border-gray-700 text-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Template Grid */}
      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filtered.length === 0 ? (
          <p className="col-span-full text-center text-gray-400 text-2xl py-32">
            No templates found — try another search!
          </p>
        ) : (
          filtered.map((t) => (
            <div
              key={t.id}
              className="group bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              {/* Preview Placeholder */}
              <div className="h-56 bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-2xl font-bold text-gray-400 group-hover:text-cyan-400 transition z-10">
                  {t.name}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                  {t.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{t.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-xs font-medium">
                    {t.category}
                  </span>
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-xs font-medium">
                    {t.tech}
                  </span>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-medium hover:from-cyan-500 hover:to-purple-500 transition shadow-md">
                  View & Copy
                </button>
              </div>
            </div>
          ))
        )}
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 border-t border-gray-800 bg-gray-950/50">
        <p>© 2026 LumoraBlitz • Crafted by Fahad Malik • Hundreds of templates added monthly</p>
      </footer>
    </div>
  );
}