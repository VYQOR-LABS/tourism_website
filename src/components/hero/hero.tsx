import Image from "next/image";
import { ArrowDown, MapPinned } from "lucide-react";
import Button from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1600&q=80"
          alt="African safari landscape at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d1a]/80 via-[#0a1d1a]/35 to-[#0a1d1a]/10" />
      </div>

      <div className="relative flex min-h-[760px] w-full items-end px-4 pb-12 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#f7eee2] backdrop-blur-sm">
            <MapPinned size={12} />
            Discover Africa differently
          </div>
          <h1 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Journeys Worth Remembering.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
            Discover breathtaking destinations, authentic experiences and unforgettable adventures across East Africa.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/destinations" variant="primary">Explore Destinations</Button>
            <Button href="/booking" variant="secondary">Plan Your Trip</Button>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/75 backdrop-blur-md md:flex">
          <span>Scroll</span>
          <ArrowDown size={14} />
        </div>
      </div>
    </section>
  );
}
