import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import type { GalleryImage } from "@/types/tourism";

export default function GalleryGrid({ images = galleryImages }: { images?: GalleryImage[] }) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
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
