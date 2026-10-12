import Image from "next/image";
import { BadgeCheck, Quote, Star } from "lucide-react";
import type { Testimonial } from "@/types/tourism";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex flex-col">
      <div className="relative border border-[#e8e8e5] bg-white p-5 shadow-[2px_3px_4px_rgba(25,35,30,0.1)] sm:p-6">
        <div className="flex flex-wrap items-center gap-1.5">
          <Quote size={22} fill="currentColor" className="shrink-0 text-[#b9b9b5]" aria-hidden="true" />
          <div className="flex shrink-0 gap-0.5 text-[#22ad80]" aria-label="Rated 5 out of 5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={17} fill="currentColor" aria-hidden="true" />
            ))}
          </div>
          <BadgeCheck size={15} fill="currentColor" className="shrink-0 text-[#a5a5a0]" aria-hidden="true" />
          <h3 className="min-w-0 flex-1 truncate text-sm font-semibold italic text-[#4e5753]">{testimonial.title}</h3>
        </div>
        <p className="mt-2 text-base italic leading-7 text-[#66716e]">{testimonial.quote}</p>
        <div className="absolute -bottom-3 left-16 h-5 w-5 rotate-45 border-b border-r border-[#e8e8e5] bg-white" aria-hidden="true" />
      </div>
      <div className="mt-5 flex items-center gap-4 px-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
          <Image src={testimonial.avatar} alt="" fill className="object-cover" sizes="56px" />
        </div>
        <div className="min-w-0 text-sm uppercase text-[#34423d]">
          <h4 className="truncate font-medium">{testimonial.name}</h4>
          <p className="mt-1 truncate text-xs text-[#68746f]">{testimonial.date}</p>
        </div>
      </div>
    </article>
  );
}
