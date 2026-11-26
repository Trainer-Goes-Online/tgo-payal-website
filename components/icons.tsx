import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 24, children, ...rest }: P) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: P) => (
  <Svg {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </Svg>
);

export const ArrowDown = (p: P) => (
  <Svg {...p}>
    <path d="M12 4v15M6 13l6 6 6-6" />
  </Svg>
);

export const ArrowUpRight = (p: P) => (
  <Svg {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Svg>
);

export const Play = (p: P) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
  </Svg>
);

export const Star = (p: P) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <path d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.1l-5.7 3.2 1.2-6.4L2.8 9.5l6.4-.8L12 2.8Z" />
  </Svg>
);

export const Plus = (p: P) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

/* Service glyphs, drawn to the brand kit's thin-line icon circles. */
export const BowlIcon = (p: P) => (
  <Svg {...p}>
    <path d="M3.5 12h17a8.5 8.5 0 0 1-17 0Z" />
    <path d="M12 12c0-3 1.6-5.4 4.5-6.5-.3 3-1.9 5.3-4.5 6.5ZM12 12c-.4-2.4-1.9-4.1-4.2-4.6.2 2.3 1.7 4 4.2 4.6Z" />
  </Svg>
);

export const JarIcon = (p: P) => (
  <Svg {...p}>
    <path d="M8 3.5h8M8.5 3.5v2.2c0 .6-.4 1.1-.9 1.4A3.5 3.5 0 0 0 6 10v8.5A2 2 0 0 0 8 20.5h8a2 2 0 0 0 2-2V10a3.5 3.5 0 0 0-1.6-2.9c-.5-.3-.9-.8-.9-1.4V3.5" />
    <path d="M12 16.5c0-2 1.2-3.6 3-4.2-.1 2-1.3 3.6-3 4.2ZM12 16.5c-.3-1.6-1.4-2.7-2.9-3 .2 1.6 1.3 2.7 2.9 3Z" />
  </Svg>
);

export const ConsultIcon = (p: P) => (
  <Svg {...p}>
    <circle cx="8" cy="7.5" r="2.6" />
    <circle cx="16" cy="7.5" r="2.6" />
    <path d="M3.5 19c.4-3.1 2.3-5 4.5-5s4.1 1.9 4.5 5M11.5 19c.4-3.1 2.3-5 4.5-5s4.1 1.9 4.5 5" />
  </Svg>
);

export const MicIcon = (p: P) => (
  <Svg {...p}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5v3.5M8.5 21h7" />
  </Svg>
);

export const MailIcon = (p: P) => (
  <Svg {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </Svg>
);

export const PhoneIcon = (p: P) => (
  <Svg {...p}>
    <path d="M5 4.5h3.3l1.5 4-2 1.3a10.5 10.5 0 0 0 6.4 6.4l1.3-2 4 1.5V19a1.5 1.5 0 0 1-1.6 1.5C10.8 20 4 13.2 3.5 6.1A1.5 1.5 0 0 1 5 4.5Z" />
  </Svg>
);

export const InstagramIcon = (p: P) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
  </Svg>
);

export const FacebookIcon = (p: P) => (
  <Svg {...p}>
    <path d="M14 8.5h2.5V5H14a3.5 3.5 0 0 0-3.5 3.5v2.3H8v3.4h2.5V21H14v-6.8h2.4l.6-3.4h-3V9a.5.5 0 0 1 .5-.5Z" />
  </Svg>
);

export const YoutubeIcon = (p: P) => (
  <Svg {...p}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
    <path d="m10.5 9.3 4.5 2.7-4.5 2.7V9.3Z" fill="currentColor" />
  </Svg>
);

export const LinkedinIcon = (p: P) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
    <path d="M8 10.5V16M8 7.6v.1M11.5 16v-3.2c0-1.4.9-2.3 2.1-2.3 1.2 0 1.9.9 1.9 2.3V16M11.5 10.5V16" />
  </Svg>
);

/* Focus-strip glyphs (the mock's sand-circle icon row). */
export const GutIcon = (p: P) => (
  <Svg {...p}>
    <path d="M9 3.5v2.2c0 1-1 1.6-2 1.6-1.4 0-2.5 1.1-2.5 2.5S5.6 12.3 7 12.3h9.5a2.5 2.5 0 0 1 0 5H9.8a2.3 2.3 0 0 0 0 4.6h.7" />
    <path d="M15 3.5v2.2c0 1 1 1.6 2 1.6 1.4 0 2.5 1.1 2.5 2.5" />
  </Svg>
);

export const LeafIcon = (p: P) => (
  <Svg {...p}>
    <path d="M5 19c0-8 5.5-13.5 14-14-.2 8.4-5.8 14-14 14Z" />
    <path d="M5 19c3-3.6 6.4-6.6 10-9" />
  </Svg>
);

export const MindIcon = (p: P) => (
  <Svg {...p}>
    <path d="M12 5.2a3.2 3.2 0 0 0-6 1.5 3 3 0 0 0-1.6 5.1 3.1 3.1 0 0 0 2.4 4.9A3 3 0 0 0 12 18.4V5.2Z" />
    <path d="M12 5.2a3.2 3.2 0 0 1 6 1.5 3 3 0 0 1 1.6 5.1 3.1 3.1 0 0 1-2.4 4.9A3 3 0 0 1 12 18.4" />
  </Svg>
);

export const BookIcon = (p: P) => (
  <Svg {...p}>
    <path d="M12 6.5c-1.8-1.3-4.3-2-7.5-2v13c3.2 0 5.7.7 7.5 2 1.8-1.3 4.3-2 7.5-2v-13c-3.2 0-5.7.7-7.5 2Z" />
    <path d="M12 6.5v13" />
  </Svg>
);

/* About page glyphs. */
export const IntestineIcon = (p: P) => (
  <Svg {...p}>
    <path d="M9.5 3.5v1.6c0 .9-.7 1.4-1.6 1.4H7a2.2 2.2 0 0 0 0 4.4h9.5a2.2 2.2 0 0 1 0 4.4H7.5a2.2 2.2 0 0 0 0 4.4h3" />
    <path d="M14.5 3.5v1.6c0 .9.7 1.4 1.6 1.4h.9a2.2 2.2 0 0 1 2.2 2.2M7 8.7h9.5M7.5 13.1h9" />
  </Svg>
);

export const StomachIcon = (p: P) => (
  <Svg {...p}>
    <path d="M9 3v3.5c0 1.2.8 2 2 2.3 3.8 1 5.5 2.7 5.5 5.4a5.3 5.3 0 0 1-8.6 4.2c-.8-.6-1.8-.7-2.6-.2L4 19" />
    <path d="M11 8.8c-2.3.5-3.4 2-3.4 4.2" />
  </Svg>
);

export const ScaleIcon = (p: P) => (
  <Svg {...p}>
    <path d="M12 4v15.5M8.5 19.5h7M5 7h14M12 4.5a1 1 0 1 0 0-.1" />
    <path d="m5 7-2.5 6h5L5 7ZM19 7l-2.5 6h5L19 7ZM2.5 13a2.5 2.5 0 0 0 5 0M16.5 13a2.5 2.5 0 0 0 5 0" />
  </Svg>
);

export const LotusIcon = (p: P) => (
  <Svg {...p}>
    <path d="M12 18.5c-2-1.8-3-4.3-3-7 0-2.4 1-4.6 3-6.5 2 1.9 3 4.1 3 6.5 0 2.7-1 5.2-3 7Z" />
    <path d="M12 18.5c-3.4 0-6-1.4-7.5-4.3 1.9-.9 3.8-1 5.4-.4M12 18.5c3.4 0 6-1.4 7.5-4.3-1.9-.9-3.8-1-5.4-.4" />
    <path d="M12 18.5c-4.3.4-7.4-.6-9.5-2.8M12 18.5c4.3.4 7.4-.6 9.5-2.8" />
  </Svg>
);

export const MortarIcon = (p: P) => (
  <Svg {...p}>
    <path d="M3.5 12.5h17a8.5 7 0 0 1-17 0ZM9 19.2l-.5 1.3h7l-.5-1.3" />
    <path d="m13 12 6-8M17.5 3l2.6 1.9" />
    <path d="M8.5 12c-.2-2.6.9-4.4 3.3-5.3.4 2.5-.7 4.3-3.3 5.3Z" />
  </Svg>
);

export const SproutIcon = (p: P) => (
  <Svg {...p}>
    <path d="M12 20.5V11" />
    <path d="M12 11C12 7 9.5 4.5 5 4.5 5 8.5 7.8 11 12 11ZM12 13.5c0-3.6 2.4-6 6.5-6 0 3.7-2.6 6-6.5 6Z" />
  </Svg>
);

export const StonesIcon = (p: P) => (
  <Svg {...p}>
    <ellipse cx="12" cy="18" rx="7.5" ry="2.7" />
    <ellipse cx="12" cy="12.6" rx="5.5" ry="2.3" />
    <ellipse cx="12" cy="7.8" rx="3.4" ry="1.9" />
  </Svg>
);

export const SunriseIcon = (p: P) => (
  <Svg {...p}>
    <path d="M7 15a5 5 0 0 1 10 0M12 4.5v2.5M5.3 8.3l1.6 1.6M18.7 8.3l-1.6 1.6M2.5 15h3M18.5 15h3" />
    <path d="M3 18c2.5-1.2 4.5-1.2 6 0s3.5 1.2 6 0 4.5-1.2 6 0M5.5 21c2-.8 3.6-.8 5 0s3 .8 5 0" />
  </Svg>
);

export const PencilIcon = (p: P) => (
  <Svg {...p}>
    <path d="M15.5 4.5 19.5 8.5 8.5 19.5 4 20l.5-4.5 11-11ZM13.5 6.5l4 4" />
  </Svg>
);

export const PeopleIcon = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="7.5" r="2.6" />
    <circle cx="5.8" cy="9.5" r="2" />
    <circle cx="18.2" cy="9.5" r="2" />
    <path d="M7.5 19c.3-3.3 2.1-5.3 4.5-5.3s4.2 2 4.5 5.3M2.5 18.5c.2-2.4 1.5-3.8 3.3-3.8 1 0 1.8.4 2.4 1.1M21.5 18.5c-.2-2.4-1.5-3.8-3.3-3.8-1 0-1.8.4-2.4 1.1" />
  </Svg>
);

export const GradCapIcon = (p: P) => (
  <Svg {...p}>
    <path d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5Z" />
    <path d="M6.5 11.5v4c1.3 1.4 3.2 2.1 5.5 2.1s4.2-.7 5.5-2.1v-4M21.5 9.5v5" />
  </Svg>
);

export const WorkshopIcon = (p: P) => (
  <Svg {...p}>
    <rect x="4.5" y="3.5" width="15" height="9" rx="1" />
    <circle cx="7" cy="16" r="1.6" />
    <circle cx="12" cy="16" r="1.6" />
    <circle cx="17" cy="16" r="1.6" />
    <path d="M4 21c.3-1.6 1.4-2.6 3-2.6s2.7 1 3 2.6M9 21c.3-1.6 1.4-2.6 3-2.6s2.7 1 3 2.6M14 21c.3-1.6 1.4-2.6 3-2.6s2.7 1 3 2.6" />
  </Svg>
);

export const ArticlesIcon = (p: P) => (
  <Svg {...p}>
    <path d="M6.5 4.5h13v14a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V8.5h3" />
    <path d="M6.5 4.5v14a2 2 0 0 1-2 2M9.5 8h7M9.5 11h7M9.5 14h7M9.5 17h4.5" />
  </Svg>
);

export const SchoolIcon = (p: P) => (
  <Svg {...p}>
    <path d="M3 20.5h18M4.5 20.5v-9h15v9M8 11.5 12 7.5l4 4M12 7.5V3.5h3v1.6h-3" />
    <path d="M10.5 20.5v-3.5h3v3.5M7 14.5h1.5M15.5 14.5H17M7 17.5h1.5M15.5 17.5H17" />
  </Svg>
);

export const LaurelIcon = (p: P) => (
  <Svg {...p}>
    <path d="M7 20.5C3.8 17.8 2.8 13.6 4 9.5M17 20.5c3.2-2.7 4.2-6.9 3-11" />
    <path d="M4.6 16.8c-1.5-.2-2.4-1.1-2.6-2.5 1.4.1 2.4.9 2.6 2.5ZM3.7 12.8c-1.3-.6-1.9-1.7-1.7-3 1.2.5 1.8 1.5 1.7 3ZM4.2 9.2C3.3 8.2 3.2 7 3.8 5.9c.9.9 1 2 .4 3.3ZM19.4 16.8c1.5-.2 2.4-1.1 2.6-2.5-1.4.1-2.4.9-2.6 2.5ZM20.3 12.8c1.3-.6 1.9-1.7 1.7-3-1.2.5-1.8 1.5-1.7 3ZM19.8 9.2c.9-1 1-2.2.4-3.3-.9.9-1 2-.4 3.3Z" />
  </Svg>
);
