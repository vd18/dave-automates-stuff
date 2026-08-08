import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/sections";
import { blogPosts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Dave Vandan | GoHighLevel & Automation Insights" },
      {
        name: "description",
        content:
          "Notes on GoHighLevel, CRM automation, Meta Ads, and WordPress from Dave Vandan — practical breakdowns of the systems behind automated lead generation.",
      },
      { property: "og:title", content: "Blog — Dave Vandan | GoHighLevel & Automation Insights" },
      {
        property: "og:description",
        content: "Practical breakdowns of GoHighLevel, CRM automation, Meta Ads, and WordPress systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dave-vandan.netlify.app/blog" },
    ],
    links: [{ rel: "canonical", href: "https://dave-vandan.netlify.app/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <section className="relative pt-32 pb-20 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 [background:var(--gradient-hero)]" />
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Blog
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Notes on <span className="text-gradient">automation, CRM & growth systems</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Practical breakdowns of how GoHighLevel, Meta Ads, WordPress, and AI automation come together
            to build systems that actually generate and follow up on leads.
          </p>

          <div className="mt-14 grid gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group glass-card block rounded-2xl border border-border p-6 transition hover:border-accent/50 sm:p-8"
              >
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-xl font-bold sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">{post.description}</p>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                  <span className="ml-auto inline-flex items-center gap-1 font-medium text-foreground opacity-0 transition group-hover:opacity-100">
                    Read post
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
