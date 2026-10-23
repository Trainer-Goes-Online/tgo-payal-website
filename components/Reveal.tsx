'use client';

import { useEffect } from 'react';

/**
 * Fail-open scroll reveal: [data-reveal] content is visible by default and is
 * only hidden once this script has armed <html data-reveal-armed>, so a
 * blocked or slow script can never leave a section blank.
 */
export function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    root.setAttribute('data-reveal-armed', '');

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    nodes.forEach((n) => io.observe(n));

    return () => io.disconnect();
  }, []);

  return null;
}
