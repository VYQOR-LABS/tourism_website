import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Destination } from "@/types/tourism";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[#ece3d6] bg-white shadow-[0_15px_35px_rgba(28,35,31,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(28,35,31,0.12)]">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#122320]/80 via-[#122320]/15 to-transparent" />
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="font-serif text-2xl text-[#1c221d]">{destination.name}</h3>
            <p className="mt-1 text-sm text-[#5b6a66]">{destination.country}</p>
          </div>
          <span className="rounded-full bg-[#f3efe9] px-3 py-1 text-xs font-medium text-[#1a4b41]">
            {destination.activities.length} experiences
          </span>
        </div>

        <p className="text-sm leading-7 text-[#4d564f]">{destination.description}</p>

        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-medium text-[#536b61]">From ${destination.priceFrom}</span>
          <Link href={`/destinations/${destination.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#173c36]">
            Explore <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
