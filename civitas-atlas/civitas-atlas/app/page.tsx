import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { VisionMission } from "@/components/sections/vision-mission";
import { FeaturedProduct } from "@/components/sections/featured-product";
import { FutureProducts } from "@/components/sections/future-products";
import { TechStack } from "@/components/sections/tech-stack";
import { WhyItMatters } from "@/components/sections/why-it-matters";
import { Roadmap } from "@/components/sections/roadmap";
import { Founder } from "@/components/sections/founder";
import { Research } from "@/components/sections/research";
import { Contact } from "@/components/sections/contact";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Civitas Atlas Technologies",
  url: "https://www.civitasatlas.in",
  description:
    "Civitas Atlas Technologies builds digital public infrastructure and land intelligence platforms for India, starting with MahaAtlas, the Maharashtra Land Intelligence Platform.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "SoftwareApplication",
      name: "MahaAtlas",
      applicationCategory: "GIS / LegalTech / PropTech Platform",
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <VisionMission />
        <FeaturedProduct />
        <FutureProducts />
        <TechStack />
        <WhyItMatters />
        <Roadmap />
        <Founder />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
