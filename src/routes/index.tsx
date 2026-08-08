import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import {
  Hero, About, Skills, Services, Projects, Experience, Stack, Contact, Footer,
} from "@/components/portfolio/sections";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dave Vandan — GoHighLevel & WordPress Developer" },
      { name: "google-site-verification", content: "-avROYPWtQ6gAboFTI7mreZgmGjtokhaQ7Uup2AUnik" },
      { name: "description", content: "Dave Vandan is a GoHighLevel (GHL) Expert, CRM Automation Developer, and WordPress Specialist building marketing systems that automate lead generation, onboarding, and sales pipelines." },
      { property: "og:title", content: "Dave Vandan — GoHighLevel & WordPress Developer" },
      { property: "og:description", content: "Dave Vandan — GoHighLevel, CRM automation, funnels, and WordPress. Automated growth systems for modern businesses." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dave-vandan.netlify.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dave Vandan — GoHighLevel & WordPress Developer" },
      { name: "twitter:description", content: "GoHighLevel Expert, CRM Automation Developer, and WordPress Specialist." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
      { rel: "canonical", href: "https://dave-vandan.netlify.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dave Vandan",
          "jobTitle": "GoHighLevel Expert & WordPress Developer",
          "url": "https://dave-vandan.netlify.app/",
          "knowsAbout": ["GoHighLevel", "CRM Automation", "WordPress Development", "Meta Ads", "AI Automation", "Lead Generation"],
          "worksFor": { "@type": "Organization", "name": "Mutant Technologies" },
          "address": { "@type": "PostalAddress", "addressLocality": "Junagadh", "addressRegion": "Gujarat", "addressCountry": "IN" }
        }),
      },
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
