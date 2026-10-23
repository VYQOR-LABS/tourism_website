"use server";

import type { BookingEmailData, ContactEmailData } from "@/lib/email-templates/shared";
import { destinations } from "@/data/destinations";
import { flightSafaris } from "@/data/flights";
import { tours } from "@/data/tours";
import { sendBookingEmails, sendContactEmails, sendNewsletterEmails } from "@/lib/mailer";
import { SITE_URL } from "@/lib/seo";
import type { FormActionState } from "@/types/form-action";

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function logFormEvent(event: string, details: Record<string, unknown>) {
  console.info("[email-flow]", JSON.stringify({ event, ...details }));
}

function maskEmail(email: string) {
  const [local, domain] = email.split("@");
  return domain ? `${local.slice(0, 1)}***@${domain}` : "[invalid email]";
}

function logRequest(flow: "booking" | "contact" | "newsletter", payload: Record<string, string>) {
  const { email, ...fields } = payload;
  logFormEvent("request_received", {
    flow,
    payload: {
      presentFields: Object.keys(payload).filter((key) => payload[key] !== ""),
      fieldLengths: Object.fromEntries(Object.entries(fields).map(([key, value]) => [key, value.length])),
      email: email ? maskEmail(email) : undefined,
    },
  });
}

function respond(flow: "booking" | "contact" | "newsletter", status: "success" | "error", message: string) {
  logFormEvent("form_response", { flow, status, message });
  return { status, message } satisfies FormActionState;
}

export async function submitBooking(_previousState: FormActionState, formData: FormData): Promise<FormActionState> {
  const payload = Object.fromEntries(
    ["name", "email", "phone", "country", "destination", "duration", "travelDate", "travelers", "message", "packageSlug", "destinationSlug", "flightId", "formCheck"]
      .map((key) => [key, readString(formData, key)]),
  ) as Record<string, string>;
  logRequest("booking", payload);

  if (readString(formData, "formCheck")) {
    logFormEvent("honeypot_triggered", { flow: "booking" });
    return respond("booking", "success", "Thank you. Your inquiry has been received.");
  }

  const packageSlug = readString(formData, "packageSlug");
  const selectedPackage = tours.find((tour) => tour.slug === packageSlug);
  const destinationSlug = readString(formData, "destinationSlug");
  const selectedDestination = destinations.find((destination) => destination.slug === destinationSlug);
  const flightId = readString(formData, "flightId");
  const selectedFlight = flightSafaris.find((flight) => flight.id === flightId);

  if (packageSlug && !selectedPackage) {
    return respond("booking", "error", "Choose a valid trip package, then try again.");
  }
  if (destinationSlug && !selectedDestination) {
    return respond("booking", "error", "Choose a valid destination, then try again.");
  }
  if (flightId && !selectedFlight) {
    return respond("booking", "error", "Choose a valid flight itinerary, then try again.");
  }
  if ([selectedPackage, selectedDestination, selectedFlight].filter(Boolean).length > 1) {
    return respond("booking", "error", "Choose one trip or itinerary, then try again.");
  }

  const interest = selectedPackage
    ? {
        title: selectedPackage.title,
        url: new URL(`/tours/${selectedPackage.slug}`, SITE_URL).toString(),
        details: [
          ["Category", selectedPackage.category],
          ["Region", selectedPackage.region],
          ["Overview", selectedPackage.summary],
          ["Highlights", selectedPackage.highlights.join("\n")],
          ["Suggested itinerary", selectedPackage.itinerary.join("\n")],
          ["Potential inclusions", selectedPackage.included.join("\n")],
          ["Not included", selectedPackage.notIncluded.join("\n")],
          ["What to bring", selectedPackage.whatToBring.join("\n")],
        ] as Array<[string, string]>,
      }
    : selectedDestination
      ? {
          title: selectedDestination.name,
          url: new URL(`/destinations/${selectedDestination.slug}`, SITE_URL).toString(),
          details: [
            ["Country", selectedDestination.country],
            ["Region", selectedDestination.region],
            ["Overview", selectedDestination.description],
            ["Typical stay", selectedDestination.averageStay],
            ["Best time to visit", selectedDestination.bestTime],
            ["Popular activities", selectedDestination.activities.join(", ")],
            ["Ideal for", selectedDestination.idealFor.join(", ")],
          ] as Array<[string, string]>,
        }
      : selectedFlight
        ? {
            title: selectedFlight.title,
            url: new URL(`/flights#${selectedFlight.id}`, SITE_URL).toString(),
            details: [
              ["Region", selectedFlight.region],
              ["Route", selectedFlight.route],
              ["Overview", selectedFlight.description],
              ["Suggested accommodation", selectedFlight.accommodation.join("\n")],
              ["Sample itinerary", selectedFlight.itinerary.join("\n")],
              ["Estimate for two travelers", selectedFlight.priceForTwo],
              ["Estimate for four travelers", selectedFlight.priceForFour],
              ...(selectedFlight.flightBudget ? [["Indicative flight budget", selectedFlight.flightBudget] as [string, string]] : []),
            ] as Array<[string, string]>,
          }
        : undefined;

  const data: BookingEmailData = {
    name: readString(formData, "name"),
    email: readString(formData, "email"),
    phone: readString(formData, "phone"),
    country: readString(formData, "country"),
    destination: readString(formData, "destination"),
    duration: readString(formData, "duration"),
    travelDate: readString(formData, "travelDate"),
    travelers: readString(formData, "travelers"),
    message: readString(formData, "message"),
    package: selectedPackage
      ? {
          title: selectedPackage.title,
          destination: selectedPackage.destination,
          duration: selectedPackage.duration,
          url: new URL(`/tours/${selectedPackage.slug}`, SITE_URL).toString(),
        }
      : undefined,
    interest,
  };

  if (!data.name || data.name.length > 120) {
    return respond("booking", "error", "Enter your name (up to 120 characters).");
  }
  if (!isValidEmail(data.email)) {
    return respond("booking", "error", "Enter a valid email address.");
  }
  if (data.phone.length > 60 || data.country.length > 100) {
    return respond("booking", "error", "Check the phone and country fields, then try again.");
  }
  if (!data.destination || data.destination.length > 160) {
    return respond("booking", "error", "Enter a destination (up to 160 characters).");
  }
  if (!data.duration || data.duration.length > 100) {
    return respond("booking", "error", "Enter a trip length (up to 100 characters).");
  }
  if (data.message.length > 5000) {
    return respond("booking", "error", "Your message must be no longer than 5,000 characters.");
  }

  const travelerCount = Number(data.travelers);
  if (!Number.isInteger(travelerCount) || travelerCount < 1 || travelerCount > 30) {
    return respond("booking", "error", "Choose between 1 and 30 travelers.");
  }

  if (data.travelDate && Number.isNaN(Date.parse(`${data.travelDate}T00:00:00.000Z`))) {
    return respond("booking", "error", "Enter a valid travel date.");
  }

  try {
    await sendBookingEmails(data);

    return respond("booking", "success", "Your trip inquiry has been sent. We will be in touch soon.");
  } catch {
    return respond("booking", "error", "We could not send your inquiry. Please try again or contact us directly.");
  }
}

export async function submitContact(_previousState: FormActionState, formData: FormData): Promise<FormActionState> {
  const payload = Object.fromEntries(
    ["name", "email", "phone", "subject", "message", "formCheck"].map((key) => [key, readString(formData, key)]),
  ) as Record<string, string>;
  logRequest("contact", payload);

  if (readString(formData, "formCheck")) {
    logFormEvent("honeypot_triggered", { flow: "contact" });
    return respond("contact", "success", "Thank you. Your message has been received.");
  }

  const data: ContactEmailData = {
    name: readString(formData, "name"),
    email: readString(formData, "email"),
    phone: readString(formData, "phone"),
    subject: readString(formData, "subject"),
    message: readString(formData, "message"),
  };

  if (!data.name || data.name.length > 120) {
    return respond("contact", "error", "Enter your name (up to 120 characters).");
  }
  if (!isValidEmail(data.email)) {
    return respond("contact", "error", "Enter a valid email address.");
  }
  if (data.phone.length > 60) {
    return respond("contact", "error", "Check the phone field, then try again.");
  }
  if (!data.subject || data.subject.length > 160) {
    return respond("contact", "error", "Enter a subject (up to 160 characters).");
  }
  if (data.message.length < 5 || data.message.length > 5000) {
    return respond("contact", "error", "Your message must be between 5 and 5,000 characters.");
  }

  try {
    await sendContactEmails(data);

    return respond("contact", "success", "Your message has been sent. We will be in touch soon.");
  } catch {
    return respond("contact", "error", "We could not send your message. Please try again or contact us directly.");
  }
}

export async function subscribeToNewsletter(_previousState: FormActionState, formData: FormData): Promise<FormActionState> {
  const email = readString(formData, "email");
  logRequest("newsletter", { email, formCheck: readString(formData, "formCheck") });

  if (readString(formData, "formCheck")) {
    logFormEvent("honeypot_triggered", { flow: "newsletter" });
    return respond("newsletter", "success", "Thank you for subscribing.");
  }

  if (!isValidEmail(email)) {
    return respond("newsletter", "error", "Enter a valid email address.");
  }

  try {
    await sendNewsletterEmails(email);

    return respond("newsletter", "success", "You are subscribed. Look out for travel inspiration in your inbox.");
  } catch {
    return respond("newsletter", "error", "We could not complete your subscription. Please try again.");
  }
}