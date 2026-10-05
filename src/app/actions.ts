"use server";

import { bookingConfirmationEmail } from "@/lib/email-templates/booking-confirmation";
import { bookingNotificationEmail } from "@/lib/email-templates/booking-notification";
import { newsletterNotificationEmail } from "@/lib/email-templates/newsletter-notification";
import { newsletterWelcomeEmail } from "@/lib/email-templates/newsletter-welcome";
import type { BookingEmailData } from "@/lib/email-templates/shared";
import { getContactInbox, sendEmail } from "@/lib/mailer";
import type { FormActionState } from "@/types/form-action";

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitBooking(_previousState: FormActionState, formData: FormData): Promise<FormActionState> {
  if (readString(formData, "website")) {
    return { status: "success", message: "Thank you. Your inquiry has been received." };
  }

  const data: BookingEmailData = {
    name: readString(formData, "name"),
    email: readString(formData, "email"),
    phone: readString(formData, "phone"),
    country: readString(formData, "country"),
    destination: readString(formData, "destination"),
    travelDate: readString(formData, "travelDate"),
    travelers: readString(formData, "travelers"),
    budget: readString(formData, "budget"),
    message: readString(formData, "message"),
  };

  if (!data.name || data.name.length > 120) {
    return { status: "error", message: "Enter your name (up to 120 characters)." };
  }
  if (!isValidEmail(data.email)) {
    return { status: "error", message: "Enter a valid email address." };
  }
  if (data.phone.length > 60 || data.country.length > 100) {
    return { status: "error", message: "Check the phone and country fields, then try again." };
  }
  if (!data.destination || data.destination.length > 160) {
    return { status: "error", message: "Enter a destination (up to 160 characters)." };
  }
  if (data.message.length < 5 || data.message.length > 5000) {
    return { status: "error", message: "Your message must be between 5 and 5,000 characters." };
  }

  const travelerCount = Number(data.travelers);
  if (!Number.isInteger(travelerCount) || travelerCount < 1 || travelerCount > 30) {
    return { status: "error", message: "Choose between 1 and 30 travelers." };
  }

  if (data.travelDate && Number.isNaN(Date.parse(`${data.travelDate}T00:00:00.000Z`))) {
    return { status: "error", message: "Enter a valid travel date." };
  }

  try {
    const notification = bookingNotificationEmail(data);
    await sendEmail({
      to: getContactInbox(),
      replyTo: data.email,
      ...notification,
    });

    const confirmation = bookingConfirmationEmail(data);
    await sendEmail({ to: data.email, ...confirmation });

    return { status: "success", message: "Your trip inquiry has been sent. We will be in touch soon." };
  } catch {
    console.error("Booking inquiry email could not be sent.");
    return { status: "error", message: "We could not send your inquiry. Please try again or contact us directly." };
  }
}

export async function subscribeToNewsletter(_previousState: FormActionState, formData: FormData): Promise<FormActionState> {
  if (readString(formData, "website")) {
    return { status: "success", message: "Thank you for subscribing." };
  }

  const email = readString(formData, "email");
  if (!isValidEmail(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  try {
    const notification = newsletterNotificationEmail(email);
    await sendEmail({ to: getContactInbox(), ...notification });

    const welcome = newsletterWelcomeEmail(email);
    await sendEmail({ to: email, ...welcome });

    return { status: "success", message: "You are subscribed. Look out for travel inspiration in your inbox." };
  } catch {
    console.error("Newsletter subscription email could not be sent.");
    return { status: "error", message: "We could not complete your subscription. Please try again." };
  }
}