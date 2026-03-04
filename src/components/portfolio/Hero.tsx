"use client";

import { type CSSProperties, useEffect, useRef } from "react";
import Image from "next/image";
import { hero, profile, projects, publications } from "@/content/portfolio";

const spotlightTags = ["Cloud Architecture", "NLP", "Computer Vision"];

export function Hero() {
  const projectCount = projects.length;
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const updateInteractiveVars = (
    x: number,
    y: number,
    tiltX: number,
    tiltY: number,
    shiftX: number,
    shiftY: number,
    glowAlpha: number
  ) => {
    const section = sectionRef.current;
    if (!section) return;
    section.style.setProperty("--mx", `${x}px`);
    section.style.setProperty("--my", `${y}px`);
    section.style.setProperty("--tilt-x", `${tiltX}deg`);
    section.style.setProperty("--tilt-y", `${tiltY}deg`);
    section.style.setProperty("--shift-x", `${shiftX}px`);
    section.style.setProperty("--shift-y", `${shiftY}px`);
    section.style.setProperty("--glow-alpha", glowAlpha.toString());
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;

    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const localX = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
    const localY = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
    const normalizedX = (localX / rect.width - 0.5) * 2;
    const normalizedY = (localY / rect.height - 0.5) * 2;
    const tiltX = Number((-normalizedY * 4.2).toFixed(2));
    const tiltY = Number((normalizedX * 5.5).toFixed(2));
    const shiftX = Number((normalizedX * 7).toFixed(2));
    const shiftY = Number((normalizedY * 5).toFixed(2));

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      updateInteractiveVars(localX, localY, tiltX, tiltY, shiftX, shiftY, 1);
      rafRef.current = null;
    });
  };

  const handlePointerLeave = () => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    updateInteractiveVars(rect.width * 0.5, rect.height * 0.38, 0, 0, 0, 0, 0);
  };

  const interactiveStyle: CSSProperties = {
    "--mx": "50%",
    "--my": "38%",
    "--tilt-x": "0deg",
    "--tilt-y": "0deg",
    "--shift-x": "0px",
    "--shift-y": "0px",
    "--glow-alpha": 0,
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="hero-interactive relative overflow-hidden px-4 pb-20 pt-14 sm:px-6 lg:px-10 lg:pb-24 lg:pt-20"
      style={interactiveStyle}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-transparent via-slate-800/20 to-transparent" />
        <div className="absolute -left-36 top-16 h-96 w-96 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute -right-32 top-6 h-[26rem] w-[26rem] rounded-full bg-blue-400/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute right-[52%] top-24 hidden h-[70%] w-px bg-gradient-to-b from-transparent via-slate-700/15 to-transparent lg:block" />
        <div className="hero-spotlight" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-start gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="reveal-up">
          <p className="inline-flex rounded-full border border-slate-900/15 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700">
            Software Engineering + Applied AI
          </p>

          <h1 className="mt-6 pb-1 text-[clamp(3rem,8.4vw,7.2rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-slate-900">
            <span className="block leading-[0.95]">Javad</span>
            <span className="heading-gradient block leading-[1.1] pb-[0.08em]">Baghirov</span>
          </h1>

          <p className="mt-4 max-w-2xl text-xl font-medium text-slate-800">{profile.title}</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{profile.summary}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {spotlightTags.map((tag) => (
              <span key={tag} className="signal-chip">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="shimmer-button rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              {hero.primaryCta}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-500"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <div className="glass-panel edge-frame mt-10 inline-flex rounded-2xl p-4">
            <div className="grid grid-cols-3 gap-7 text-center">
              <div>
                <p className="text-2xl font-semibold text-slate-900">{projectCount}</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-slate-900">{publications.length}</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Publications</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-slate-900">2024</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Award</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">{hero.scrollHint}</p>
        </div>

        <div className="reveal-up reveal-delay-2 mx-auto grid max-w-[380px] gap-5 sm:max-w-[430px] lg:mx-0 lg:justify-self-end">
          <article className="hero-tilt-card hero-tilt-card--strong edge-frame luxe-card overflow-hidden p-3">
            <div className="overflow-hidden rounded-[1.65rem] border border-slate-900/10 bg-slate-200/40">
              <Image
                src={profile.image}
                alt={profile.name}
                width={760}
                height={840}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </article>

          <article className="hero-tilt-card hero-tilt-card--soft edge-frame grid gap-4 rounded-3xl border border-slate-900/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-5 text-slate-100 shadow-2xl shadow-slate-900/15 sm:p-6 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Currently Focused On</p>
              <p className="mt-3 text-[15px] leading-8 text-slate-300">Machine learning systems, cloud-native architecture, and production-grade interfaces.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-300">Reach Out</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-3 inline-flex whitespace-nowrap rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white transition-colors hover:text-emerald-300 sm:text-[12px]"
              >
                {profile.email}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
