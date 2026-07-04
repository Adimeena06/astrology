import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Cursor } from "@/components/site/Cursor";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acharya Mehak Vats — Vedic Astrologer & Spiritual Consultant" },
      { name: "description", content: "Personalized Vedic astrology, kundli, palmistry, tarot, numerology and vastu consultations with Acharya Mehak Vats. Book on WhatsApp." },
      { property: "og:title", content: "Acharya Mehak Vats — Ancient Wisdom. Modern Guidance." },
      { property: "og:description", content: "Personalized Vedic astrology and spiritual consultations, online and in person." },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Acharya Mehak Vats",
          description: "Vedic Astrologer & Spiritual Consultant offering personalized guidance.",
          telephone: "+91-76689-52567",
          areaServed: "Worldwide",
          url: "/",
          sameAs: ["https://www.instagram.com/acharyamehakvats/"],
        },
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
