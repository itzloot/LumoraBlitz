'use client';

import { useState } from 'react';
import { Zap, Search, LayoutGrid } from 'lucide-react';
import TemplateCard from '@/components/TemplateCard';
import { templates } from '@/lib/data';

export default function Home() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'SaaS', 'Portfolio', 'Commerce', 'Dashboard'];

  const filtered = activeTab === 'All' 
    ? templates 
    : templates.filter(t => t.category === activeTab);

  return (
    <main className="min-h-screen pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center border-b border-white/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          v2.0 is now live
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent animate-slide-up">
          Build faster with <br />
          <span className="text-white">LumoraBlitz</span>
        </h1>
        
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 animate-slide-up delay-100">
          A curated collection of production-ready Next.js templates. 
          Beautifully designed, expertly crafted, and ready to deploy.
        </p>

        <div className="flex justify-center gap-4 animate-slide-up delay-200">
          <button className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]">
            Get Access
          </button>
          <button className="px-8 py-3 rounded-xl font-semibold text-zinc-300 hover:text-white border border-white/10 hover:bg-white/5 transition-all">
            Documentation
          </button>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          
          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-white text-black' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search (Visual Only) */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
            <input 
              type="text" 
              placeholder="Search templates..." 
              className="w-full bg-surface border border-white/5 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <TemplateCard key={item.id} item={item} />
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            No templates found in this category.
          </div>
        )}
      </section>
    </main>
  );
}
