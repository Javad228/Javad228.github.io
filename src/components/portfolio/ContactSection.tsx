import { profile, sectionCopy } from "@/content/portfolio";

export function ContactSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-900/10 bg-slate-950 px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(20,184,166,0.25),transparent_40%),radial-gradient(circle_at_85%_30%,rgba(59,130,246,0.22),transparent_40%)]" />
        <div className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      </div>

      <div className="edge-frame reveal-up relative mx-auto w-full max-w-4xl rounded-[2rem] border border-white/20 bg-white/10 p-10 text-center backdrop-blur-sm">
        <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-100">
          {sectionCopy.contactEyebrow}
        </p>
        <h2 className="mt-6 text-[clamp(2rem,4vw,3.75rem)] font-semibold tracking-tight text-white">{sectionCopy.contactTitle}</h2>
        <p className="mt-4 text-slate-200">{sectionCopy.contactSubtitle}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="shimmer-button rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200"
          >
            Get in touch
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/35 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
