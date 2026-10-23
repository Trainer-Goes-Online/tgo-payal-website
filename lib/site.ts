/* Contact and social links are the live ones from payalkothari.com. */
export const CONTACT = {
  email: 'contact@payalkothari.com',
  phone: '+91 75062 55766',
  phoneHref: '+917506255766',
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/payalkotharinutrition/',
  facebook: 'https://www.facebook.com/payalkotharinutrition/',
  youtube: 'https://www.youtube.com/channel/UCzjILPXLKZQbUbH0VdfomFQ',
  linkedin: 'https://www.linkedin.com/in/payal-kothari-9808a216a/',
};

const enquire = (subject: string) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;

/* PENDING: no page exists yet for the programme, Payal's story or bookings,
   so these point at the old site or an email enquiry until they do. */
export const LINKS = {
  story: 'https://www.payalkothari.com/about-us',
  programme: enquire('The 4-Week Nutrition Experience'),
  gutavatar: 'https://www.gutavatar.com/',
  consultation: enquire('Private Consultation Enquiry'),
  speaking: enquire('Speaking Engagement Enquiry'),
  successStories: 'https://www.payalkothari.com/client-testimonials',
};

/* PENDING: store search results until the book's product urls are supplied. */
export const BOOK_STORES = [
  { name: 'Amazon', href: 'https://www.amazon.in/s?k=The+Gut+Payal+Kothari' },
  { name: 'Flipkart', href: 'https://www.flipkart.com/search?q=The%20Gut%20Payal%20Kothari' },
  { name: 'BooksWagon', href: 'https://www.bookswagon.com/search-books/the-gut-payal-kothari' },
  { name: 'Atlantic Books', href: 'https://www.atlanticbooks.com/search?q=the+gut+payal+kothari' },
];

export const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export type Img = { src: string; w: number; h: number; alt: string };

export const PRESS_LOGOS: Img[] = [
  { src: '/images/logos/vogue.webp', w: 377, h: 160, alt: 'Vogue' },
  { src: '/images/logos/gq.webp', w: 260, h: 160, alt: 'GQ' },
  { src: '/images/logos/times-of-india.webp', w: 479, h: 160, alt: 'The Times of India' },
  { src: '/images/logos/the-hindu.webp', w: 264, h: 160, alt: 'The Hindu' },
  { src: '/images/logos/economic-times.webp', w: 642, h: 160, alt: 'The Economic Times' },
  { src: '/images/logos/hindustan-times.webp', w: 570, h: 160, alt: 'Hindustan Times' },
  { src: '/images/logos/femina.webp', w: 502, h: 160, alt: 'Femina' },
  { src: '/images/logos/india-today-woman.webp', w: 344, h: 160, alt: 'India Today Woman' },
  { src: '/images/logos/mint.webp', w: 298, h: 160, alt: 'Mint' },
  { src: '/images/logos/the-week.webp', w: 301, h: 160, alt: 'The Week' },
  { src: '/images/logos/et-panache.webp', w: 450, h: 160, alt: 'ET Panache' },
  { src: '/images/logos/yourstory.webp', w: 300, h: 160, alt: 'YourStory' },
  { src: '/images/logos/the-quint.webp', w: 216, h: 160, alt: 'The Quint' },
  { src: '/images/logos/rediff.webp', w: 447, h: 160, alt: 'Rediff' },
  { src: '/images/logos/popxo.webp', w: 216, h: 160, alt: 'POPxo' },
  { src: '/images/logos/spice-route.webp', w: 409, h: 160, alt: 'Spice Route' },
  { src: '/images/logos/glamrs.webp', w: 411, h: 160, alt: 'GLAMRS' },
  { src: '/images/logos/whats-hot.webp', w: 175, h: 160, alt: "What's Hot" },
  { src: '/images/logos/my-smart-life.webp', w: 188, h: 160, alt: 'My Smart Life' },
];

export const MEDIA_FEATURES: Img[] = [
  { src: '/images/media/feature-01.webp', w: 636, h: 900, alt: 'Mumbai Mirror: a family fitness journey with Payal Kothari' },
  { src: '/images/media/feature-02.webp', w: 703, h: 900, alt: 'Mumbai Mirror: the Darji family lost 91 kg in five months' },
  { src: '/images/media/feature-03.webp', w: 960, h: 794, alt: 'Newspaper feature: Be in the pink' },
  { src: '/images/media/feature-04.webp', w: 612, h: 600, alt: 'Mumbai Mirror: the one diet change you should make this year' },
  { src: '/images/media/feature-05.webp', w: 613, h: 613, alt: 'Sakal Times: Think global but eat local' },
  { src: '/images/media/feature-06.webp', w: 900, h: 900, alt: 'Sunday Mid-Day: Tricking the hormone switch' },
  { src: '/images/media/feature-07.webp', w: 900, h: 900, alt: 'India Today feature by Payal Kothari on gut health' },
  { src: '/images/media/feature-08.webp', w: 1600, h: 569, alt: 'Newspaper feature: Seeding wellness' },
  { src: '/images/media/feature-09.webp', w: 902, h: 900, alt: 'GQ: how this man lost 30 kg in five months by improving his gut health' },
  { src: '/images/media/feature-10.webp', w: 1066, h: 844, alt: 'Mumbai Mirror: the Darji family testimonial' },
];

export const TRUSTED: (Img & { name?: string })[] = [
  { src: '/images/trusted/pritam.webp', w: 825, h: 1100, alt: 'Payal Kothari with Pritam', name: 'Pritam' },
  { src: '/images/trusted/anand-mahindra.webp', w: 825, h: 1100, alt: 'Payal Kothari with Anand Mahindra', name: 'Anand Mahindra' },
  { src: '/images/trusted/neil-nitin-mukesh.webp', w: 718, h: 488, alt: 'Payal Kothari with Neil Nitin Mukesh', name: 'Neil Nitin Mukesh' },
  { src: '/images/trusted/paul-mckenna.webp', w: 619, h: 1100, alt: 'Payal Kothari with Paul McKenna', name: 'Paul Mckenna' },
  { src: '/images/trusted/mickey-mehta.webp', w: 825, h: 1100, alt: 'Payal Kothari with Mickey Mehta', name: 'Mickey Mehta' },
  /* PENDING: the copy lists this person as "Name unknown". */
  { src: '/images/trusted/workshop.webp', w: 1024, h: 768, alt: 'Payal Kothari at a gut reset workshop' },
];

export const RESULTS: Img[] = [
  { src: '/images/results/result-01.webp', w: 900, h: 900, alt: 'Client before and after: Manali, 102 kg to 80 kg' },
  { src: '/images/results/result-02.webp', w: 900, h: 900, alt: 'Client before and after: Shivangi lost 26 kg' },
  { src: '/images/results/result-03.webp', w: 900, h: 900, alt: 'Client before and after: Namita lost 23 kg' },
  { src: '/images/results/result-04.webp', w: 900, h: 900, alt: 'Client before and after: Apurva lost 12 kg in 12 weeks' },
  { src: '/images/results/result-05.webp', w: 654, h: 750, alt: 'Client before and after: Maya, London, lost 15 kg' },
];

export const PODCASTS = [
  { id: 'Kv1j6C2UIf4', title: 'The Secret to a Disease Free Life with Gut Nutritionist Payal Kothari' },
  { id: '4WlGRyPB1R8', title: 'Nutritionist exposes the #1 mistake ruining your gut' },
  { id: 'w3XlyRtty2E', title: 'Even skincare begins in the gut, ft. Payal Kothari' },
  { id: 'UZ21vH86LT4', title: 'Ask Glamrs: diet, weight loss and nutrition' },
];

/* The most viewed of the channel's 30 latest uploads (2,487 views, Oct 2026). */
export const FEATURED_VIDEO = { id: '-LOYWWmEHJY', title: 'Are you always tired?' };
