'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { User } from '@supabase/supabase-js';
import { Navbar } from '../HomeComponents/NavBar';
import { SelectAula } from '../TorneioComponents/SelectAula';
import { ModeToggle } from '../landing/mode-toggle';
import { ArrowLeftIcon } from 'lucide-react';
import { Footer } from '../landing/Footer';
import Comentarios from '../AulasComponents/Comentarios';

export default function VideoAulas({ user }: { user: User }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 dark:bg-black">
      <nav className="flex w-full justify-between px-3 md:px-4 text-gray-50 bg-black">
        <div className="flex gap-1 py-2 text-xl font-bold items-center">
          <img className="size-8" src="/logo.webp" alt="logo" />
          <h1 className="text-base text-gray-50">Cooderfy</h1>
        </div>
        <div className="flex gap-2 py-2">
          <ModeToggle />
          <Navbar />
        </div>
      </nav>

      <hr className="flex w-full bg-gray-50" />

      <div className="flex w-full p-4">
        <Button
          variant={'outline'}
          className="flex items-center p-3 space-x-1 cursor-pointer"
        >
          <ArrowLeftIcon className="size-4" />
          <span className="text-sm">Voltar</span>
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-4xl px-4">
        <div className="flex flex-col items-center justify-center w-full bg-muted/40 rounded-lg shadow-lg">
          <video
            controls
            className="w-full h-auto rounded-lg"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          />
        </div>

        <div className="flex items-center w-full gap-2 my-3 px-2">
          <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
            Aula 1:
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-200">
            Introdução ao Supabase
          </h2>
        </div>

        <div className="flex justify-between items-center w-full mt-4 px-2">
          <SelectAula />
          <Button
            variant="outline"
            onClick={() => alert('Redirecionando para a Aula 2...')}
            className="px-3 py-2 text-sm text-gray-700 dark:text-gray-400 rounded-lg"
          >
            Pular para próxima aula
          </Button>
        </div>

        <Comentarios />
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
