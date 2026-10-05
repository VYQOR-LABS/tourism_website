import { CalendarRange, Compass, MapPin, Search } from "lucide-react";
import Button from "@/components/ui/button";

export default function SearchPanel() {
  return (
    <div className="relative z-20 mx-auto -mt-12 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-[#e5e0d7] bg-[#fffdf9]/90 p-4 shadow-[0_30px_80px_rgba(19,32,27,0.18)] backdrop-blur-sm sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr_1.2fr_auto]">
          <label className="rounded-2xl border border-[#e6e1d6] bg-[#f8f4ee] p-4 text-left">
            <span className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#55716a]">
              <MapPin size={12} /> Destination
            </span>
            <input
              aria-label="Destination"
              placeholder="Where do you want to go?"
              className="w-full border-none bg-transparent text-base text-[#1a1d1a] outline-none placeholder:text-[#68776f]"
            />
          </label>

          <label className="rounded-2xl border border-[#e6e1d6] bg-[#f8f4ee] p-4 text-left">
            <span className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#55716a]">
              <CalendarRange size={12} /> When?
            </span>
            <input
              aria-label="Travel date"
              type="date"
              className="w-full border-none bg-transparent text-base text-[#1a1d1a] outline-none"
            />
          </label>

          <label className="rounded-2xl border border-[#e6e1d6] bg-[#f8f4ee] p-4 text-left">
            <span className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#55716a]">
              <Compass size={12} /> Experience
            </span>
            <select aria-label="Experience type" className="w-full border-none bg-transparent text-base text-[#1a1d1a] outline-none">
              <option>Safari</option>
              <option>Beach</option>
              <option>Adventure</option>
              <option>Culture</option>
            </select>
          </label>

          <Button href="/destinations" className="h-[76px] w-full justify-center gap-2 rounded-2xl bg-[var(--color-primary)] px-4 text-white">
            <Search size={16} /> Explore
          </Button>
        </div>
      </div>
    </div>
  );
}
