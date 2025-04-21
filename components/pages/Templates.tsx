'use client';

import { User } from '@supabase/supabase-js';
import { Navbar } from '../HomeComponents/NavBar';
import { Footer } from '../landing/Footer';
import { ModeToggle } from '../landing/mode-toggle';
import { useRouter } from 'next/navigation';

export default function TemplatesWeb({ user }: { user: User }) {
  const router = useRouter();

  const templates = [
    { id: 1, name: 'Landing page', imageUrl: '/cooderfy.png' },
    { id: 2, name: 'Aplicativo web', imageUrl: '/cooderfy.png' },
    { id: 3, name: 'Ecommerc web', imageUrl: '/cooderfy.png' },
    { id: 4, name: 'Dashboard web', imageUrl: '/cooderfy.png' }
  ];

  return (
    <div className="relative flex min-h-screen w-full bg-gray-200 dark:bg-black dark:bg-muted/40">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
        <nav className="flex w-full justify-between py-2 max-md:px-3 md:px-8 bg-white dark:bg-black">
          <div className="flex gap-1 text-xl font-bold items-center">
            <img className="size-8" src="/logo.webp" alt="logo" />
            <h1 className="dark:text-gray-100 text-base">Cooderfy</h1>
          </div>

          <div className="flex gap-4">
            <ModeToggle />
            <Navbar />
          </div>
        </nav>

        <div className="mx-auto grid w-full max-w-7xl gap-10 py-10 lg:gap-14 max-md:p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className="border rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative">
                <img
                  onClick={() => router.push('/create-project')}
                  src={template.imageUrl}
                  alt={template.name}
                  className="w-full h-64 object-cover rounded-t-lg rounded-b-sm transition-all cursor-pointer hover:border dark:hover:border-gray-300 hover:border-gray-900 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
