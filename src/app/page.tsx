import { AwardsPublications } from "@/components/portfolio/AwardsPublications";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { FeaturedProject } from "@/components/portfolio/FeaturedProject";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { projects, skillTags } from "@/content/portfolio";

export default function PortfolioPage() {
  const featuredProject = projects.find((project) => project.title === "SlideParser");

  if (!featuredProject) {
    throw new Error("Featured SlideParser project is missing.");
  }

  return (
    <div className="portfolio-stage">
      <div className="ambient-orb ambient-orb--a" />
      <div className="ambient-orb ambient-orb--b" />
      <div className="ambient-orb ambient-orb--c" />
      <div className="relative z-[1]">
        <SiteHeader />
        <main>
          <Hero />
          <AwardsPublications />
          <FeaturedProject project={featuredProject} />
          <ProjectsSection projects={projects} />
          <SkillsSection skills={skillTags} />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
