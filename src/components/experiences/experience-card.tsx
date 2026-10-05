import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Experience } from "@/types/tourism";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.9rem] border border-[#efe7dc] bg-white">
      <div className="relative h-[430px]">
        <Image src={experience.image} alt={experience.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1714]/80 via-[#0d1714]/20 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm">
          {experience.category}
        </span>
        <h3 className="mt-5 font-serif text-3xl">{experience.title}</h3>
        <p className="mt-3 max-w-md text-sm leading-7 text-white/75">{experience.description}</p>
        <Link href="/experiences" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white">
          Plan this experience <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
