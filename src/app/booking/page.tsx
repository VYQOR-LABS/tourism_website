import BookingPageContent, { type BookingPageSelection } from "@/components/booking/booking-page-content";
import { flightSafaris } from "@/data/flights";
import { tours } from "@/data/tours";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata({
  title: "Plan an East Africa Safari or Tour",
  description: "Tell Safariman Expeditions where you want to travel and what you would like to experience, and start planning your itinerary.",
  path: "/booking",
});

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ package?: string | string[]; flight?: string | string[] }>;
}) {
  const params = await searchParams;
  const packageSlug = typeof params.package === "string" ? params.package : undefined;
  const selectedPackage = tours.find((tour) => tour.slug === packageSlug);
  const flightId = typeof params.flight === "string" ? params.flight : undefined;
  const selectedFlight = flightSafaris.find((flight) => flight.id === flightId);
  const selection: BookingPageSelection | undefined = selectedPackage
    ? {
        kind: "tour",
        id: selectedPackage.slug,
        title: selectedPackage.title,
        destination: selectedPackage.destination,
        duration: selectedPackage.duration,
        summary: selectedPackage.summary,
      }
    : selectedFlight
      ? {
          kind: "flight",
          id: selectedFlight.id,
          title: selectedFlight.title,
          destination: selectedFlight.route,
          duration: selectedFlight.duration,
          summary: selectedFlight.description,
        }
      : undefined;

  return (
    <BookingPageContent
      initialPackageSlug={selectedPackage?.slug}
      initialDestination={selectedPackage?.destination ?? selectedFlight?.route}
      initialDuration={selectedPackage?.duration ?? selectedFlight?.duration}
      initialFlightId={selectedFlight?.id}
      selection={selection}
    />
  );
}
