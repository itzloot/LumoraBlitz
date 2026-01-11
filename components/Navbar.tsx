import { Zap } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-primary p-1.5">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Lumora<span className="text-primary">Blitz</span>
          </span>
        </Link>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <Link href="/" className="hover:text-white transition">Templates</Link>
          <Link href="#" className="hover:text-white transition">Pricing</Link>
          <Link href="#" className="hover:text-white transition">About</Link>
        </div>

        <button className="rounded-full bg-white px-5 py-2 text-sm font-bold text-black hover:bg-zinc-200 transition">
          Get All Access
        </button>
      </div>
    </nav>
  );
}
