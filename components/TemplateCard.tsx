import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function TemplateCard({ item }: { item: any }) {
  return (
    <Link href={`/template/${item.id}`} className="group block h-full">
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl">
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
          <Image 
            src={item.image} 
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
          <p className="text-sm text-zinc-400 line-clamp-2">{item.description}</p>
        </div>
      </div>
    </Link>
  );
}
