import {
  BlogPreview,
  ContactCta,
  FeaturedWork,
  Hero,
  QuickLinks,
  ServicesSection,
  SpecializationsSection,
  StatsSection,
  Testimonial,
} from "../components/Sections.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <StatsSection />
      <ServicesSection />
      <SpecializationsSection />
      <FeaturedWork />
      <Testimonial />
      <BlogPreview />
      <ContactCta />
    </>
  );
}
