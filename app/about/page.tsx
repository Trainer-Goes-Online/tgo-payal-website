import type { CSSProperties } from 'react';
import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import PressSection from '@/components/PressSection';
import { Reveal } from '@/components/Reveal';
import {
  ArrowRight,
  ArrowUpRight,
  ArticlesIcon,
  BookIcon,
  GradCapIcon,
  IntestineIcon,
  LaurelIcon,
  LotusIcon,
  MortarIcon,
  PencilIcon,
  PeopleIcon,
  ScaleIcon,
  SchoolIcon,
  SproutIcon,
  StomachIcon,
  StonesIcon,
  SunriseIcon,
  WorkshopIcon,
} from '@/components/icons';
import { BOOK_STORES, LINKS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Payal Kothari · Gut Health Nutritionist & Metabolic Longevity Advisor',
  description:
    'Payal Kothari is a certified Clinical Gut Health Nutritionist, Holistic Wellness Coach, NLP Master Practitioner, author of THE GUT and founder of GUT AVATAR.',
};

const d = (delay: string) => ({ '--d': delay }) as CSSProperties;

/* Titles as printed on each certificate, cropped from "ALL CERTIFICATES .jpg". */
const CERTIFICATES = [
  { src: '/images/certificates/iin-health-coach.webp', w: 376, h: 300, title: 'Integrative Nutrition Health Coach', by: 'Institute for Integrative Nutrition' },
  { src: '/images/certificates/medvarsity-diploma.webp', w: 413, h: 299, title: 'Diploma in Nutrition and Dietetics', by: 'Medvarsity, 2018' },
  { src: '/images/certificates/medvarsity-certificate.webp', w: 397, h: 286, title: 'Certificate in Nutrition and Dietetics', by: 'Medvarsity, 2018' },
  { src: '/images/certificates/nlp-classic-code.webp', w: 409, h: 285, title: 'Certified Classic Code NLP Practitioner', by: 'NLP Academy, 2019' },
  { src: '/images/certificates/nlp-new-code.webp', w: 394, h: 281, title: 'Certified New Code NLP Practitioner', by: 'NLP Academy, 2019' },
  { src: '/images/certificates/acsm-fitness-instructor.webp', w: 394, h: 286, title: 'Health/Fitness Instructor Workshop', by: 'American College of Sports Medicine, 2004' },
];

const STATS = [
  ['20+ Years of', 'Experience'],
  ['Thousands of', 'Lives Impacted'],
  ['800+ Workshops', 'Worldwide'],
];

const EXPERTISE = [
  { Icon: IntestineIcon, title: 'Digestive Health', body: 'Improve gut function, reduce discomfort and build a resilient digestive system.' },
  { Icon: ScaleIcon, title: 'Metabolic Balance', body: 'Support healthy metabolism, blood sugar, insulin response and sustainable weight management.' },
  { Icon: LotusIcon, title: 'Hormonal Wellbeing', body: 'Address underlying imbalances to restore hormonal harmony and overall wellbeing.' },
  { Icon: MortarIcon, title: 'Personalised Nutrition', body: 'Tailored, practical nutrition plans that fit your body, life and long-term health goals.' },
];

const TRUSTED_POINTS = [
  { Icon: PencilIcon, lead: '400+ articles', rest: 'in leading newspapers and lifestyle publications' },
  { Icon: PeopleIcon, lead: '800+ workshops', rest: 'across India, Dubai, London, the United States and Singapore' },
  { Icon: GradCapIcon, lead: 'Nutrition consultancy', rest: 'for premier schools and educational institutions' },
];

/* Photos cropped from the design reference; each card's label covers the
   label printed in the crop, so its position is a share of the card. */
const TRUSTED_PHOTOS = [
  { src: '/images/about/trusted-business-leaders.webp', w: 382, h: 296, label: 'Business Leaders', cls: 'is-leaders' },
  { src: '/images/about/trusted-private-clients.webp', w: 302, h: 276, label: 'Private Clients', cls: 'is-private' },
  { src: '/images/about/trusted-families.webp', w: 450, h: 354, label: 'Families', cls: 'is-families' },
  { src: '/images/about/trusted-schools.webp', w: 304, h: 279, label: 'Schools & Institutions', cls: 'is-schools' },
];

const TRUSTED_BAND = [
  { Icon: WorkshopIcon, title: 'Workshops', body: '800+ across India and globally' },
  { Icon: ArticlesIcon, title: 'Articles', body: '400+ in leading publications' },
  { Icon: SchoolIcon, title: 'School Consultancy', body: 'Nutrition guidance for premier education institutions' },
];

const STORY = [
  { Icon: StomachIcon, title: 'Early Illness', body: 'At two, I was diagnosed with tuberculosis, and the medication began a lifelong journey with a sensitive gut.' },
  { Icon: IntestineIcon, title: 'Years of Imbalance', body: 'As I grew, I faced persistent digestive challenges, food intolerances, weight gain, cravings and a constant feel of being out of balance.' },
  { Icon: LotusIcon, title: 'The Ayurvedic Turning Point', body: 'My mother introduced me to an Ayurvedic practitioner, who brought me back to simple, home-cooked meals, mindful eating and a deeper understanding of the food–body connection.' },
  { Icon: BookIcon, title: 'Study and Learning', body: 'That experience sparked a lifelong curiosity, leading me to study nutrition, holistic wellness, mind-body practices and metabolic health.' },
  { Icon: PeopleIcon, title: 'Helping Others', body: 'Today, as a mother of two, I’m passionate about helping others understand their bodies, heal their gut and create lasting, real-world wellness through every stage of life.' },
];

const PRINCIPLES = [
  { Icon: SproutIcon, title: 'A Whole-Person Lens', body: 'Address the interconnected systems, from digestion and metabolism to sleep, stress and emotional well-being.' },
  { Icon: StonesIcon, title: 'Personalised & Integrative', body: 'Blend nutritional science, Ayurveda-inspired practices, functional nutrition and mind-body tools, tailored to you.' },
  { Icon: SunriseIcon, title: 'Lasting Vitality', body: 'Build metabolic resilience, preserve strength and support healthy ageing, so you can feel your best for decades to come.' },
];

/* Clockwise from the top, matching the reference wheel. */
const WHEEL = [
  { src: '/images/about/approach-metabolism.webp', label: 'Metabolism', pos: 'is-n' },
  { src: '/images/about/approach-hormones.webp', label: 'Hormones', pos: 'is-ne' },
  { src: '/images/about/approach-sleep.webp', label: 'Sleep', pos: 'is-se' },
  { src: '/images/about/approach-energy.webp', label: 'Energy', pos: 'is-s' },
  { src: '/images/about/approach-mind-body.webp', label: 'Mind-Body', pos: 'is-sw' },
  { src: '/images/about/approach-longevity.webp', label: 'Longevity', pos: 'is-nw' },
];

const AVATAR_BENEFITS = [
  { Icon: IntestineIcon, label: ['Supports', 'Digestion'] },
  { Icon: SproutIcon, label: ['Nourishes', 'Gut Lining'] },
  { Icon: ScaleIcon, label: ['Promotes', 'Metabolic', 'Balance'] },
];

export default function About() {
  return (
    <>
      <Reveal />
      <Header />

      <main className="pk-ab">
        {/* ── MEET PAYAL ───────────────────────────────────────────────── */}
        <section className="pk-ab-hero">
          <div className="pk-wrap pk-split">
            <div className="pk-split-copy">
              <p className="pk-eyebrow pk-ab-hero-eyebrow" data-reveal>
                Gut Health Nutritionist &middot; Metabolic Longevity Advisor &middot; Author &middot; Founder, GUT AVATAR&trade;
              </p>
              <h1 className="pk-display" data-reveal style={d('.06s')}>
                Meet Payal Kothari
              </h1>
              <ul className="pk-ab-stats" data-reveal style={d('.12s')}>
                {STATS.map(([a, b]) => (
                  <li key={a}>
                    {a}
                    <br />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="pk-ab-quote" data-reveal style={d('.18s')}>
                &ldquo;True wellness begins in the gut. Longevity begins with how we nourish, understand and
                care for our bodies.&rdquo;
              </p>
              <span className="pk-ab-rule" aria-hidden />
            </div>
            <figure className="pk-ab-portrait" data-reveal style={d('.08s')}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/payal-about.png" alt="Payal Kothari" width={1122} height={1402} />
            </figure>
          </div>
        </section>

        {/* ── THE EXPERTISE ────────────────────────────────────────────── */}
        <section className="pk-section pk-tint">
          <div className="pk-wrap">
            <div className="pk-ab-expertise">
              <div>
                <h2 className="pk-h2" data-reveal>
                  The Expertise Behind the Transformation
                </h2>
                <p className="pk-ab-lede" data-reveal style={d('.06s')}>
                  With over two decades of experience, Payal guides individuals towards better digestive health,
                  metabolic balance, hormonal wellbeing and lasting, whole-body vitality.
                </p>
                <span className="pk-ab-rule" aria-hidden />
              </div>
              <ul className="pk-ab-cards">
                {EXPERTISE.map(({ Icon, title, body }, i) => (
                  <li key={title} className="pk-ab-card" data-reveal style={d(`${0.04 + i * 0.06}s`)}>
                    <span className="pk-ab-icon">
                      <Icon size={30} />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="pk-ab-lined-quote" data-reveal>
              <span aria-hidden />
              &ldquo;Don&rsquo;t just manage symptoms. Understand the body, address the underlying imbalances and
              build health that lasts.&rdquo;
              <span aria-hidden />
            </p>
          </div>
        </section>

        {/* ── TRUSTED BY LEADERS ───────────────────────────────────────── */}
        <section className="pk-section">
          <div className="pk-wrap">
            <div className="pk-ab-trusted">
              <div>
                <p className="pk-eyebrow is-lined" data-reveal>
                  About Payal Kothari
                </p>
                <h2 className="pk-h2" data-reveal style={d('.04s')}>
                  Trusted By Leaders. Chosen By Families.
                </h2>
                <div className="pk-body" data-reveal style={d('.08s')}>
                  <p>
                    Payal works with some of India&rsquo;s most prominent business leaders, industrialists, artists
                    and celebrities, along with families who value personalised, discreet and results-oriented
                    nutritional guidance.
                  </p>
                  <p>
                    Her expertise bridges science, education and real-world application to create better health for
                    individuals, families and institutions alike.
                  </p>
                </div>
                <ul className="pk-ab-points" data-reveal style={d('.12s')}>
                  {TRUSTED_POINTS.map(({ Icon, lead, rest }) => (
                    <li key={lead}>
                      <Icon size={26} />
                      <p>
                        <strong>{lead}</strong> {rest}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pk-ab-collage" data-reveal style={d('.06s')}>
                {TRUSTED_PHOTOS.map((p) => (
                  <figure key={p.src} className={p.cls}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.src} alt="" width={p.w} height={p.h} loading="lazy" />
                    <figcaption>{p.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <ul className="pk-ab-band" data-reveal>
              {TRUSTED_BAND.map(({ Icon, title, body }) => (
                <li key={title}>
                  <Icon size={42} />
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CERTIFICATIONS ───────────────────────────────────────────── */}
        <section className="pk-section pk-tint">
          <div className="pk-wrap">
            <h2 className="pk-h2 is-center pk-tm-h2" data-reveal>
              Certifications
            </h2>
            <ul className="pk-ab-certs">
              {CERTIFICATES.map((c, i) => (
                <li key={c.src} className="pk-ab-cert" data-reveal style={d(`${0.04 + i * 0.05}s`)}>
                  <figure>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.src} alt={`${c.title} certificate`} width={c.w} height={c.h} loading="lazy" />
                  </figure>
                  <p className="pk-card-title">{c.title}</p>
                  <p className="pk-ab-cert-by">{c.by}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── MY STORY ─────────────────────────────────────────────────── */}
        <section className="pk-section">
          <div className="pk-wrap pk-ab-story">
            <div>
              <p className="pk-eyebrow" data-reveal>
                My Story
              </p>
              <h2 className="pk-h2" data-reveal style={d('.04s')}>
                From Struggling With My Gut To Transforming Lives
              </h2>
              <p className="pk-ab-quote is-lg" data-reveal style={d('.08s')}>
                &ldquo;My greatest teacher wasn&rsquo;t a textbook. It was my own body.&rdquo;
              </p>
              <span className="pk-ab-rule" aria-hidden />
              <figure className="pk-ab-still" data-reveal style={d('.12s')}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about/story-still-life.webp"
                  alt=""
                  width={579}
                  height={352}
                  loading="lazy"
                />
              </figure>
            </div>
            <ol className="pk-ab-timeline">
              {STORY.map(({ Icon, title, body }, i) => (
                <li key={title} data-reveal style={d(`${0.04 + i * 0.06}s`)}>
                  <span className="pk-ab-blob">
                    <Icon size={40} />
                  </span>
                  <div>
                    <h3>
                      {i + 1}. {title}
                    </h3>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── MY APPROACH ──────────────────────────────────────────────── */}
        <section className="pk-section pk-tint">
          <div className="pk-wrap">
            <div className="pk-ab-approach">
              <div>
                <p className="pk-eyebrow" data-reveal>
                  My Approach
                </p>
                <h2 className="pk-h2" data-reveal style={d('.04s')}>
                  Where Gut Health Meets Metabolic Longevity
                </h2>
                <p className="pk-ab-lede is-sans" data-reveal style={d('.08s')}>
                  Gut health is a powerful foundation for overall wellness, deeply connected to metabolism, hormones,
                  sleep, energy, emotional well-being and long-term vitality. My approach brings these pieces together
                  to create lasting, personalised change, beyond quick fixes or restraint.
                </p>
                <p className="pk-eyebrow is-lined pk-ab-principles-h" data-reveal>
                  My approach is built on three principles
                </p>
                <ul className="pk-ab-cards is-soft">
                  {PRINCIPLES.map(({ Icon, title, body }, i) => (
                    <li key={title} className="pk-ab-card" data-reveal style={d(`${0.04 + i * 0.06}s`)}>
                      <span className="pk-ab-icon">
                        <Icon size={28} />
                      </span>
                      <div>
                        <h3>{title}</h3>
                        <p className="is-sans">{body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pk-ab-wheel" data-reveal style={d('.1s')}>
                <svg className="pk-ab-wheel-lines" viewBox="0 0 100 100" aria-hidden>
                  <circle cx="50" cy="50" r="38" />
                  {WHEEL.map((_, i) => {
                    const a = (i * Math.PI) / 3 - Math.PI / 2;
                    return (
                      <line
                        key={i}
                        x1={50 + 16 * Math.cos(a)}
                        y1={50 + 16 * Math.sin(a)}
                        x2={50 + 38 * Math.cos(a)}
                        y2={50 + 38 * Math.sin(a)}
                      />
                    );
                  })}
                </svg>
                <div className="pk-ab-hub">
                  <span>Gut Health</span>
                  <IntestineIcon size={44} />
                </div>
                {WHEEL.map((w) => (
                  <figure key={w.label} className={`pk-ab-node ${w.pos}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={w.src} alt="" width={168} height={168} loading="lazy" />
                    <figcaption>{w.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <p className="pk-ab-lined-quote" data-reveal>
              <span aria-hidden />
              Because living longer is not enough. We must live better.
              <span aria-hidden />
            </p>
          </div>
        </section>

        {/* ── GUT AVATAR ───────────────────────────────────────────────── */}
        <section className="pk-section pk-ab-avatar">
          <span className="pk-ab-sprig" aria-hidden />
          <div className="pk-wrap pk-split">
            <figure className="pk-ab-photo" data-reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/service-gutavatar-jars.png"
                alt="GUT AVATAR gut wellness products"
                width={1448}
                height={1086}
                loading="lazy"
              />
            </figure>
            <div className="pk-split-copy">
              <p className="pk-ab-flank" data-reveal>
                <span aria-hidden />
                Our Signature Wellness Range
                <span aria-hidden />
              </p>
              <h2 className="pk-h2 pk-ab-h2-lg" data-reveal style={d('.04s')}>
                GUT AVATAR&trade;: Ancient Wisdom. Modern Guts.
              </h2>
              <div className="pk-ab-serif-body" data-reveal style={d('.08s')}>
                <p>
                  My passion for gut health led me to create GUT AVATAR&trade;, a natural gut wellness range inspired
                  by traditional Indian practices and informed by modern nutrition.
                </p>
                <p>
                  Designed to make digestive and metabolic wellness simple, intentional and accessible for everyday
                  life.
                </p>
              </div>
              <ul className="pk-ab-benefits" data-reveal style={d('.12s')}>
                {AVATAR_BENEFITS.map(({ Icon, label }) => (
                  <li key={label.join(' ')}>
                    <span className="pk-ab-ring">
                      <Icon size={28} />
                    </span>
                    <span>
                      {label.map((l, i) => (
                        <span key={l}>
                          {i > 0 && <br />}
                          {l}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
              <div data-reveal style={d('.16s')}>
                <a href={LINKS.gutavatar} className="pk-ab-pill-btn" target="_blank" rel="noopener noreferrer">
                  Explore GUT AVATAR&trade; <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <PressSection />

        {/* ── THE BOOK ─────────────────────────────────────────────────── */}
        <section className="pk-section pk-ab-book-sec">
          <div className="pk-wrap pk-split">
            <div className="pk-split-copy">
              <p className="pk-eyebrow" data-reveal>
                Author
              </p>
              <h2 className="pk-display pk-ab-book-h" data-reveal style={d('.04s')}>
                THE GUT
              </h2>
              <p className="pk-ab-quote" data-reveal style={d('.08s')}>
                Story of our incredible second brain: how the gut shapes our health, mind and longevity.
              </p>
              <span className="pk-ab-rule" aria-hidden />
              <ul className="pk-ab-stores" data-reveal style={d('.12s')}>
                {BOOK_STORES.map((b) => (
                  <li key={b.name}>
                    <a href={b.href} className="pk-ab-store" target="_blank" rel="noopener noreferrer">
                      {b.name} <ArrowUpRight size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="pk-ab-book" data-reveal>
              <div className="pk-ab-badge">
                <LaurelIcon size={64} />
                <span>
                  National
                  <br />
                  Bestseller
                </span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/the-gut-book.webp" alt="THE GUT by Payal Kothari" loading="lazy" />
              <span className="pk-ab-plinth" aria-hidden />
            </figure>
          </div>
        </section>

        {/* ── MY PHILOSOPHY ────────────────────────────────────────────── */}
        <section className="pk-quote-band">
          <div className="pk-quote-leaf" aria-hidden />
          <div className="pk-wrap pk-ab-col pk-ab-philosophy" data-reveal>
            <p className="pk-eyebrow">My Philosophy</p>
            <p className="pk-quote-lead">
              &ldquo;When you stop fighting against your body and start understanding it, everything
              changes.&rdquo;
            </p>
            <div className="pk-body">
              <p>
                I don&rsquo;t believe in chasing a number on the weighing scale or following a perfect diet.
              </p>
              <p>
                I believe in understanding your body&rsquo;s unique needs, nourishing it intelligently and
                building habits that support health for a lifetime.
              </p>
              <p>Because the ultimate measure of wellness isn&rsquo;t simply how long you live.</p>
              <p>It&rsquo;s how well you live those years.</p>
            </div>
            <p className="pk-ab-sign">
              Payal Kothari
              <span>Gut Health Nutritionist &amp; Metabolic Longevity Advisor</span>
              <span>Author, THE GUT | Founder, GUT AVATAR&trade;</span>
            </p>
            <a href={LINKS.consultation} className="pk-btn">
              Enquire About Consultations <ArrowRight size={15} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
