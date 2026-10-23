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
