"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions";
import Button from "@/components/ui/button";
import { initialFormActionState } from "@/types/form-action";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialFormActionState);

  return (
    <form action={formAction} aria-busy={isPending} className="space-y-5 rounded-[2rem] border border-[#e9dfd1] bg-[#fffdf9] p-6 shadow-[0_18px_44px_rgba(19,25,21,0.05)] sm:p-8">
      <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" name="formCheck" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#2c3934]">
          Name
          <input name="name" required maxLength={120} autoComplete="name" className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-[#f7f3ee] px-4 py-3 outline-none" placeholder="Your name" />
        </label>
        <label className="block text-sm font-medium text-[#2c3934]">
          Email
          <input name="email" type="email" required maxLength={254} autoComplete="email" className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-[#f7f3ee] px-4 py-3 outline-none" placeholder="Email address" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#2c3934]">
          Phone
          <input name="phone" type="tel" maxLength={60} autoComplete="tel" className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-[#f7f3ee] px-4 py-3 outline-none" placeholder="Phone number (optional)" />
        </label>
        <label className="block text-sm font-medium text-[#2c3934]">
          Subject
          <input name="subject" required maxLength={160} className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-[#f7f3ee] px-4 py-3 outline-none" placeholder="Subject" />
        </label>
      </div>

      <label className="block text-sm font-medium text-[#2c3934]">
        Message
        <textarea name="message" rows={6} required minLength={5} maxLength={5000} className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-[#f7f3ee] px-4 py-3 outline-none" placeholder="Tell us how we can help" />
      </label>

      {state.message ? (
        <p role="status" aria-live="polite" className={state.status === "success" ? "text-sm text-[#1b6a4d]" : "text-sm text-red-700"}>
          {state.message}
        </p>
      ) : null}
      {isPending ? <p role="status" aria-live="polite" className="text-sm text-[#586a64]">Sending your message...</p> : null}
      <Button type="submit" disabled={isPending} className="w-full justify-center">
        {isPending ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
