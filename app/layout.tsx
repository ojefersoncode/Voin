import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { getURL } from '../utils/helpers';
import '@/styles/main.css';
import { PHProvider } from './providers';
import { Toaster } from '../components/ui/toaster';
import PostHogPageViewWrapper from '../components/pages/PostHogPageViewWrapper';

const meta = {
  title: 'Voin',
  description: 'Participe de torneios de trading.',
  cardImage: '/cooderfy.png',
  robots: 'follow, index',
  favicon: '/Voin.png',
  url: getURL()
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: 'origin-when-cross-origin',
    keywords: [
      'Voin',
      'Trade',
      'Cripto',
      'Bitcoin',
      'Altcoins',
      'Mercado financeiro',
      'Torneios',
      'Campeonatos',
      'Grana extra',
      'Ativo',
      'Earn',
      'Gain',
      'Green',
      'Game',
      'Jogos'
    ],
    authors: [{ name: 'Voin', url: 'https://voin.com/' }],
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
      site: '@cooderfy',
      creator: 'ojefersoncode',
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage]
    }
  };
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <PHProvider>
        <body>
          <PostHogPageViewWrapper />
          <main
            id="skip"
            className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
          >
            {children}
          </main>
          <Toaster />
        </body>
      </PHProvider>
    </html>
  );
}
