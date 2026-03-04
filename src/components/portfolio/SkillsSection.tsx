import { sectionCopy, SkillTag } from "@/content/portfolio";

interface SkillsSectionProps {
  skills: SkillTag[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="relative border-b border-slate-900/10 bg-white px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(20,184,166,0.1),transparent_36%),radial-gradient(circle_at_92%_0%,rgba(59,130,246,0.1),transparent_34%)]" />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="reveal-up mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">{sectionCopy.skillsEyebrow}</p>
          <h2 className="section-title">{sectionCopy.skillsTitle}</h2>
          <p className="mt-4 text-slate-600">{sectionCopy.skillsSubtitle}</p>
        </div>

        <div className="reveal-up reveal-delay-1 mt-12 flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-chip px-4 py-2.5 text-sm"
              style={{ animationDelay: `${Math.min(index * 0.03, 0.28)}s` }}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
