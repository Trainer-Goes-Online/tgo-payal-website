import type { CSSProperties } from 'react';

import { Header } from '@/components/Header';
import { Reveal } from '@/components/Reveal';
import { YouTubeLite } from '@/components/YouTubeLite';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BowlIcon,
  ConsultIcon,
  FacebookIcon,
  InstagramIcon,
  JarIcon,
  LinkedinIcon,
  MailIcon,
  MicIcon,
  PhoneIcon,
  Plus,
  Star,
  YoutubeIcon,
} from '@/components/icons';
import {
  BOOK_STORES,
  CONTACT,
  FEATURED_VIDEO,
  LINKS,
  MEDIA_FEATURES,
  NAV,
  PODCASTS,
  PRESS_LOGOS,
  RESULTS,
  SOCIAL,
  TRUSTED,
  type Img,
} from '@/lib/site';

const d = (delay: string) => ({ '--d': delay }) as CSSProperties;

function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return <p className={`pk-eyebrow${center ? ' is-center' : ''}`}>{children}</p>;
}

function Picture({ img, className, eager = false }: { img: Img; className?: string; eager?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={img.src}
      alt={img.alt}
      width={img.w}
      height={img.h}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

/* A track rendered twice so the loop is seamless; the copy is hidden from AT. */
function Marquee({
  items,
  render,
  direction = 'ltr',
  className = '',
}: {
  items: Img[];
  render: (img: Img, i: number) => React.ReactNode;
  direction?: 'ltr' | 'rtl';
  className?: string;
}) {
  return (
    <div className={`pk-marquee ${direction} ${className}`}>
      <div className="pk-marquee-track">
        {items.map((img, i) => render(img, i))}
        <div className="pk-marquee-dup" aria-hidden>
          {items.map((img, i) => render(img, i + items.length))}
        </div>
      </div>
    </div>
  );
}

const SERVICES = [
  {
    no: '01',
    kicker: 'Guided Nutrition',
    title: 'The 4-Week Nutrition Experience',
    body: 'A practical, guided approach to better nutrition, bringing together meal guidance, recipes, habit tracking, gut-focused wellness products and WhatsApp support.',
    cta: 'Explore The Programme',
    href: LINKS.programme,
    Icon: BowlIcon,
  },
  {
    no: '02',
    kicker: 'Everyday Wellness',
    title: 'GutAvatar',
    body: "Explore Payal's range of gut-focused wellness products, created to make nourishing your body a more convenient part of everyday life.",
    cta: 'Explore GutAvatar',
    href: LINKS.gutavatar,
    external: true,
    Icon: JarIcon,
  },
  {
    no: '03',
    kicker: 'Personalised Expertise',
    title: 'Private Consultations',
    body: 'For those seeking deeper, individualised attention, work personally with Payal on a nutrition approach built around your health history, goals and lifestyle.',
    cta: 'Enquire About Consultations',
    href: LINKS.consultation,
    featured: true,
    Icon: ConsultIcon,
  },
  {
    no: '04',
    kicker: 'Speaking & Workshops',
    title: 'Speaking Engagements',
    body: "Bring Payal's expertise in gut health, nutrition and the mind-gut connection to your corporate events, leadership forums and wellness workshops through engaging, insightful and practical sessions.",
    cta: 'Invite Payal To Speak',
    href: LINKS.speaking,
    Icon: MicIcon,
  },
];

const FAQS = [
  {
    q: 'What health concerns can Payal help with?',
    a: "Payal's work focuses on gut health, weight management and personalised nutrition. This can include concerns such as bloating, acidity, digestive discomfort, stubborn weight and lifestyle-related nutrition challenges. The appropriate guidance depends on your individual health needs.",
  },
  {
    q: "How is Payal's gut-first approach different from a regular diet plan?",
    a: 'Rather than focusing only on calories or food restrictions, Payal considers your gut health, eating habits, lifestyle, individual needs and relationship with food. The aim is to build a more personalised and sustainable approach to nutrition.',
  },
  {
    q: 'Can I work with Payal if my main goal is weight loss?',
    a: "Yes. Weight management is one of Payal's core areas of expertise. Her approach considers your food habits, lifestyle and relevant health factors instead of relying solely on restrictive dieting.",
  },
  {
    q: "What's included in the 4-Week Nutrition Experience?",
    a: 'The planned experience brings together guided nutrition, recipes, habit tracking, selected gut-focused wellness products and WhatsApp-based support. Final programme inclusions will be shared before enrolment.',
  },
  {
    q: 'Can I consult Payal personally?',
    a: 'Yes. Payal offers private consultations for individuals seeking more personalised nutrition guidance based on their health history, goals and lifestyle. You can enquire about availability through the website.',
  },
  {
    q: 'Are the nutrition plans customised to individual needs?',
    a: "Personalisation is central to Payal's philosophy of bio-individuality. Private guidance takes your nutritional needs, preferences, routine and health goals into account. The four-week programme has a separate guided format.",
  },
  {
    q: 'Will I have to stop eating my favourite foods?',
    a: "Not necessarily. Payal's approach focuses on developing healthier and more sustainable food habits rather than placing everyone on the same restrictive diet. Any specific changes depend on your needs.",
  },
  {
    q: 'Are vegetarian, vegan or other dietary preferences considered?',
    a: 'Dietary preferences can be discussed when enquiring about personalised nutrition guidance. Any allergy-related or medically necessary restrictions should also be shared before starting.',
  },
  {
    q: "Do I need to take GutAvatar products to follow Payal's approach?",
    a: 'GutAvatar is a separate range of gut-focused wellness products. It is not a substitute for personalised nutrition or medical care. Whether a particular product is suitable depends on your needs and its ingredients.',
  },
  {
    q: 'Can I invite Payal for a corporate event or wellness workshop?',
    a: 'Yes. Payal is available for enquiries related to corporate wellness sessions, workshops, clubs and leadership forums, covering subjects such as gut health, nutrition, weight management and the gut-brain connection.',
  },
  {
    q: 'How do I get started?',
    a: "Explore the four-week programme, visit GutAvatar, enquire about private consultations or contact the team about a speaking engagement. Choose the option that best matches what you're looking for.",
  },
];

const LOGO_ROW_A = PRESS_LOGOS.slice(0, 11);
const LOGO_ROW_B = PRESS_LOGOS.slice(11);

export default function Home() {
  return (
    <>
      <Reveal />
      <Header />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section id="home" className="pk-hero">
          <div className="pk-wrap pk-hero-grid">
            <div className="pk-hero-copy">
              <Eyebrow>
                <span data-reveal style={d('.05s')}>
                  Gut Health Expert · Weight Loss Specialist · Bestselling Author
                </span>
              </Eyebrow>
              <h1 className="pk-display" data-reveal style={d('.12s')}>
                <span className="pk-line">The Secret To Better Health</span>
                <span className="pk-line">
                  May Be Hiding <em>In Your Gut.</em>
                </span>
              </h1>
              <p className="pk-lede" data-reveal style={d('.2s')}>
                Go beyond diets and quick fixes with a science-backed, gut-first approach to better
                digestion, sustainable weight loss and lasting health.
              </p>
              <div data-reveal style={d('.28s')}>
                <a href="#secret" className="pk-btn pk-btn-primary">
                  Uncover The Secret
                  <span className="pk-btn-icon">
                    <ArrowDown size={16} />
                  </span>
                </a>
              </div>
            </div>

            <div className="pk-hero-visual" data-reveal style={d('.18s')}>
              <div className="pk-arch-back" aria-hidden />
              <div className="pk-arch">
                <Picture
                  img={{ src: '/images/payal-hero.webp', w: 1102, h: 1444, alt: 'Payal Kothari' }}
                  eager
                />
              </div>
              <span className="pk-ring" aria-hidden />
              <p className="pk-script pk-hero-script" aria-hidden>
                Science. <br />
                Compassion. <br />
                Real Life.
              </p>
            </div>
          </div>
        </section>

        {/* ── THE SECRET ───────────────────────────────────────────── */}
        <section id="secret" className="pk-section pk-secret">
          <div className="pk-wrap">
            <div className="pk-secret-grid">
              <div className="pk-secret-copy">
                <Eyebrow>
                  <span data-reveal>The Secret Most People Overlook</span>
                </Eyebrow>
                <h2 className="pk-h2" data-reveal style={d('.06s')}>
                  <span className="pk-line">All Diseases Begin In The Gut.</span>
                  <span className="pk-line">
                    <em>And So Do The Solutions.</em>
                  </span>
                </h2>
                <p className="pk-question" data-reveal style={d('.12s')}>
                  What if I told you that your gut has a mind of its own?
                </p>
                <div className="pk-prose" data-reveal style={d('.18s')}>
                  <p>
                    Deep inside your digestive system lives an entire ecosystem of trillions of
                    microorganisms, working around the clock and interacting with everything from your
                    metabolism and immunity to your mood and brain.
                  </p>
                  <p className="pk-prose-key">
                    It&rsquo;s why your gut is often called your <em>Second Brain.</em>
                  </p>
                  <p>
                    Yet most of us spend years changing diets, counting calories and chasing symptoms,
                    without ever paying attention to this extraordinary world within us.
                  </p>
                </div>
              </div>

              <figure className="pk-secret-visual" data-reveal style={d('.1s')}>
                <span className="pk-disc" aria-hidden />
                <Picture
                  img={{
                    src: '/images/second-brain.webp',
                    w: 1600,
                    h: 1200,
                    alt: 'Illustration of the human digestive system',
                  }}
                />
              </figure>
            </div>

            <blockquote className="pk-pull" data-reveal>
              <span className="pk-rule" aria-hidden />
              <p>
                Maybe it&rsquo;s time we stopped blaming our bodies and started understanding them.
                <br />
                <em>
                  Because the root of what you&rsquo;re feeling may have been in your gut all along.
                </em>
              </p>
              <a href="#services" className="pk-link">
                Explore Gut-First Solutions <ArrowRight size={16} />
              </a>
            </blockquote>
          </div>
        </section>

        {/* ── MEET PAYAL ───────────────────────────────────────────── */}
        <section id="about" className="pk-section pk-about pk-tone-sand">
          <div className="pk-wrap pk-about-grid">
            <div className="pk-about-visual" data-reveal>
              <div className="pk-arch pk-arch-sm">
                <Picture
                  img={{
                    src: '/images/payal-the-gut.webp',
                    w: 904,
                    h: 1280,
                    alt: 'Payal Kothari holding her book, The Gut',
                  }}
                />
              </div>
              <p className="pk-script pk-about-script" aria-hidden>
                Health starts within
              </p>
            </div>

            <div className="pk-about-copy">
              <Eyebrow>
                <span data-reveal>The Woman Behind &ldquo;The Gut&rdquo;</span>
              </Eyebrow>
              <h2 className="pk-h2" data-reveal style={d('.06s')}>
                Meet <em>Payal Kothari</em>
              </h2>
              <p className="pk-quote" data-reveal style={d('.12s')}>
                &ldquo;What Once Made Me Struggle With My Health Eventually Gave Me My Purpose.&rdquo;
              </p>
              <div className="pk-prose" data-reveal style={d('.18s')}>
                <p>
                  A Certified Gut Health Nutritionist, Weight Loss Specialist, NLP Master Practitioner,
                  bestselling author of <em>The Gut</em> and Founder of GutAvatar, Payal Kothari has spent
                  over a decade exploring the connection between gut health, nutrition, the mind and
                  sustainable weight management.
                </p>
                <p>
                  But her journey didn&rsquo;t begin with professional qualifications or a successful
                  nutrition practice. It began with her own struggles with food, weight and health.
                </p>
                <p>
                  What started as a personal search for answers eventually became the foundation of her
                  work, inspiring a bestselling book, a gut-focused wellness brand and a mission to help
                  others approach their health differently.
                </p>
              </div>
              <div data-reveal style={d('.24s')}>
                <a href={LINKS.story} className="pk-btn pk-btn-ghost">
                  Read My Story
                  <span className="pk-btn-icon">
                    <ArrowRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="pk-press-strip" data-reveal>
            <Eyebrow center>Media Features</Eyebrow>
            <Marquee
              items={MEDIA_FEATURES}
              className="pk-marquee-slow"
              render={(img, i) => (
                <figure className="pk-clip" key={i}>
                  <Picture img={i < MEDIA_FEATURES.length ? img : { ...img, alt: '' }} />
                </figure>
              )}
            />
          </div>
        </section>

        {/* ── FEATURED IN ──────────────────────────────────────────── */}
        <section className="pk-section pk-featured">
          <div className="pk-wrap">
            <h2 className="pk-h2 is-center" data-reveal>
              Featured In <em>Leading Publications</em>
            </h2>
          </div>
          <div className="pk-logo-rows" data-reveal style={d('.1s')}>
            {[LOGO_ROW_A, LOGO_ROW_B].map((row, r) => (
              <Marquee
                key={r}
                items={row}
                direction={r === 0 ? 'ltr' : 'rtl'}
                render={(img, i) => (
                  <span className="pk-logo" key={i}>
                    <Picture img={i < row.length ? img : { ...img, alt: '' }} />
                  </span>
                )}
              />
            ))}
          </div>
        </section>

        {/* ── TRUSTED BY ───────────────────────────────────────────── */}
        <section className="pk-section pk-trusted pk-tone-olive">
          <div className="pk-wrap">
            <h2 className="pk-h2 is-center" data-reveal>
              Trusted By Some Of The <em>Most Recognisable Names.</em>
            </h2>
            <ul className="pk-trusted-grid">
              {TRUSTED.map((t, i) => (
                <li key={t.src} className="pk-trusted-card" data-reveal style={d(`${0.05 + i * 0.06}s`)}>
                  <div className="pk-trusted-photo">
                    <Picture img={t} />
                  </div>
                  {t.name ? <p className="pk-trusted-name">{t.name}</p> : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────────── */}
        <section id="services" className="pk-section pk-services">
          <div className="pk-wrap">
            <div className="pk-masthead">
              <Eyebrow center>
                <span data-reveal>Our Services</span>
              </Eyebrow>
              <h2 className="pk-h2 is-center" data-reveal style={d('.06s')}>
                Your Journey To Better Health <em>Starts Here.</em>
              </h2>
              <p className="pk-deck" data-reveal style={d('.12s')}>
                Whether you want to improve your gut, lose stubborn weight or take charge of your health,
                find the support that works for you.
              </p>
            </div>

            <div className="pk-service-grid">
              {SERVICES.map(({ Icon, ...s }, i) => (
                <article
                  key={s.no}
                  className={`pk-service${s.featured ? ' is-featured' : ''}`}
                  data-reveal
                  style={d(`${0.05 + i * 0.08}s`)}
                >
                  <div className="pk-service-head">
                    <span className="pk-service-no">{s.no}</span>
                    <span className="pk-service-kicker">/ {s.kicker}</span>
                    <span className="pk-icon-circle">
                      <Icon size={26} />
                    </span>
                  </div>
                  <h3 className="pk-service-title">{s.title}</h3>
                  <p className="pk-service-body">{s.body}</p>
                  <a
                    href={s.href}
                    className="pk-link"
                    {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {s.cta}
                    {s.external ? <ArrowUpRight size={16} /> : <ArrowRight size={16} />}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESULTS ──────────────────────────────────────────────── */}
        <section className="pk-section pk-results pk-tone-sand">
          <div className="pk-wrap pk-masthead">
            <Eyebrow center>
              <span data-reveal>Different Approach. Visible Results.</span>
            </Eyebrow>
            <h2 className="pk-h2 is-center" data-reveal style={d('.06s')}>
              <span className="pk-line">What Years Of Dieting Couldn&rsquo;t Achieve,</span>
              <span className="pk-line">
                <em>A Gut-First Approach Made Possible.</em>
              </span>
            </h2>
          </div>
          <div data-reveal style={d('.12s')}>
            <Marquee
              items={RESULTS}
              direction="ltr"
              className="pk-marquee-results"
              render={(img, i) => (
                <figure className="pk-result" key={i}>
                  <Picture img={i < RESULTS.length ? img : { ...img, alt: '' }} />
                </figure>
              )}
            />
          </div>
          <div className="pk-wrap pk-center" data-reveal>
            <a href={LINKS.successStories} className="pk-link" target="_blank" rel="noopener noreferrer">
              See More Success Stories <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* ── THE BOOK ─────────────────────────────────────────────── */}
        <section className="pk-section pk-book">
          <div className="pk-wrap pk-book-grid">
            <figure className="pk-book-visual" data-reveal>
              <span className="pk-disc pk-disc-lg" aria-hidden />
              <Picture
                img={{
                  src: '/images/the-gut-book.webp',
                  w: 981,
                  h: 1300,
                  alt: 'The Gut: Story of Our Incredible Second Brain, by Payal Kothari',
                }}
              />
            </figure>

            <div className="pk-book-copy">
              <Eyebrow>
                <span data-reveal>The Bestselling Book By Payal Kothari</span>
              </Eyebrow>
              <h2 className="pk-h2" data-reveal style={d('.06s')}>
                <span className="pk-line">Your Gut Has A Story To Tell.</span>
                <span className="pk-line">
                  <em>This Book Helps You Understand It.</em>
                </span>
              </h2>
              <p className="pk-rating" data-reveal style={d('.12s')}>
                <span className="pk-stars" aria-hidden>
                  <span className="pk-stars-base">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} size={16} />
                    ))}
                  </span>
                  <span className="pk-stars-fill" style={{ width: '88%' }}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} size={16} />
                    ))}
                  </span>
                </span>
                <span>
                  <b>4.4/5</b> on Amazon
                </span>
              </p>
              <div className="pk-prose" data-reveal style={d('.18s')}>
                <p>
                  In <em>The Gut: Story of Our Incredible Second Brain</em>, Payal Kothari takes you inside
                  the fascinating world of your gut, revealing its connections with weight, immunity,
                  emotions, metabolism and everyday health.
                </p>
                <p>
                  From understanding why diets affect people differently to exploring the trillions of
                  microorganisms living within us, this book challenges the way you&rsquo;ve always thought
                  about food and your body.
                </p>
              </div>
              <div className="pk-stores" data-reveal style={d('.24s')}>
                <span className="pk-stores-label">Available On:</span>
                <ul>
                  {BOOK_STORES.map((s) => (
                    <li key={s.name}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="pk-store">
                        {s.name} <ArrowUpRight size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── PODCASTS ─────────────────────────────────────────────── */}
        <section className="pk-section pk-podcasts pk-tone-cacao">
          <div className="pk-wrap">
            <div className="pk-masthead">
              <Eyebrow center>
                <span data-reveal>Podcast Appearances</span>
              </Eyebrow>
              <h2 className="pk-h2 is-center" data-reveal style={d('.06s')}>
                Payal <em>In Conversation</em>
              </h2>
            </div>
            <div className="pk-podcast-grid">
              {PODCASTS.map((p, i) => (
                <div key={p.id} data-reveal style={d(`${0.05 + i * 0.07}s`)}>
                  <YouTubeLite id={p.id} title={p.title} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WATCH & LEARN ────────────────────────────────────────── */}
        <section className="pk-section pk-watch">
          <div className="pk-wrap pk-watch-grid">
            <div className="pk-watch-copy">
              <Eyebrow>
                <span data-reveal>Watch &amp; Learn With Payal</span>
              </Eyebrow>
              <h2 className="pk-h2" data-reveal style={d('.06s')}>
                Gut Health, <em>Made Simple.</em>
              </h2>
              <p className="pk-deck is-left" data-reveal style={d('.12s')}>
                Explore Payal&rsquo;s YouTube channel for practical insights on gut health, weight loss,
                nutrition and everyday wellness.
              </p>
              <div data-reveal style={d('.18s')}>
                <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="pk-btn pk-btn-primary">
                  Watch On Youtube
                  <span className="pk-btn-icon">
                    <ArrowRight size={16} />
                  </span>
                </a>
              </div>
              <p className="pk-also" data-reveal style={d('.24s')}>
                Content also available on:{' '}
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                ,{' '}
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </p>
            </div>
            <div className="pk-watch-video" data-reveal style={d('.1s')}>
              <YouTubeLite id={FEATURED_VIDEO.id} title={FEATURED_VIDEO.title} />
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section id="faq" className="pk-section pk-faq pk-tone-sand">
          <div className="pk-wrap pk-faq-grid">
            <div className="pk-faq-head">
              <Eyebrow>
                <span data-reveal>Frequently Asked Questions</span>
              </Eyebrow>
              <h2 className="pk-h2" data-reveal style={d('.06s')}>
                Everything You Need <em>To Know</em>
              </h2>
            </div>
            <div className="pk-faq-list" data-reveal style={d('.1s')}>
              {FAQS.map((f, i) => (
                <details key={f.q} className="pk-faq-item" open={i === 0}>
                  <summary>
                    <span className="pk-faq-no">Q.{String(i + 1).padStart(2, '0')}</span>
                    <span className="pk-faq-q">{f.q}</span>
                    <span className="pk-faq-icon" aria-hidden>
                      <Plus size={16} />
                    </span>
                  </summary>
                  <p className="pk-faq-a">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER / CONTACT ───────────────────────────────────────── */}
      <footer id="contact" className="pk-footer pk-tone-cacao">
        <div className="pk-wrap">
          <div className="pk-footer-top">
            <div className="pk-footer-brand">
              <p className="pk-footer-name">Payal Kothari</p>
              <p className="pk-footer-tag">Nutrition · Gut Health · Mindset · Wellbeing</p>
              <p className="pk-script pk-footer-script" aria-hidden>
                A softer, more human kind of progress.
              </p>
            </div>

            <div className="pk-footer-contact">
              <Eyebrow>Contact</Eyebrow>
              <a href={`mailto:${CONTACT.email}`} className="pk-contact-line">
                <MailIcon size={18} /> {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phoneHref}`} className="pk-contact-line">
                <PhoneIcon size={18} /> {CONTACT.phone}
              </a>
              <div className="pk-socials">
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon size={18} />
                </a>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon size={18} />
                </a>
                <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <YoutubeIcon size={18} />
                </a>
                <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="pk-footer-bottom">
            <nav aria-label="Footer">
              {NAV.map((n) => (
                <a key={n.href} href={n.href}>
                  {n.label}
                </a>
              ))}
            </nav>
            <p>&copy; {new Date().getFullYear()} Payal Kothari. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
