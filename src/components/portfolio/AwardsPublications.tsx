import Image from "next/image";
import { award, publications, sectionCopy } from "@/content/portfolio";

export function AwardsPublications() {
  return (
    <section className="relative border-y border-slate-900/10 bg-[#081427] px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(20,184,166,0.22),transparent_42%),radial-gradient(circle_at_85%_25%,rgba(59,130,246,0.24),transparent_40%)]" />
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(110deg,rgba(255,255,255,0.06),transparent_25%,transparent_75%,rgba(255,255,255,0.06))]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="reveal-up mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-100">
            {sectionCopy.awardsEyebrow}
          </p>
          <h2 className="mt-5 text-[clamp(2rem,3vw,3.4rem)] font-semibold tracking-tight text-white">{sectionCopy.awardsTitle}</h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="neo-card reveal-up reveal-delay-1 rounded-3xl p-8 text-slate-900">
            <h3 className="text-2xl font-semibold">{award.title}</h3>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">{award.organization}</p>
            <p className="mt-4 leading-7 text-slate-700">{award.description}</p>
            <a href={award.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex text-sm font-semibold text-emerald-700 underline underline-offset-4">
              {award.linkLabel}
            </a>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <Image src={award.image} alt={award.imageAlt} width={1200} height={900} className="h-auto w-full object-cover" />
            </div>
          </article>

          <article className="edge-frame reveal-up reveal-delay-2 rounded-3xl border border-white/15 bg-slate-900/70 p-8 shadow-2xl shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">Publications in Software Engineering and Machine Learning</h3>
            <ul className="mt-7 space-y-4">
              {publications.map((publication) => (
                <li key={publication.citation} className="rounded-2xl border border-white/10 bg-slate-900/85 p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    {publication.link ? (
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm leading-7 text-slate-200 transition-colors hover:text-emerald-200"
                      >
                        {publication.citation}
                      </a>
                    ) : (
                      <p className="text-sm leading-7 text-slate-200">{publication.citation}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
