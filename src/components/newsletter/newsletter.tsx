import { Mail } from "lucide-react";
import Button from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section className="bg-[#f3efe7] py-18">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#e9dfd1] bg-[#fffdf9] px-6 py-10 text-center shadow-[0_24px_60px_rgba(24,28,26,0.06)] sm:px-10 lg:px-14">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#3c6c62]">Get travel inspiration</p>
          <h2 className="mt-4 font-serif text-3xl text-[#182520] sm:text-5xl">Get Travel Inspiration</h2>
          <p className="mt-4 text-base leading-8 text-[#4d564f]">
            Discover new destinations, travel ideas and experiences delivered to your inbox.
          </p>
        </div>

        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <label className="flex flex-1 items-center gap-3 rounded-full border border-[#e1d7c7] bg-[#f9f5f0] px-4 py-3 text-left">
            <Mail size={18} className="text-[#59786f]" />
            <input
              aria-label="Email address"
              type="email"
              placeholder="Email address"
              className="w-full border-none bg-transparent text-sm text-[#1c211e] outline-none placeholder:text-[#7a817e]"
            />
          </label>
          <Button href="/contact" className="justify-center rounded-full px-7 py-3.5">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}
