import type { CSSProperties } from 'react';

import { Header } from '@/components/Header';
import { Reveal } from '@/components/Reveal';
import { YouTubeLite } from '@/components/YouTubeLite';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookIcon,
  FacebookIcon,
  GutIcon,
  InstagramIcon,
  LeafIcon,
  LinkedinIcon,
  MailIcon,
  MindIcon,
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
  direction = 'rtl',
  className = '',
}: {
  items: Img[];
  render: (img: Img, key: string, decorative: boolean) => React.ReactNode;
  direction?: 'ltr' | 'rtl';
  className?: string;
}) {
  return (
    <div className={`pk-marquee ${direction} ${className}`}>
      <div className="pk-marquee-track">
        {items.map((img, i) => render(img, `a${i}`, false))}
        <div className="pk-marquee-dup" aria-hidden>
          {items.map((img, i) => render(img, `b${i}`, true))}
        </div>
      </div>
    </div>
  );
}

/* Her four credentials, word for word from the bio. */
const FOCUS = [
  { Icon: GutIcon, a: 'Certified Gut Health', b: 'Nutritionist' },
  { Icon: LeafIcon, a: 'Weight Loss', b: 'Specialist' },
  { Icon: MindIcon, a: 'NLP Master', b: 'Practitioner' },
  { Icon: BookIcon, a: 'Bestselling Author', b: 'of The Gut' },
];

const SERVICES = [
  {
    no: '01',
    kicker: 'Guided Nutrition',
    title: 'The 4-Week Nutrition Experience',
    body: 'A practical, guided approach to better nutrition, bringing together meal guidance, recipes, habit tracking, gut-focused wellness products and WhatsApp support.',
    cta: 'Explore The Programme',
    href: LINKS.programme,
    img: { src: '/images/service-nutrition.webp', w: 853, h: 639, alt: 'Payal Kothari at a live nutrition demo' },
  },
  {
    no: '02',
    kicker: 'Everyday Wellness',
    title: 'GutAvatar',
    body: "Explore Payal's range of gut-focused wellness products, created to make nourishing your body a more convenient part of everyday life.",
    cta: 'Explore GutAvatar',
    href: LINKS.gutavatar,
    external: true,
    product: true,
    img: { src: '/images/service-gutavatar.webp', w: 1200, h: 900, alt: 'GutAvatar Magic Mix, Curcumin Cure Mix and Alkaline Immunity Mix' },
  },
  {
    no: '03',
    kicker: 'Personalised Expertise',
    title: 'Private Consultations',
    body: 'For those seeking deeper, individualised attention, work personally with Payal on a nutrition approach built around your health history, goals and lifestyle.',
    cta: 'Enquire About Consultations',
    href: LINKS.consultation,
    img: { src: '/images/service-consultation.webp', w: 676, h: 507, alt: 'Payal Kothari with fresh dragon fruit' },
  },
  {
    no: '04',
    kicker: 'Speaking & Workshops',
    title: 'Speaking Engagements',
    body: "Bring Payal's expertise in gut health, nutrition and the mind-gut connection to your corporate events, leadership forums and wellness workshops through engaging, insightful and practical sessions.",
    cta: 'Invite Payal To Speak',
    href: LINKS.speaking,
    img: { src: '/images/service-speaking.webp', w: 1200, h: 900, alt: 'Payal Kothari speaking at a Femina event' },
  },
];

const PODCAST_SHOWS = ['The Inspiring Talk', 'The Himanshu Mehta Show', 'Adhiraj Sethi Podcast', 'Glamrs Live'];

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

export default function Home() {
  return (
    <>
      <Reveal />
      <Header />

      <main>
        {/* ── HERO · full-bleed portrait fading into ivory ─────────────── */}
        <section id="home" className="pk-hero">
          <div className="pk-hero-photo" aria-hidden>
            <Picture img={{ src: '/images/payal-hero-sunlit.webp', w: 1536, h: 1024, alt: '' }} eager />
          </div>
          <p className="pk-script pk-hero-script" aria-hidden>
            Science.
            <br />
            Compassion.
            <br />
            Real Life.
          </p>
          <ul className="pk-hero-stack" aria-hidden>
            <li>People</li>
            <li>Food</li>
            <li>Science</li>
            <li>A Kinder You</li>
          </ul>

          <div className="pk-wrap pk-hero-inner">
            <div className="pk-hero-copy">
              <p className="pk-eyebrow" data-reveal style={d('.05s')}>
                Gut Health Expert · Weight Loss Specialist · Bestselling Author
              </p>
              <h1 className="pk-display" data-reveal style={d('.12s')}>
                The Secret To Better Health
                <br />
                May Be Hiding In Your Gut.
              </h1>
              <p className="pk-hero-sub" data-reveal style={d('.2s')}>
                Go beyond diets and quick fixes with a science-backed, gut-first approach to better
                digestion, sustainable weight loss and lasting health.
              </p>
              <div data-reveal style={d('.28s')}>
                <a href="#secret" className="pk-btn">
                  Uncover The Secret <ArrowDown size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOCUS STRIP ──────────────────────────────────────────────── */}
        <section className="pk-focus" aria-label="Payal Kothari's credentials">
          <ul className="pk-wrap pk-focus-row">
            {FOCUS.map(({ Icon, a, b }, i) => (
              <li key={a} data-reveal style={d(`${0.04 + i * 0.06}s`)}>
                <span className="pk-icon-circle">
                  <Icon size={22} />
                </span>
                <span className="pk-focus-text">
                  {a}
                  <br />
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── THE SECRET · image left, text right ──────────────────────── */}
        <section id="secret" className="pk-section">
          <div className="pk-wrap pk-split">
            <figure className="pk-split-media pk-panel-sand" data-reveal>
              <Picture
                img={{ src: '/images/second-brain.webp', w: 1600, h: 1200, alt: 'Illustration of the human digestive system' }}
              />
            </figure>

            <div className="pk-split-copy">
              <p className="pk-eyebrow" data-reveal>
                The Secret Most People Overlook
              </p>
              <h2 className="pk-h2" data-reveal style={d('.06s')}>
                All Diseases Begin In The Gut.
                <br />
                And So Do The Solutions.
              </h2>
              <p className="pk-question" data-reveal style={d('.12s')}>
                What if I told you that your gut has a mind of its own?
              </p>
              <div className="pk-body" data-reveal style={d('.18s')}>
                <p>
                  Deep inside your digestive system lives an entire ecosystem of trillions of
                  microorganisms, working around the clock and interacting with everything from your
                  metabolism and immunity to your mood and brain.
                </p>
                <p>
                  It&rsquo;s why your gut is often called your <em>Second Brain.</em>
                </p>
                <p>
                  Yet most of us spend years changing diets, counting calories and chasing symptoms,
                  without ever paying attention to this extraordinary world within us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUOTE BAND · sand, leaf shadow, divided ──────────────────── */}
        <section className="pk-quote-band">
          <div className="pk-quote-leaf" aria-hidden />
          <div className="pk-wrap pk-quote-grid" data-reveal>
            <p className="pk-quote-lead">
              Maybe it&rsquo;s time we stopped blaming our bodies and started understanding them.
            </p>
            <span className="pk-quote-rule" aria-hidden />
            <div className="pk-quote-side">
              <p>Because the root of what you&rsquo;re feeling may have been in your gut all along.</p>
              <a href="#services" className="pk-arrow-link">
                Explore Gut-First Solutions <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* ── MEET PAYAL · text left, image right ──────────────────────── */}
        <section id="about" className="pk-section">
          <div className="pk-wrap pk-split pk-split-rev">
            <div className="pk-split-copy">
              <p className="pk-eyebrow" data-reveal>
                The Woman Behind &ldquo;The Gut&rdquo;
              </p>
              <h2 className="pk-h2" data-reveal style={d('.06s')}>
                Meet Payal Kothari
              </h2>
              <p className="pk-question" data-reveal style={d('.12s')}>
                &ldquo;What Once Made Me Struggle With My Health Eventually Gave Me My Purpose.&rdquo;
              </p>
              <div className="pk-body" data-reveal style={d('.18s')}>
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
                <a href={LINKS.story} className="pk-btn pk-btn-outline">
                  Read My Story <ArrowRight size={15} />
                </a>
              </div>
            </div>

            <figure className="pk-split-media pk-split-portrait" data-reveal style={d('.08s')}>
              <Picture
                img={{ src: '/images/payal-the-gut.webp', w: 904, h: 1280, alt: 'Payal Kothari holding her book, The Gut' }}
              />
              <p className="pk-script pk-portrait-script" aria-hidden>
                Health starts within
              </p>
            </figure>
          </div>

          <div className="pk-media" data-reveal>
            <p className="pk-eyebrow is-center">Media Features</p>
            <Marquee
              items={MEDIA_FEATURES}
              className="pk-marquee-slow"
              render={(img, key, dec) => (
                <figure className="pk-clip" key={key}>
                  <Picture img={dec ? { ...img, alt: '' } : img} />
                </figure>
              )}
            />
          </div>
        </section>

        {/* ── FEATURED IN ──────────────────────────────────────────────── */}
        <section className="pk-section pk-tint">
          <div className="pk-wrap">
            <h2 className="pk-h2 is-center" data-reveal>
              Featured In Leading Publications
            </h2>
            <ul className="pk-logos" data-reveal style={d('.08s')}>
              {PRESS_LOGOS.map((l) => (
                <li key={l.src}>
                  <Picture img={l} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── TRUSTED BY ───────────────────────────────────────────────── */}
        <section className="pk-section">
          <div className="pk-wrap">
            <h2 className="pk-h2 is-center" data-reveal>
              Trusted By Some Of The Most Recognisable Names.
            </h2>
            <ul className="pk-people">
              {TRUSTED.map((t, i) => (
                <li key={t.src} className="pk-card" data-reveal style={d(`${0.04 + i * 0.05}s`)}>
                  <div className="pk-card-img pk-card-img-portrait">
                    <Picture img={t} />
                  </div>
                  {t.name ? <p className="pk-card-title">{t.name}</p> : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── SERVICES · photo-top cards ───────────────────────────────── */}
        <section id="services" className="pk-section pk-tint">
          <div className="pk-wrap">
            <div className="pk-head">
              <p className="pk-eyebrow is-center" data-reveal>
                Our Services
              </p>
              <h2 className="pk-h2 is-center" data-reveal style={d('.06s')}>
                Your Journey To Better Health Starts Here.
              </h2>
              <p className="pk-lead" data-reveal style={d('.12s')}>
                Whether you want to improve your gut, lose stubborn weight or take charge of your health,
                find the support that works for you.
              </p>
            </div>

            <div className="pk-services">
              {SERVICES.map((s, i) => (
                <article key={s.no} className="pk-card pk-service" data-reveal style={d(`${0.04 + i * 0.07}s`)}>
                  <div className={`pk-card-img${s.product ? ' is-product' : ''}`}>
                    <Picture img={s.img} />
                  </div>
                  <div className="pk-card-body">
                    <p className="pk-card-meta">
                      {s.no} / {s.kicker}
                    </p>
                    <h3 className="pk-card-title">{s.title}</h3>
                    <p className="pk-card-text">{s.body}</p>
                    <a
                      href={s.href}
                      className="pk-arrow-link"
                      {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {s.cta} {s.external ? <ArrowUpRight size={15} /> : <ArrowRight size={15} />}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESULTS ──────────────────────────────────────────────────── */}
        <section className="pk-section">
          <div className="pk-wrap pk-head">
            <p className="pk-eyebrow is-center" data-reveal>
              Different Approach. Visible Results.
            </p>
            <h2 className="pk-h2 is-center" data-reveal style={d('.06s')}>
              What Years Of Dieting Couldn&rsquo;t Achieve,
              <br />
              A Gut-First Approach Made Possible.
            </h2>
          </div>
          <div data-reveal style={d('.1s')}>
            <Marquee
              items={RESULTS}
              direction="ltr"
              render={(img, key, dec) => (
                <figure className="pk-result" key={key}>
                  <Picture img={dec ? { ...img, alt: '' } : img} />
                </figure>
              )}
            />
          </div>
          <div className="pk-wrap pk-center" data-reveal>
            <a href={LINKS.successStories} className="pk-arrow-link" target="_blank" rel="noopener noreferrer">
              See More Success Stories <ArrowRight size={15} />
            </a>
          </div>
        </section>

        {/* ── THE BOOK · image left, text right ────────────────────────── */}
        <section className="pk-section pk-tint">
          <div className="pk-wrap pk-split">
            <figure className="pk-split-media pk-panel-sand pk-book-media" data-reveal>
              <Picture
                img={{
                  src: '/images/the-gut-book.webp',
                  w: 981,
                  h: 1300,
                  alt: 'The Gut: Story of Our Incredible Second Brain, by Payal Kothari',
                }}
              />
            </figure>

            <div className="pk-split-copy">
              <p className="pk-eyebrow" data-reveal>
                The Bestselling Book By Payal Kothari
              </p>
              <h2 className="pk-h2" data-reveal style={d('.06s')}>
                Your Gut Has A Story To Tell.
                <br />
                This Book Helps You Understand It.
              </h2>
              <p className="pk-rating" data-reveal style={d('.1s')}>
                <span className="pk-stars" aria-hidden>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} size={15} />
                  ))}
                </span>
                4.4/5 on Amazon
              </p>
              <div className="pk-body" data-reveal style={d('.16s')}>
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
              <div className="pk-stores" data-reveal style={d('.22s')}>
                <span className="pk-card-meta">Available On:</span>
                <ul>
                  {BOOK_STORES.map((s) => (
                    <li key={s.name}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="pk-btn pk-btn-outline pk-btn-sm">
                        {s.name} <ArrowUpRight size={13} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── PODCASTS · journal-style cards ───────────────────────────── */}
        <section className="pk-section">
          <div className="pk-wrap">
            <div className="pk-row-head">
              <div>
                <p className="pk-eyebrow" data-reveal>
                  Podcast Appearances
                </p>
                <h2 className="pk-h2" data-reveal style={d('.06s')}>
                  Payal In Conversation
                </h2>
              </div>
            </div>
            <div className="pk-podcasts">
              {PODCASTS.map((p, i) => (
                <article key={p.id} className="pk-card" data-reveal style={d(`${0.04 + i * 0.06}s`)}>
                  <YouTubeLite id={p.id} title={p.title} />
                  <div className="pk-card-body">
                    <h3 className="pk-card-title pk-card-title-sm">{p.title}</h3>
                    <p className="pk-card-meta">{PODCAST_SHOWS[i]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── WATCH & LEARN · the olive band ───────────────────────────── */}
        <section className="pk-olive">
          <div className="pk-wrap pk-olive-grid">
            <div className="pk-olive-copy">
              <p className="pk-eyebrow" data-reveal>
                Watch &amp; Learn With Payal
              </p>
              <h2 className="pk-h2" data-reveal style={d('.06s')}>
                Gut Health, Made Simple.
              </h2>
              <p className="pk-olive-text" data-reveal style={d('.12s')}>
                Explore Payal&rsquo;s YouTube channel for practical insights on gut health, weight loss,
                nutrition and everyday wellness.
              </p>
              <div className="pk-olive-actions" data-reveal style={d('.18s')}>
                <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="pk-btn">
                  Watch On Youtube <ArrowRight size={15} />
                </a>
                <p className="pk-also">
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
            </div>
            <div className="pk-olive-video" data-reveal style={d('.1s')}>
              <YouTubeLite id={FEATURED_VIDEO.id} title={FEATURED_VIDEO.title} />
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section id="faq" className="pk-section">
          <div className="pk-wrap pk-faq">
            <div className="pk-faq-head">
              <p className="pk-eyebrow" data-reveal>
                Frequently Asked Questions
              </p>
              <h2 className="pk-h2" data-reveal style={d('.06s')}>
                Everything You Need To Know
              </h2>
            </div>
            <div className="pk-faq-list" data-reveal style={d('.1s')}>
              {FAQS.map((f, i) => (
                <details key={f.q} className="pk-faq-item" open={i === 0}>
                  <summary>
                    <span className="pk-faq-q">{f.q}</span>
                    <span className="pk-faq-icon" aria-hidden>
                      <Plus size={15} />
                    </span>
                  </summary>
                  <p className="pk-faq-a">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER · slim ivory, contact ─────────────────────────────── */}
      <footer id="contact" className="pk-footer">
        <div className="pk-wrap">
          <div className="pk-footer-contact">
            <p className="pk-eyebrow">Contact</p>
            <div className="pk-footer-lines">
              <a href={`mailto:${CONTACT.email}`}>
                <MailIcon size={17} /> {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phoneHref}`}>
                <PhoneIcon size={17} /> {CONTACT.phone}
              </a>
            </div>
          </div>

          <div className="pk-footer-row">
            <div>
              <p className="pk-wordmark">Payal Kothari</p>
              <p className="pk-footer-tag">Nutrition · Gut Health · Mindset · Wellbeing</p>
            </div>
            <nav aria-label="Footer" className="pk-footer-nav">
              {NAV.map((n) => (
                <a key={n.href} href={n.href}>
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="pk-socials">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon size={19} />
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={19} />
              </a>
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YoutubeIcon size={19} />
              </a>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon size={19} />
              </a>
            </div>
          </div>
          <p className="pk-footer-legal">&copy; {new Date().getFullYear()} Payal Kothari. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
