"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";

const filters = ["All", "Safari", "Beach", "Culture", "Adventure", "Accommodation", "Food", "Nature"] as const;

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const items = useMemo(() => {
    if (activeFilter === "All") return galleryImages;
    return galleryImages.filter((image) => image.category === activeFilter);
  }, [activeFilter]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={[
              "rounded-full border px-4 py-2 text-sm transition",
              activeFilter === filter
                ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                : "border-[#e1d7c7] bg-white text-[#2d3b37] hover:border-[#d0b98b]",
            ].join(" ")}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((image) => (
          <figure key={image.id} className="group overflow-hidden rounded-[1.6rem] border border-[#efe3d9] bg-white shadow-sm">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image.image}
                alt={image.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
