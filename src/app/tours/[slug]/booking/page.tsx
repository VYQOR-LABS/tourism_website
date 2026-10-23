import { notFound } from "next/navigation";
import BookingPageContent from "@/components/booking/booking-page-content";
import { tours } from "@/data/tours";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);

  return getPageMetadata({
    title: tour ? `Request ${tour.title}` : "Plan an East Africa Tour",
    description: tour?.summary ?? "Request a personalized East Africa tour.",
    path: `/tours/${slug}/booking`,
  });
}

export default async function TourBookingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);

  if (!tour) notFound();

  return (
    <BookingPageContent
      initialPackageSlug={tour.slug}
      initialDestination={tour.destination}
      initialDuration={tour.duration}
      selection={{
        kind: "tour",
        id: tour.slug,
        title: tour.title,
        destination: tour.destination,
        duration: tour.duration,
        summary: tour.summary,
      }}
    />
  );
}
