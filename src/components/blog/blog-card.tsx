import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import type { BlogPost } from "@/types/tourism";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="overflow-hidden rounded-[1.7rem] border border-[#ece4d9] bg-white shadow-[0_10px_28px_rgba(16,30,26,0.05)]">
      <div className="relative h-56">
        <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#587169]">
          <span>{post.category}</span>
          <span className="flex items-center gap-1"><Clock3 size={12} /> {post.readTime}</span>
        </div>
        <h3 className="mt-4 font-serif text-2xl text-[#1c241f]">{post.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#4d564f]">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between text-sm text-[#5a6d66]">
          <span>{post.date}</span>
          <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 font-medium text-[#173c36]">
            Read article <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
