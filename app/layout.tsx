import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import { Header, Footer, WhatsAppChat, SeoHead } from '@/components';
import { generateMeta } from '@/lib/seo';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = generateMeta('home');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <SeoHead />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppChat />
      </body>
    </html>
  );
}
