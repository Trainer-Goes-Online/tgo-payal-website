import type { CSSProperties } from 'react';
import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Reveal } from '@/components/Reveal';
import { TestimonialVideo } from '@/components/TestimonialVideo';
import { ArrowRight, ArrowUpRight } from '@/components/icons';
import { LINKS } from '@/lib/site';
import { MOMENTS, RESULT_PHOTOS, VIDEOS, WRITTEN, type Photo } from '@/lib/testimonials';

export const metadata: Metadata = {
  title: 'Client Testimonials · Payal Kothari',
  description:
    'Video testimonials, before and after results and moments from the workshops and events of Payal Kothari, gut health expert and weight loss specialist.',
};

const d = (delay: string) => ({ '--d': delay }) as CSSProperties;

function Tile({ photo, alt }: { photo: Photo; alt: string }) {
  return (
    <figure className="pk-tm-photo" data-reveal>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={alt} width={photo.w} height={photo.h} loading="lazy" decoding="async" />
    </figure>
  );
}

export default function Testimonials() {
  return (
    <>
      <Reveal />
      <Header />

      <main className="pk-tm">
        {/* ── INTRO ────────────────────────────────────────────────────── */}
        <section className="pk-tm-intro">
          <div className="pk-wrap pk-head">
            <p className="pk-eyebrow is-center" data-reveal>
              Different Approach. Visible Results.
            </p>
            <h1 className="pk-display pk-tm-title" data-reveal style={d('.06s')}>
              Client Testimonials
            </h1>
            <nav className="pk-tm-jump" aria-label="On this page" data-reveal style={d('.12s')}>
              <a href="#videos">Video Testimonials</a>
              <a href="#stories">In Their Words</a>
              <a href="#results">Before &amp; After</a>
              <a href="#moments">Workshops &amp; Events</a>
            </nav>
          </div>
        </section>

        {/* ── VIDEOS ───────────────────────────────────────────────────── */}
        <section id="videos" className="pk-section pk-tint">
          <div className="pk-wrap">
            <h2 className="pk-h2 is-center pk-tm-h2" data-reveal>
              Video Testimonials
            </h2>
            <div className="pk-tm-masonry is-videos">
              {VIDEOS.map((v, i) => (
                <TestimonialVideo key={v.src} video={v} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── WRITTEN · the client stories from Payal's own document ───── */}
        <section id="stories" className="pk-section">
          <div className="pk-wrap">
            <p className="pk-eyebrow is-center" data-reveal>
              #Guttransformations with PKN
            </p>
            <h2 className="pk-h2 is-center pk-tm-h2" data-reveal style={d('.04s')}>
              In Their Words
            </h2>
            <div className="pk-tm-masonry is-quotes">
              {WRITTEN.map((w) => (
                <figure key={w.name} className="pk-tm-quote" data-reveal>
                  <blockquote>&ldquo;{w.quote}&rdquo;</blockquote>
                  <figcaption>
                    <span className="pk-tm-quote-name">{w.name}</span>
                    {w.who ? <span className="pk-tm-quote-who">{w.who}</span> : null}
                    {w.link ? (
                      <a href={w.link.href} target="_blank" rel="noopener noreferrer" className="pk-tm-quote-link">
                        As featured in {w.link.label} <ArrowUpRight size={13} />
                      </a>
                    ) : null}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── BEFORE & AFTER ───────────────────────────────────────────── */}
        <section id="results" className="pk-section pk-tint">
          <div className="pk-wrap">
            <h2 className="pk-h2 is-center pk-tm-h2" data-reveal>
              Before &amp; After
            </h2>
            <div className="pk-tm-masonry">
              {RESULT_PHOTOS.map((p, i) => (
                <Tile key={p.src} photo={p} alt={`Client before and after ${i + 1}`} />
              ))}
            </div>
          </div>
        </section>

        {/* ── WORKSHOPS & EVENTS ───────────────────────────────────────── */}
        <section id="moments" className="pk-section">
          <div className="pk-wrap">
            <h2 className="pk-h2 is-center pk-tm-h2" data-reveal>
              Workshops &amp; Events
            </h2>
            <div className="pk-tm-masonry is-dense">
              {MOMENTS.map((p, i) => (
                <Tile key={p.src} photo={p} alt={`Payal Kothari with clients and attendees ${i + 1}`} />
              ))}
            </div>
            <div className="pk-center pk-tm-cta" data-reveal>
              <a href={LINKS.consultation} className="pk-btn">
                Enquire About Consultations <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
