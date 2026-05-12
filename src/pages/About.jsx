import {
  ContactCta,
  DataExperienceSection,
  PageHeader,
  ProcessSection,
  ResumeSection,
  SkillsSection,
  StatsSection,
} from "../components/Sections.jsx";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        text="A resume view focused on the product-data strengths, industry context, tools, process, and experience patterns behind my work."
      />
      <ResumeSection />
      <DataExperienceSection />
      <SkillsSection />
      <ProcessSection />
      <StatsSection />
      <ContactCta />
    </>
  );
}
