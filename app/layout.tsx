import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

import { Motion } from '@/components/Motion';

import './globals.css';

// Bogue ships in one cut, so the whole weight range maps to it instead of a synthetic bold.
const bogue = localFont({
  src: [{ path: './fonts/bogue-medium.woff2', weight: '400 700', style: 'normal' }],
  variable: '--font-bogue',
  display: 'swap',
});

const halyard = localFont({
  src: [
    { path: './fonts/halyard-display-regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/halyard-display-italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/halyard-display-medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/halyard-display-semibold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/halyard-display-bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-halyard',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Payal Kothari · Gut Health Expert, Weight Loss Specialist & Bestselling Author',
  description:
    'Go beyond diets and quick fixes with a science-backed, gut-first approach to better digestion, sustainable weight loss and lasting health.',
};

export const viewport: Viewport = {
  themeColor: '#D6D4C7',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bogue.variable} ${halyard.variable}`}>
      <body>
        {children}
        <Motion />
      </body>
    </html>
  );
}
