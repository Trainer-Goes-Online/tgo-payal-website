import type { CSSProperties } from 'react';
import type { Metadata } from 'next';

import { CountText } from '@/components/CountText';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, ArrowUpRight } from '@/components/icons';
import { BOOK_STORES, LINKS, MEDIA_FEATURES, PRESS_LOGOS } from '@/lib/site';

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

const RECOGNISED = [
  'Authored 400+ articles for leading newspapers and lifestyle publications.',
  'Conducted 800+ workshops across India, Dubai, London, the United States and Singapore.',
  'Educated diverse audiences on gut health, metabolic wellness, weight management, hormonal health and preventive nutrition.',
];

const STATS = ['20+ Years of Experience', 'Thousands of Lives Impacted', '800+ Workshops Worldwide'];

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
              <p className="pk-eyebrow" data-reveal>
                Gut Health Nutritionist &middot; Metabolic Longevity Advisor &middot; Author &middot; Founder, GUT AVATAR&trade;
              </p>
              <h1 className="pk-display" data-reveal style={d('.06s')}>
                Meet Payal Kothari
              </h1>
              <ul className="pk-ab-stats" data-reveal style={d('.12s')}>
                {STATS.map((s) => (
                  <li key={s}>
                    <CountText text={s} />
                  </li>
                ))}
              </ul>
              <p className="pk-question" data-reveal style={d('.18s')}>
                &ldquo;True wellness begins in the gut. Longevity begins with how we nourish, understand
                and care for our bodies.&rdquo;
              </p>
            </div>
            <figure className="pk-split-media pk-split-portrait" data-reveal style={d('.08s')}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/payal-about.png" alt="Payal Kothari" width={1122} height={1402} />
            </figure>
          </div>
        </section>

        {/* ── THE EXPERTISE ────────────────────────────────────────────── */}
        <section className="pk-section pk-tint">
          <div className="pk-wrap pk-ab-col">
            <h2 className="pk-h2" data-reveal>
              The Expertise Behind The Transformation
            </h2>
            <div className="pk-body" data-reveal style={d('.06s')}>
              <p>
                Payal Kothari is a certified Clinical Gut Health Nutritionist, Holistic Wellness Coach, NLP
                Master Practitioner, author of <em>THE GUT</em>, and founder of GUT AVATAR&trade;, a natural
                wellness brand rooted in traditional Indian wisdom and modern nutritional science.
              </p>
              <p>
                With over two decades of experience, Payal has guided thousands of individuals towards
                better digestive health, sustainable weight management, metabolic balance and improved
                quality of life.
              </p>
              <p>
                Her work focuses on identifying the underlying contributors to chronic health concerns,
                including bloating, acidity, constipation, IBS, reversing fatty liver, insulin resistance,
                elevated HbA1c, cholesterol, inflammation, thyroid-related weight challenges and hormonal
                imbalances.
              </p>
              <p>
                Her personalised nutrition programs have also supported individuals navigating fertility
                challenges, helping them improve their nutritional foundations and overall metabolic health.
              </p>
              <p>
                Her philosophy is simple: Don&rsquo;t just manage symptoms. Understand the body, address the
                underlying imbalances and build health that lasts.
              </p>
            </div>
          </div>
        </section>

        {/* ── TRUSTED BY LEADERS ───────────────────────────────────────── */}
        <section className="pk-section">
          <div className="pk-wrap pk-ab-col">
            <h2 className="pk-h2" data-reveal>
              Trusted By Leaders. Chosen By Families.
            </h2>
            <div className="pk-body" data-reveal style={d('.06s')}>
              <p>
                Payal has worked with some of India&rsquo;s most prominent business leaders, industrialists,
                artists and celebrities, including Mr. Anand Mahindra, music composer Pritam Chakraborty and
                actor Neil Nitin Mukesh, alongside numerous high-profile families who value personalised,
                discreet and results-oriented nutritional guidance.
              </p>
              <p>Her expertise extends beyond private consultations into institutional wellness and preventive health.</p>
              <p>
                Having previously worked with Singapore International School, she currently serves as a
                Consulting Nutritionist at the American School of Bombay, across both campuses, helping shape
                healthier food environments and nutritional habits for students, educators and families.
              </p>
              <p>A recognised voice in nutrition and wellness, Payal has:</p>
            </div>
            <ul className="pk-ab-list" data-reveal style={d('.1s')}>
              {RECOGNISED.map((r) => (
                <li key={r}>
                  <CountText text={r} />
                </li>
              ))}
            </ul>
            <p className="pk-ab-note" data-reveal>
              Her work brings together science, education and real-world application, making better health
              achievable even within demanding lifestyles.
            </p>
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
          <div className="pk-wrap pk-ab-col">
            <p className="pk-eyebrow" data-reveal>
              My Story
            </p>
            <h2 className="pk-h2" data-reveal style={d('.04s')}>
              From Struggling With My Gut To Transforming Lives
            </h2>
            <p className="pk-question" data-reveal style={d('.08s')}>
              &ldquo;My greatest teacher wasn&rsquo;t a textbook. It was my own body.&rdquo;
            </p>
            <div className="pk-body" data-reveal style={d('.12s')}>
              <p>My journey into gut health began long before I became a nutritionist.</p>
              <p>
                At the age of two, I was diagnosed with tuberculosis. The medication and prolonged treatment
                saved my life, but the years that followed were marked by digestive difficulties, food
                intolerances, nutritional challenges and a body that often felt out of balance.
              </p>
              <p>
                As I entered puberty, my struggles grew. I experienced intense cravings for sugar and salty
                foods, weight gain, emotional lows and a constant sense of frustration with my health.
              </p>
              <p>I was eating, but I wasn&rsquo;t truly nourishing my body.</p>
              <p>
                The turning point came when my mother introduced me to an Ayurvedic practitioner and brought me
                back to the foundations of traditional Indian wellness: simple home-cooked meals, mindful
                eating, digestive care and a deeper understanding of the relationship between food and health.
              </p>
              <p>Gradually, my relationship with food, my body and my well-being began to change.</p>
              <p>
                That experience sparked a lifelong curiosity about the gut, nutrition and the body&rsquo;s
                remarkable ability to adapt and recover when given the right support.
              </p>
              <p>I went on to study nutrition, holistic wellness, mind-body practices and the science of metabolic health.</p>
              <p>
                What began as a personal search for answers became my life&rsquo;s purpose: helping others
                understand their bodies and reclaim their health.
              </p>
              <p>
                Today, as a mother of two young adults, I understand that wellness must work in the real world:
                through careers, families, travel, changing hormones, stress and every stage of life.
              </p>
              <p>Because health should support the life you want to live, not become another burden within it.</p>
            </div>
          </div>
        </section>

        {/* ── MY APPROACH ──────────────────────────────────────────────── */}
        <section className="pk-section pk-tint">
          <div className="pk-wrap pk-ab-col">
            <p className="pk-eyebrow" data-reveal>
              My Approach
            </p>
            <h2 className="pk-h2" data-reveal style={d('.04s')}>
              Where Gut Health Meets Metabolic Longevity
            </h2>
            <div className="pk-body" data-reveal style={d('.08s')}>
              <p>I believe that gut health is an important foundation of overall wellness, but it is never the whole picture.</p>
              <p>
                The digestive system, metabolism, blood sugar regulation, hormonal health, sleep, stress and
                emotional well-being are deeply interconnected.
              </p>
              <p>That is why my approach goes beyond calorie counting, restrictive diets and generic meal plans.</p>
              <p>
                I combine modern nutritional science, Ayurveda-inspired practices, functional nutrition
                principles, NLP and bio-individuality to create personalised strategies that consider the whole
                person.
              </p>
              <p>
                I also explore the relationship between primary foods (relationships, purpose, movement, sleep,
                emotional well-being and spiritual fulfilment) and secondary foods, the nourishment we put on
                our plates.
              </p>
              <p>My goal is not simply to help people lose weight or improve digestion.</p>
              <p>
                It is to help them build metabolic resilience, preserve strength, support healthy ageing and
                experience greater energy, confidence and vitality through every decade of life.
              </p>
              <p>Because living longer is not enough. We must live better.</p>
            </div>
          </div>
        </section>

        {/* ── GUT AVATAR ───────────────────────────────────────────────── */}
        <section className="pk-section">
          <div className="pk-wrap pk-split">
            <figure className="pk-split-media" data-reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/service-gutavatar-jars.png" alt="GUT AVATAR gut wellness products" width={1448} height={1086} loading="lazy" />
            </figure>
            <div className="pk-split-copy">
              <h2 className="pk-h2" data-reveal style={d('.04s')}>
                GUT AVATAR&trade;: Ancient Wisdom. Modern Guts.
              </h2>
              <div className="pk-body" data-reveal style={d('.08s')}>
                <p>
                  My passion for gut health eventually led me to create GUT AVATAR&trade;, a natural gut
                  wellness brand inspired by traditional Indian practices and informed by modern nutrition.
                </p>
                <p>
                  GUT AVATAR was born from one belief: everyday wellness should be simple, intentional and
                  accessible.
                </p>
                <p>
                  Through thoughtfully developed wellness products, personalised nutrition programs, books and
                  education, my mission is to make digestive and metabolic wellness a natural part of everyday
                  life.
                </p>
              </div>
              <div data-reveal style={d('.12s')}>
                <a href={LINKS.gutavatar} className="pk-btn pk-btn-outline" target="_blank" rel="noopener noreferrer">
                  Explore GutAvatar <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE BOOK ─────────────────────────────────────────────────── */}
        <section className="pk-section pk-tint">
          <div className="pk-wrap pk-split">
            <div className="pk-split-copy">
              <p className="pk-eyebrow" data-reveal>
                Author
              </p>
              <h2 className="pk-h2" data-reveal style={d('.04s')}>
                THE GUT
              </h2>
              <ul className="pk-ab-stores" data-reveal style={d('.08s')}>
                {BOOK_STORES.map((b) => (
                  <li key={b.name}>
                    <a href={b.href} className="pk-arrow-link" target="_blank" rel="noopener noreferrer">
                      {b.name} <ArrowUpRight size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="pk-ab-book" data-reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/the-gut-book.webp" alt="THE GUT by Payal Kothari" loading="lazy" />
            </figure>
          </div>
        </section>

        {/* ── PRESS & MEDIA ────────────────────────────────────────────── */}
        <section className="pk-section">
          <div className="pk-wrap">
            <h2 className="pk-h2 is-center pk-tm-h2" data-reveal>
              As Seen In Leading Publications
            </h2>
            <ul className="pk-ab-logos" data-reveal>
              {PRESS_LOGOS.map((l) => (
                <li key={l.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.src} alt={l.alt} width={l.w} height={l.h} loading="lazy" />
                </li>
              ))}
            </ul>
            <p className="pk-eyebrow is-center pk-ab-sub">Media Features</p>
            <div className="pk-tm-masonry">
              {MEDIA_FEATURES.map((m) => (
                <figure key={m.src} className="pk-tm-photo" data-reveal>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.src} alt={m.alt} width={m.w} height={m.h} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
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
