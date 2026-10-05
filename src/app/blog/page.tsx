import Container from "@/components/ui/container";
import PageHero from "@/components/hero/page-hero";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import BlogCard from "@/components/blog/blog-card";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Field notes & inspiration"
          title="Travel inspiration and practical planning ideas"
          description="Explore concise guides, seasonal advice and useful insights for your next East Africa trip."
          image={blogPosts[0].image}
          imageAlt={blogPosts[0].title}
        />

        <section className="py-20">
          <Container className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
