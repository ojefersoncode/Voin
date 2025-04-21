'use client';

import { useState } from 'react';
import { User } from '@supabase/supabase-js';
import { Copy, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ModeToggle } from '../landing/mode-toggle';
import { Navbar } from '../HomeComponents/NavBar';
import { Footer } from '../landing/Footer';

const exampleCode = `export function signinButton() {
  return <button  variant={'outline'} className='bg-gray-500 text-white p-2 rounded'>Entrar</button>;
}`;

const exampleCode2 = `export function signupButton() {
  return <button  variant={'ghost'} className='bg-gray-500 text-white p-2 rounded'>Sair</button>;
}`;

export default function Componentes({ user }: { user: User }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(exampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="flex w-full justify-between py-2 max-md:px-3 md:px-8 bg-white dark:bg-black">
        <div className="flex gap-1 text-xl font-bold items-center">
          <img className="size-8" src="/logo.webp" alt="logo" />
          <div className="flex">
            <h1 className="text-gray-900 dark:text-gray-100 text-base">
              Cooderfy
            </h1>
          </div>
        </div>

        <div className="flex gap-2">
          <ModeToggle />
          <Navbar />
        </div>
      </nav>

      {/* Conteúdo */}
      <main className="flex flex-1 flex-col w-full items-center p-6 bg-muted/40">
        <div className="flex flex-col gap-2 w-full justify-start pb-7 pt-8">
          <h1 className="font-bold text-xl">Botões</h1>
          <span className="text-sm">
            Adicione este componente ao seu projeto, basta seguir a instalação e
            copiar o componente.
          </span>
        </div>

        <div className="p-2 rounded-lg w-full pb-10">
          <h1 className="font-bold text-lg">Instalação</h1>
          <span className="text-sm">
            Para adicionar este componente ao seu projeto, execute o seguinte
            comando:
          </span>

          {/* Bloco de código com posição relativa */}
          <div className="relative">
            <SyntaxHighlighter
              language="bash"
              style={dracula}
              className="rounded-md py-2 px-4"
            >
              {'npm install @cooderfy/ui@latest'}
            </SyntaxHighlighter>

            {/* Botão posicionado no canto superior direito */}
            <Button
              onClick={() => {
                navigator.clipboard.writeText(
                  'npm install @cooderfy/ui@latest'
                );
              }}
              variant={'ghost'}
              className="absolute top-2 right-2 flex items-center bg-white dark:bg-black"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copiar
            </Button>
          </div>
        </div>
        <div className="border p-4 bg-muted/10 rounded-lg w-full py-4">
          <h1 className="font-bold text-lg pb-4">Botão outiline</h1>

          <div className="flex w-full items-center gap-4 p-6 border">
            <h2>Preview outline:</h2>
            <Button
              variant={'outline'}
              className="bg-gray-500 text-white p-2 rounded"
            >
              Entrar
            </Button>
          </div>

          <SyntaxHighlighter
            language="tsx"
            style={dracula}
            className="rounded-md py-10 px-4"
          >
            {exampleCode}
          </SyntaxHighlighter>
          <div className="flex w-full justify-end">
            <Button
              onClick={handleCopy}
              variant={'ghost'}
              className="mt-4 flex items-center bg-muted border border-dashed border-black dark:border-white"
            >
              <Copy className="w-4 h-4 mr-2" />
              {copied ? 'Copiado!' : 'Copiar Código'}
            </Button>
          </div>
        </div>
        <div className="border p-4 bg-muted/10 rounded-lg w-full py-4">
          <h1 className="font-bold text-lg pb-4">Botão solido</h1>

          <div className="flex w-full items-center gap-4 p-6 border">
            <h2>Preview ghost:</h2>
            <Button
              variant={'ghost'}
              className="bg-gray-950 text-white p-2 rounded"
            >
              Entrar
            </Button>
          </div>

          <SyntaxHighlighter
            language="tsx"
            style={dracula}
            className="rounded-md py-10 px-4"
          >
            {exampleCode2}
          </SyntaxHighlighter>
          <div className="flex w-full justify-end">
            <Button
              onClick={handleCopy}
              variant={'ghost'}
              className="mt-4 flex items-center bg-muted border border-dashed border-black dark:border-white"
            >
              <Copy className="w-4 h-4 mr-2" />
              {copied ? 'Copiado!' : 'Copiar Código'}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
