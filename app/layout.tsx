import type { Metadata, Viewport } from 'next';
import { Allura, Inter, Playfair_Display } from 'next/font/google';

import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const allura = Allura({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-allura',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Payal Kothari · Gut Health Expert, Weight Loss Specialist & Bestselling Author',
  description:
    'Go beyond diets and quick fixes with a science-backed, gut-first approach to better digestion, sustainable weight loss and lasting health.',
};

export const viewport: Viewport = {
  themeColor: '#F8F4EE',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${allura.variable}`}>
      <body>{children}</body>
    </html>
  );
}
