"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";

const filters = ["All", "Safari", "Beach", "Culture", "Adventure", "Accommodation", "Food", "Nature"] as const;
const countries = ["All countries", "Kenya", "Tanzania", "Rwanda", "Uganda"] as const;

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [activeCountry, setActiveCountry] = useState<(typeof countries)[number]>("All countries");

  const items = useMemo(() => {
    return galleryImages.filter((image) =>
      (activeFilter === "All" || image.category === activeFilter)
      && (activeCountry === "All countries" || image.country === activeCountry),
    );
  }, [activeCountry, activeFilter]);

  return (
    <div>
      <div className="mb-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap" aria-label="Filter gallery by country">
        {countries.map((country) => (
          <button
            key={country}
            type="button"
            onClick={() => setActiveCountry(country)}
            aria-pressed={activeCountry === country}
            className={[
              "first:col-span-2 flex w-full items-center justify-center whitespace-nowrap rounded-full border px-2 py-2 text-xs font-semibold transition sm:w-auto sm:px-4 sm:text-sm",
              activeCountry === country
                ? "border-[#173c36] bg-[#173c36] text-white"
                : "border-[#d8ddd7] bg-white text-[#263c35] hover:border-[#173c36]",
            ].join(" ")}
          >
            {country}
          </button>
        ))}
      </div>
      <div className="mb-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={[
              "flex w-full items-center justify-center whitespace-nowrap rounded-full border px-2 py-2 text-xs transition sm:w-auto sm:px-4 sm:py-2 sm:text-sm",
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
            <figcaption className="flex items-center justify-between gap-3 px-4 py-3 text-sm">
              <span className="font-medium text-[#26332f]">{image.title}</span>
              <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-[#41665b]">{image.country}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
