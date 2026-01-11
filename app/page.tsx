'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Search, ExternalLink, Menu, X } from 'lucide-react';

// --- 1. THE DATA (No need for lib/data.ts) ---
const templates = [
  {
    id: "1",
    title: "SaaS Elevate",
    description: "A conversion-focused landing page template for SaaS startups.",
    tags: ["Next.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "SaaS",
    price: "Free"
  },
  {
    id: "2",
    title: "DevFolio Pro",
    description: "A minimalist, dark-themed portfolio for developers.",
    tags: ["React", "TypeScript"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    category: "Portfolio",
    price: "$29"
  },
  {
    id: "3",
    title: "Lumina Store",
    description: "Modern e-commerce storefront with product grid layouts.",
    tags: ["Next.js", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&q=80",
    category: "Commerce",
    price: "$49"
  },
  {
    id: "4",
    title: "DashBoard UI",
    description: "Clean admin dashboard layout with sidebar navigation.",
    tags: ["React", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "Dashboard",
    price: "$39"
  }
];

// --- 2. THE NAVBAR COMPONENT (No need for components/Navbar.tsx) ---
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-blue-600 p-1.5">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Lumora<span className="text-blue-500">Blitz</span>
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <Link href="/" className="hover:text-white transition">Templates</Link>
          <Link href="#" className="hover:text-white transition">Pricing</Link>
          <Link href="#" className="hover:text-white transition">About</Link>
        </div>

        <button className="hidden md:block rounded-full bg-white px-5 py-2 text-sm font-bold text-black hover:bg-zinc-200 transition">
          Get All Access
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-zinc-900 border-b border-white/10 p-4 flex flex-col gap-4">
          <Link href="/" className="text-zinc-400 hover:text-white">Templates</Link>
          <Link href="#" className="text-zinc-400 hover:text-white">Pricing</Link>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold">Get All Access</button>
        </div>
      )}
    </nav>
  );
}

// --- 3. THE CARD COMPONENT (No need for components/TemplateCard.tsx) ---
function TemplateCard({ item }: { item: any }) {
  return (
    <Link href={`/template/${item.id}`} className="group block h-full">
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
          <Image 
            src={item.image} 
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-black">
              View Details <ExternalLink size={14} />
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white group-hover:text-blue-500 transition-colors">
              {item.title}
            </h3>
            <span className="rounded border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
              {item.category}
            </span>
          </div>
          
          <p className="line-clamp-2 text-sm text-zinc-400 mb-4">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag: string) => (
              <span key={tag} className="rounded-md bg-zinc-950 px-2 py-1 text-xs text-zinc-500 border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

// --- 4. THE MAIN PAGE LOGIC ---
export default function Home() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'SaaS', 'Portfolio', 'Commerce', 'Dashboard'];

  const filtered = activeTab === 'All' 
    ? templates 
    : templates.filter(t => t.category === activeTab);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 blur-[120px] -z-10 rounded-full opacity-50 pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          New Templates Added
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
          Crafted for <br /> Modern Developers.
        </h1>
        
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
          Production-ready Next.js templates. Built with Tailwind CSS, TypeScript, and clean architecture.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
            Browse Templates
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${
                  activeTab === tab 
                    ? 'bg-white text-black border-white' 
                    : 'bg-zinc-900 text-zinc-400 border-transparent hover:border-zinc-700 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
            <input 
              type="text" 
              placeholder="Search templates..." 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <TemplateCard key={item.id} item={item} />
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-20 text-zinc-500 border border-dashed border-zinc-800 rounded-2xl">
            No templates found in this category yet.
          </div>
        )}
      </section>
    </main>
  );
}
