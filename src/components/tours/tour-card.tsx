import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";
import type { TourPackage } from "@/types/tourism";

export default function TourCard({ tour }: { tour: TourPackage }) {
  return (
    <article className="overflow-hidden rounded-[1.7rem] border border-[#ede5db] bg-white shadow-[0_12px_30px_rgba(35,35,35,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(35,35,35,0.1)]">
      <div className="relative h-64">
        <Image src={tour.image} alt={tour.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102821]/70 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#17332e]">
          {tour.category}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between text-sm text-[#567066]">
          <span className="flex items-center gap-2"><MapPin size={14} /> {tour.destination}</span>
          <span className="flex items-center gap-1 text-[#d49b2f]"><Star size={14} fill="currentColor" /> {tour.rating}</span>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-[#172320]">{tour.title}</h3>
          <p className="mt-2 text-sm leading-6 text-[#53615d]">{tour.description}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-[#586d63]">
          <span>{tour.duration}</span>
          <span className="font-semibold text-[#1f5145]">From ${tour.price}</span>
        </div>

        <Link href={`/tours/${tour.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#173c36]">
          View itinerary <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}
