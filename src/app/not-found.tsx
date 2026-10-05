import Link from "next/link";
import Container from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f3ed]">
      <Container className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-[#3c6c62]">404</p>
        <h1 className="mt-4 font-serif text-6xl text-[#1b221e]">Page not found</h1>
        <p className="mt-5 text-base leading-8 text-[#4d564f]">The page you are looking for may have moved or no longer exists.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-white">
          Back to home
        </Link>
      </Container>
    </main>
  );
}
