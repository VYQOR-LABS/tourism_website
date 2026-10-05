import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "@/types/tourism";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-[1.7rem] border border-[#eee3d4] bg-[#fffaf4] p-6 shadow-[0_10px_26px_rgba(20,31,27,0.04)]">
      <div className="flex gap-1 text-[#d9a844]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={14} fill="currentColor" />
        ))}
      </div>
      <p className="mt-5 text-base leading-8 text-[#3f4d49]">“{testimonial.quote}”</p>
      <div className="mt-6 flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" sizes="48px" />
        </div>
        <div>
          <h4 className="font-semibold text-[#1b231f]">{testimonial.name}</h4>
          <p className="text-sm text-[#5a665f]">{testimonial.country}</p>
        </div>
      </div>
    </article>
  );
}
