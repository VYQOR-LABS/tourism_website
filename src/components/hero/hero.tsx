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
        <div className="absolute inset-0 bg-[#071b17]/45" />
      </div>

      <div className="relative flex min-h-[600px] w-full items-center justify-center px-4 pb-10 pt-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-white">
          <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-[#10251f]/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f7eee2] backdrop-blur-sm">
            <MapPinned size={12} />
            Discover Africa differently
          </div>
          <h1 className="mx-auto max-w-4xl font-serif text-5xl font-bold leading-[1.02] [text-shadow:0_2px_14px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl">
            Journeys Worth Remembering.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.75)] sm:text-xl">
            Discover breathtaking destinations, authentic experiences and unforgettable adventures across Kenya, Tanzania, Rwanda and Uganda.
          </p>
          <div className="mt-5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f1d8a6] [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">Tours in</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {["Kenya", "Tanzania", "Rwanda", "Uganda"].map((country) => (
                <span key={country} className="rounded-full border border-white/60 bg-[#132d27]/90 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
                  {country}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
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
