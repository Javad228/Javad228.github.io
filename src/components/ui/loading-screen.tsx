"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const startedAt = performance.now();
    const minDurationMs = 950;
    const fadeMs = 520;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let settleTimer: ReturnType<typeof setTimeout> | undefined;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;

    const finish = () => {
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(0, minDurationMs - elapsed);

      settleTimer = setTimeout(() => {
        setExiting(true);
        exitTimer = setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = previousOverflow;
        }, fadeMs);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      if (settleTimer) clearTimeout(settleTimer);
      if (exitTimer) clearTimeout(exitTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("load", finish);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`site-loader ${exiting ? "site-loader--exit" : ""}`} role="status" aria-live="polite" aria-label="Loading portfolio">
      <div className="site-loader__aurora site-loader__aurora--a" />
      <div className="site-loader__aurora site-loader__aurora--b" />
      <div className="site-loader__aurora site-loader__aurora--c" />

      <div className="site-loader__grid" />

      <div className="site-loader__center">
        <div className="site-loader__orbital">
          <div className="site-loader__ring site-loader__ring--outer" />
          <div className="site-loader__ring site-loader__ring--inner" />
          <div className="site-loader__core">JB</div>
        </div>

        <p className="site-loader__label">Loading Portfolio</p>
        <p className="site-loader__title">Preparing your experience</p>
        <div className="site-loader__bar">
          <span />
        </div>
      </div>
    </div>
  );
}
