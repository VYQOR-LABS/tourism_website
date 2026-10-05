"use client";

import { useActionState } from "react";
import { Mail } from "lucide-react";
import { subscribeToNewsletter } from "@/app/actions";
import Button from "@/components/ui/button";
import { initialFormActionState } from "@/types/form-action";

export default function Newsletter() {
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialFormActionState);

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

        <form action={formAction} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
            <label htmlFor="newsletter-website">Leave this field empty</label>
            <input id="newsletter-website" name="website" tabIndex={-1} autoComplete="off" />
          </div>
          <label className="flex flex-1 items-center gap-3 rounded-full border border-[#e1d7c7] bg-[#f9f5f0] px-4 py-3 text-left">
            <Mail size={18} className="text-[#59786f]" />
            <input
              aria-label="Email address"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              placeholder="Email address"
              className="w-full border-none bg-transparent text-sm text-[#1c211e] outline-none placeholder:text-[#7a817e]"
            />
          </label>
          <Button type="submit" disabled={isPending} className="justify-center rounded-full px-7 py-3.5">
            {isPending ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        {state.message ? (
          <p role="status" aria-live="polite" className={`mt-4 text-sm ${state.status === "success" ? "text-[#1b6a4d]" : "text-red-700"}`}>
            {state.message}
          </p>
        ) : null}
      </div>
    </section>
  );
}
