import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, Download, ExternalLink, Zap } from 'lucide-react';

// --- DATA ---
const templates = [
  {
    id: "1",
    title: "SaaS Elevate",
    description: "A conversion-focused landing page template.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    price: "Free",
    features: ["SEO Optimized", "Mobile Responsive"]
  },
  {
    id: "2",
    title: "DevFolio Pro",
    description: "A minimalist portfolio.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    price: "$29",
    features: ["Project Showcase", "Contact Form"]
  },
  {
    id: "3",
    title: "Lumina Store",
    description: "Modern e-commerce storefront.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&q=80",
    price: "$49",
    features: ["Cart Logic", "Checkout Layout"]
  },
  {
    id: "4",
    title: "DashBoard UI",
    description: "Clean admin dashboard layout.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    price: "$39",
    features: ["Sidebar Nav", "Charts"]
  }
];

// --- NAVBAR ---
function Navbar() {
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
      </div>
    </nav>
  );
}

// --- PAGE LOGIC ---
export async function generateStaticParams() {
  return templates.map((t) => ({ id: t.id }));
}

export default async function TemplateDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const template = templates.find((t) => t.id === id);

  if (!template) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8">
          <ArrowLeft size={16} /> Back
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-800">
            <Image src={template.image} alt={template.title} fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{template.title}</h1>
            <p className="text-zinc-400 mb-8">{template.description}</p>
            <button className="bg-blue-600 text-white w-full py-4 rounded-xl font-bold hover:bg-blue-500">
              Download ({template.price})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
