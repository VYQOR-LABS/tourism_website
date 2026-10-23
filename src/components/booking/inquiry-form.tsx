"use client";

import { useActionState, useState } from "react";
import { submitBooking } from "@/app/actions";
import Button from "@/components/ui/button";
import type { BookingPageSelection } from "@/components/booking/booking-page-content";
import { initialFormActionState } from "@/types/form-action";

export default function InquiryForm({
  initialPackageSlug,
  initialDestination,
  initialDuration,
  initialDestinationSlug,
  initialFlightId,
  selection,
}: {
  initialPackageSlug?: string;
  initialDestination?: string;
  initialDuration?: string;
  initialDestinationSlug?: string;
  initialFlightId?: string;
  selection?: BookingPageSelection;
}) {
  const [state, formAction, isPending] = useActionState(submitBooking, initialFormActionState);
  const [destination, setDestination] = useState(initialDestination ?? "");
  const [duration, setDuration] = useState(initialDuration ?? "");
  const [destinationSlug, setDestinationSlug] = useState(initialDestinationSlug ?? "");

  return (
    <form action={formAction} className="space-y-5 rounded-[2rem] border border-[#e9dfd1] bg-[#f9f5f0] p-6 shadow-[0_18px_44px_rgba(19,25,21,0.05)] sm:p-8">
      {selection ? (
        <div className="rounded-2xl border border-[#d9e5df] bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2d665d]">
            Selected {selection.kind === "destination" ? "destination" : selection.kind === "tour" ? "tour" : "flight itinerary"}
          </p>
          <p className="mt-2 font-serif text-xl text-[#1b221e]">{selection.title}</p>
          <p className="mt-1 text-sm text-[#4f5d59]">{selection.destination} · {selection.duration}</p>
          <p className="mt-2 text-sm leading-6 text-[#4f5d59]">{selection.summary}</p>
        </div>
      ) : null}
      <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <label htmlFor="booking-website">Leave this field empty</label>
        <input id="booking-website" name="formCheck" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="packageSlug" value={initialPackageSlug ?? ""} />
      <input type="hidden" name="destinationSlug" value={selection ? destinationSlug : ""} />
      <input type="hidden" name="flightId" value={initialFlightId ?? ""} />
      {selection ? (
        <>
          <input type="hidden" name="destination" value={destination} />
          <input type="hidden" name="duration" value={duration} />
        </>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#2c3934]">
          Name
          <input name="name" required maxLength={120} autoComplete="name" className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none" placeholder="Your name" />
        </label>
        <label className="block text-sm font-medium text-[#2c3934]">
          Email
          <input name="email" type="email" required maxLength={254} autoComplete="email" className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none" placeholder="Email address" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#2c3934]">
          Phone
          <input name="phone" type="tel" maxLength={60} autoComplete="tel" className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none" placeholder="Phone number" />
        </label>
        <label className="block text-sm font-medium text-[#2c3934]">
          Country
          <input name="country" maxLength={100} autoComplete="country-name" className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none" placeholder="Country" />
        </label>
      </div>

      {!selection ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-medium text-[#2c3934]">
            Preferred destination
            <input
              name="destination"
              required
              maxLength={160}
              value={destination}
              onChange={(event) => {
                setDestination(event.target.value);
                setDestinationSlug("");
              }}
              className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none"
              placeholder="Destination"
            />
          </label>
          <label className="block text-sm font-medium text-[#2c3934]">
            Trip length
            <input
              name="duration"
              required
              maxLength={100}
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none"
              placeholder="e.g. 3 days"
            />
          </label>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#2c3934]">
          Travel date
          <input name="travelDate" type="date" className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#2c3934] sm:col-span-2">
          Travelers
          <input name="travelers" type="number" min={1} max={30} required className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none" />
        </label>
      </div>

      <label className="block text-sm font-medium text-[#2c3934]">
        Message
        <textarea name="message" rows={5} maxLength={5000} className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none" placeholder="Optional: tell us about any additional preferences" />
      </label>

      {state.message ? (
        <p role="status" aria-live="polite" className={state.status === "success" ? "text-sm text-[#1b6a4d]" : "text-sm text-red-700"}>
          {state.message}
        </p>
      ) : null}
      <Button type="submit" disabled={isPending} className="w-full justify-center">
        {isPending ? "Sending..." : "Submit Inquiry"}
      </Button>
    </form>
  );
}
