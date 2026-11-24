import type { CSSProperties } from 'react';
import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Reveal } from '@/components/Reveal';
import { TestimonialVideo } from '@/components/TestimonialVideo';
import { ArrowRight } from '@/components/icons';
import { LINKS } from '@/lib/site';
import { MOMENTS } from '@/lib/testimonials';

export const metadata: Metadata = {
  title: 'Workshops & Speaking Events · Payal Kothari',
  description:
    'Workshops and speaking events on gut-brain health, holistic weight loss, stress management, longevity and empowerment, for corporates, schools, conferences and private retreats.',
};

const d = (delay: string) => ({ '--d': delay }) as CSSProperties;

/* Copy and media from payalkothari.com/workshops-and-speaking-events. */
const TOPICS = [
  { t: 'The Gut-Brain Axis', b: 'Your second brain and its role in mental health.' },
  { t: 'Holistic Weight Loss', b: 'Beyond calories: balancing hormones, sleep, and stress.' },
  { t: 'From Stress to Success', b: 'How nutrition impacts performance and resilience.' },
  { t: 'Mindset Mastery', b: 'Using NLP strategies to overcome health challenges.' },
  { t: 'Longevity Secrets', b: 'Insights from the Blue Zone diet and lifestyle.' },
  { t: 'Empowering Women', b: 'Nutrition, hormones, and self-care for lifelong health.' },
];

const VENUES = [
  { t: 'Corporates', b: 'Health and wellness days, leadership retreats, team-building sessions.' },
  { t: 'Schools and Universities', b: 'Talks for students, parents, and faculty on nutrition and mental health.' },
  { t: 'Conferences and Expos', b: 'Keynote addresses for health, wellness, and lifestyle events.' },
  { t: 'Private Retreats', b: 'Customized sessions for intimate groups focusing on wellness transformations.' },
];

const EVENT_VIDEO = {
  poster: '/images/speaking/video-poster.webp',
  w: 1280,
  h: 720,
  src: 'https://video.wixstatic.com/video/0230cf_49bb232859da43459f9a0f25546cf9e4/1080p/mp4/file.mp4',
};

const STAGE = [
  { src: '/images/speaking/bni-gut-presentation.webp', w: 1600, h: 900, alt: 'Payal Kothari presenting on the gut at BNI' },
  { src: '/images/speaking/eo-gut-workshop.webp', w: 1280, h: 853, alt: 'Payal Kothari at an EO gut workshop' },
  { src: '/images/speaking/food-as-medicine.webp', w: 1600, h: 1600, alt: 'Food as Medicine workshop' },
  { src: '/images/speaking/event-portrait.webp', w: 1280, h: 960, alt: 'Payal Kothari at a speaking event' },
];

const STRIPS = [
  { src: '/images/speaking/strip-three.webp', w: 1600, h: 342 },
  { src: '/images/speaking/strip-two.webp', w: 1600, h: 266 },
];

export default function Speaking() {
  return (
    <>
      <Reveal />
      <Header />

      <main className="pk-tm">
        {/* ── INTRO ────────────────────────────────────────────────────── */}
        <section className="pk-tm-intro">
          <div className="pk-wrap pk-head">
            <p className="pk-eyebrow is-center" data-reveal>
              Transformative Health &amp; Wellness Insights For Every Audience
            </p>
            <h1 className="pk-display pk-tm-title" data-reveal style={d('.06s')}>
              Workshops And Speaking Events
            </h1>
            <p className="pk-lead" data-reveal style={d('.12s')}>
              Engage in transformative workshops and speaking events covering gut-brain health, holistic
              weight loss, stress management, longevity, and empowerment, ideal for corporates, schools, and
              retreats.
            </p>
            <div className="pk-center pk-sp-cta" data-reveal style={d('.18s')}>
              <a href={LINKS.speaking} className="pk-btn">
                Invite Payal To Speak <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* ── ON STAGE ─────────────────────────────────────────────────── */}
        <section className="pk-section pk-tint">
          <div className="pk-wrap">
            <div className="pk-sp-video" data-reveal>
              <TestimonialVideo video={EVENT_VIDEO} index={0} />
            </div>
            <div className="pk-tm-masonry">
              {STAGE.map((p) => (
                <figure key={p.src} className="pk-tm-photo" data-reveal>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
            {STRIPS.map((s) => (
              <figure key={s.src} className="pk-tm-photo pk-sp-strip" data-reveal>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt="Payal Kothari at workshops and events" width={s.w} height={s.h} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </section>

        {/* ── TOPICS & VENUES ──────────────────────────────────────────── */}
        <section className="pk-section">
          <div className="pk-wrap pk-sp-cols">
            <div>
              <h2 className="pk-h2" data-reveal>
                Key Topics For Speaking Engagements
              </h2>
              <dl className="pk-sp-list">
                {TOPICS.map((x, i) => (
                  <div key={x.t} data-reveal style={d(`${0.04 + i * 0.04}s`)}>
                    <dt>{x.t}</dt>
                    <dd>{x.b}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="pk-h2" data-reveal>
                Ideal Venues For Speaking Events
              </h2>
              <dl className="pk-sp-list">
                {VENUES.map((x, i) => (
                  <div key={x.t} data-reveal style={d(`${0.04 + i * 0.04}s`)}>
                    <dt>{x.t}</dt>
                    <dd>{x.b}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ── WORKSHOPS & EVENTS GALLERY ───────────────────────────────── */}
        <section className="pk-section pk-tint">
          <div className="pk-wrap">
            <h2 className="pk-h2 is-center pk-tm-h2" data-reveal>
              Workshops &amp; Events
            </h2>
            <div className="pk-tm-masonry is-dense">
              {MOMENTS.map((p, i) => (
                <figure key={p.src} className="pk-tm-photo" data-reveal>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={`Payal Kothari with clients and attendees ${i + 1}`}
                    width={p.w}
                    height={p.h}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSE ────────────────────────────────────────────────────── */}
        <section className="pk-section">
          <div className="pk-wrap pk-head">
            <h2 className="pk-h2 is-center" data-reveal>
              Ready to Transform Your Health?
            </h2>
            <p className="pk-lead" data-reveal style={d('.06s')}>
              Book a transformative workshop or speaking event today! Unlock health insights and actionable
              strategies to boost wellness, resilience, and performance for your team or group.
            </p>
            <div className="pk-center pk-sp-cta" data-reveal style={d('.12s')}>
              <a href={LINKS.speaking} className="pk-btn">
                Invite Payal To Speak <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
