import Image from "next/image";
import Link from "next/link";
import { PortfolioProject, sectionCopy } from "@/content/portfolio";

interface FeaturedProjectProps {
  project: PortfolioProject;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <section className="relative border-b border-slate-900/10 bg-[linear-gradient(180deg,#eef6ff_0%,#f6fbff_100%)] px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="reveal-up mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">{sectionCopy.featuredEyebrow}</p>
          <h2 className="section-title">{sectionCopy.featuredTitle}</h2>
        </div>

        <article className="edge-frame reveal-up reveal-delay-1 relative mt-14 overflow-hidden rounded-[2rem] border border-slate-900/15 bg-slate-950 text-white shadow-2xl shadow-slate-900/25">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(20,184,166,0.28),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.25),transparent_35%)]" />
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                {project.badge?.text && (
                  <span className="rounded-full border border-blue-300/40 bg-blue-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-100">
                    {project.badge.text}
                  </span>
                )}
                {project.paperUpcoming && (
                  <span className="rounded-full border border-amber-300/40 bg-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-100">
                    Paper Upcoming
                  </span>
                )}
                <span className="rounded-full border border-emerald-300/40 bg-emerald-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-100">
                  Featured
                </span>
              </div>

              <h3 className="mt-6 text-4xl font-semibold tracking-tight lg:text-5xl">{project.title}</h3>
              <p className="mt-4 max-w-xl leading-7 text-slate-200">{project.description}</p>

              {project.website && (
                <a href={project.website} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-semibold text-emerald-300 underline underline-offset-4">
                  {project.websiteLabel || project.website}
                </a>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <span key={category} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                    {category}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={project.link} className="shimmer-button rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200">
                  View Project
                </Link>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/35 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="relative min-h-[300px] border-t border-white/10 lg:min-h-full lg:border-l lg:border-t-0">
              {project.video ? (
                <video
                  src={project.video}
                  poster={project.image}
                  className="h-full w-full bg-black object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : (
                <>
                  <Image src={project.image} alt={project.title} width={1600} height={1000} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-slate-900/10" />
                </>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
