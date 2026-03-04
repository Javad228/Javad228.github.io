"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { filterCategories, PortfolioProject, sectionCopy } from "@/content/portfolio";

interface ProjectsSectionProps {
  projects: PortfolioProject[];
}

const stripeClasses = ["from-emerald-500 to-cyan-500", "from-blue-500 to-sky-500", "from-slate-700 to-slate-900"];

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((project) => project.categories.includes(selectedCategory));
  }, [projects, selectedCategory]);

  return (
    <section id="projects" className="relative border-b border-slate-900/10 bg-[#f0f6ff] px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(20,184,166,0.14),transparent_38%),radial-gradient(circle_at_92%_16%,rgba(59,130,246,0.16),transparent_38%)]" />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="reveal-up mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">{sectionCopy.projectsEyebrow}</p>
          <h2 className="section-title">{sectionCopy.projectsTitle}</h2>
          <p className="mt-4 text-slate-600">{sectionCopy.projectsSubtitle}</p>
        </div>

        <div className="reveal-up reveal-delay-1 mt-11 flex flex-wrap justify-center gap-2">
          {filterCategories.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  active
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                    : "border border-slate-300 bg-white/85 text-slate-700 hover:border-slate-500 hover:text-slate-900"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              className="project-tile reveal-up group"
              style={{ animationDelay: `${Math.min(index * 0.05, 0.35)}s` }}
            >
              <div className={`h-1 bg-gradient-to-r ${stripeClasses[index % stripeClasses.length]}`} />

              <div className="p-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  {project.video ? (
                    <video
                      src={project.video}
                      poster={project.image}
                      className="h-52 w-full bg-black object-cover transition-transform duration-500 group-hover:scale-105"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={800}
                      className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">{project.title}</h3>
                {project.paperUpcoming && (
                  <p className="mt-2 inline-flex rounded-full border border-amber-300 bg-amber-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-800">
                    Paper Upcoming
                  </p>
                )}
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.categories.slice(0, 4).map((category) => (
                    <span key={category} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                      {category}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-2">
                  <Link href={project.link} className="shimmer-button rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-700">
                    View
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-800 transition-colors hover:border-slate-500"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
