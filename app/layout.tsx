import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { getURL } from '../utils/helpers';
import '@/styles/main.css';
import { ThemeProvider } from '../components/landing/theme-provider';
import { Toaster } from '../components/ui/toaster';
import { Inter, Titan_One, Poppins as PoppinsFont } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-inter'
});

const titanOne = Titan_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-titan-one'
});

const poppins = PoppinsFont({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
});

const meta = {
  title: 'Bronk',
  description: 'Plataformas de cripto para gamers.',
  cardImage: '/banner.png',
  robots: 'follow, index',
  favicon: '/Bronk.png',
  url: getURL()
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: 'origin-when-cross-origin',
    keywords: [
      'Nex',
      'Trade',
      'Cripto',
      'Bitcoin',
      'Altcoins',
      'Mercado financeiro',
      'Torneios',
      'Campeonatos',
      'Grana extra',
      'Ativo',
      'Games',
      'Earn',
      'Gain',
      'Green',
      'Game',
      'Jogos'
    ],
    authors: [{ name: 'Bronk', url: 'https://Nexprotocol.com/' }],
    creator: 'OjersonCode',
    publisher: 'OjefersonCode',
    robots: meta.robots,
    icons: { icon: meta.favicon },
    metadataBase: new URL(meta.url),
    openGraph: {
      url: meta.url,
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
      type: 'website',
      siteName: meta.title
    },
    twitter: {
      card: 'summary_large_image',
      site: '@nexprotocol',
      creator: 'ojefersoncode',
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage]
    }
  };
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${titanOne.variable}`}>
      <ThemeProvider>
        <body>
          <main
            id="skip"
            className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
          >
            {children}
          </main>
          <Toaster />
        </body>
      </ThemeProvider>
    </html>
  );
}
