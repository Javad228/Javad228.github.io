import { profile } from "@/content/portfolio";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 lg:px-8">
      <div className="glass-panel edge-frame mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl px-5 py-3.5 lg:px-7">
        <a href="#top" className="group inline-flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600 text-xs font-extrabold tracking-wider text-white shadow-lg shadow-emerald-700/30">
            JB
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-emerald-700">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
          <a href="#projects" className="transition-colors hover:text-emerald-700">
            Projects
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-emerald-700">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-emerald-700">
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="shimmer-button rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 px-4 py-2 text-white shadow-lg shadow-emerald-700/20 transition-transform hover:-translate-y-0.5"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
