'use client';

import { useEffect, useState, type CSSProperties } from 'react';

import { NAV } from '@/lib/site';
import { WORDMARK_GLYPHS, WORDMARK_VIEWBOX } from '@/lib/wordmark';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`pk-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="pk-wrap pk-header-row">
        <a href="/" className="pk-wordmark" aria-label="gut avatar, home" onClick={() => setOpen(false)}>
          <svg viewBox={WORDMARK_VIEWBOX} role="img" aria-label="gut avatar">
            {WORDMARK_GLYPHS.map((d, i) => (
              <path
                key={i}
                d={d}
                pathLength={1}
                className={i === 0 ? 'pk-wm-g' : 'pk-wm-l'}
                style={{ '--i': i } as CSSProperties}
              />
            ))}
          </svg>
        </a>

        <nav className="pk-nav" aria-label="Main">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.label === 'Contact' ? 'pk-nav-cta' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="pk-burger"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
