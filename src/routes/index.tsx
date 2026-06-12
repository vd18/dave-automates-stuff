import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import {
  Hero, About, Skills, Services, Projects, Experience, Stack, Contact, Footer,
} from "@/components/portfolio/sections";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dave Vandan — Marketing Automation & CRM Developer" },
      { name: "description", content: "GoHighLevel Expert, CRM Automation Developer, and WordPress Specialist building marketing systems that automate lead generation, onboarding, and sales pipelines." },
      { property: "og:title", content: "Dave Vandan — Marketing Automation & CRM Developer" },
      { property: "og:description", content: "GoHighLevel, CRM automation, funnels, and WordPress — automated growth systems for modern businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Stack />

      <Contact />
      <Footer />
    </main>
  );
}
