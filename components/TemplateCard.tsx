import { ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function TemplateCard({ item }: { item: any }) {
  return (
    <div className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
      
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image 
          src={item.image} 
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Live Preview <ExternalLink size={16} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 border border-zinc-800 px-2 py-1 rounded">
            {item.category}
          </span>
        </div>
        
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
          {item.tags.map((tag: string) => (
            <span key={tag} className="text-xs text-zinc-500 bg-zinc-900 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
