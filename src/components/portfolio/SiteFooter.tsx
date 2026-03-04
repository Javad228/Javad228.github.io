import { footer, profile } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="relative bg-[#050b1a] px-6 py-12 text-slate-300 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(20,184,166,0.16),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.16),transparent_32%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-xl font-semibold text-white">{profile.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">{footer.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {footer.quickLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="footer-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Contact</h3>
          <a href={`mailto:${profile.email}`} className="footer-link mt-3 inline-flex text-sm">
            {profile.email}
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-10 w-full max-w-7xl border-t border-slate-800 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
