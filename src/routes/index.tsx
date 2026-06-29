import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { FeaturedModels } from "@/components/site/FeaturedModels";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { WhyUs } from "@/components/site/WhyUs";
import { Auditions } from "@/components/site/Auditions";
import { Testimonials } from "@/components/site/Testimonials";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";
import { Cursor } from "@/components/site/Cursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FOCUL STAR — Where Stars Are Created" },
      { name: "description", content: "India's premium modeling, talent and fashion agency. Discover models, auditions, brand collaborations and the FOCUL STAR academy." },
      { property: "og:title", content: "FOCUL STAR — Where Stars Are Created" },
      { property: "og:description", content: "India's Premium Modeling, Talent & Fashion Agency." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <FeaturedModels />
        <Services />
        <Gallery />
        <WhyUs />
        <Auditions />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
