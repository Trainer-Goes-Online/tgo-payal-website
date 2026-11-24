'use client';

import { useEffect } from 'react';

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function tween(from: number, to: number, ms: number, step: (v: number) => void) {
  const start = performance.now();
  let raf = 0;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / ms);
    step(from + (to - from) * easeOut(t));
    if (t < 1) raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}

/** Site-wide micro motion: scroll progress line, count-up figures, marquees that ease to a stop. */
export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const cleanups: (() => void)[] = [];

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = root.scrollHeight - window.innerHeight;
        root.style.setProperty('--pk-scroll', String(max > 0 ? window.scrollY / max : 0));
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => cleanups.forEach((c) => c());
    }

    // The markup already holds the final figure, so a blocked script still shows the right number.
    const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
    if (counters.length && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            io.unobserve(e.target);
            const el = e.target as HTMLElement;
            const target = Number(el.dataset.count);
            cleanups.push(tween(0, target, 1600, (v) => (el.textContent = String(Math.round(v)))));
          }
        },
        { threshold: 0.6 },
      );
      counters.forEach((c) => {
        c.style.minWidth = `${c.offsetWidth}px`;
        c.textContent = '0';
        io.observe(c);
      });
      cleanups.push(() => io.disconnect());
    }

    for (const marquee of Array.from(document.querySelectorAll<HTMLElement>('.pk-marquee'))) {
      const track = marquee.querySelector<HTMLElement>('.pk-marquee-track');
      if (!track?.getAnimations) continue;
      let rate = 1;
      let stop: (() => void) | undefined;
      const ease = (to: number) => {
        stop?.();
        stop = tween(rate, to, 700, (v) => {
          rate = v;
          track.getAnimations().forEach((a) => (a.playbackRate = v));
        });
      };
      const slow = () => ease(0.08);
      const resume = () => ease(1);
      marquee.addEventListener('mouseenter', slow);
      marquee.addEventListener('mouseleave', resume);
      cleanups.push(() => {
        stop?.();
        marquee.removeEventListener('mouseenter', slow);
        marquee.removeEventListener('mouseleave', resume);
      });
    }

    return () => cleanups.forEach((c) => c());
  }, []);

  return null;
}
