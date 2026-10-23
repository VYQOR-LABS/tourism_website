import { notFound } from "next/navigation";
import BookingPageContent from "@/components/booking/booking-page-content";
import { destinations } from "@/data/destinations";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  return getPageMetadata({
    title: destination ? `Plan a trip to ${destination.name}` : "Plan an East Africa Safari",
    description: destination
      ? `Start planning a ${destination.averageStay} trip to ${destination.name}, ${destination.country}.`
      : "Plan a trip to an East Africa destination.",
    path: `/destinations/${slug}/booking`,
  });
}

export default async function DestinationBookingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) notFound();

  return (
    <BookingPageContent
      initialDestination={destination.name}
      initialDuration={destination.averageStay}
      initialDestinationSlug={destination.slug}
      selection={{
        kind: "destination",
        id: destination.slug,
        title: destination.name,
        destination: destination.name,
        duration: destination.averageStay,
        summary: destination.description,
      }}
    />
  );
}
