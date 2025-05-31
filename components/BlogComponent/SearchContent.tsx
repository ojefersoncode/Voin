'use client';

import { Filter, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Pageback from '../All/Pageback';

export default function SearchContent() {
  return (
    <div className="touch-pan-x touch-pan-y">
      <main className="p-6 gap-4">
        <div className="flex items-center gap-2 text-text pb-2">
          <h1 className="font-inter text-xl">Noticias recentes</h1>
        </div>

        <div className="flex w-full space-x-4 pt-4">
          <Input
            className="bg-subbackground border-btn text-text/80 flex-1"
            placeholder="pesquisar.."
          />
          <Button className="bg-btn hover:bg-btn/80 w-12 min-w-[3rem] p-0 flex justify-center items-center">
            <Filter className="w-5 h-5" />
          </Button>
          <Button className="bg-btn hover:bg-btn/80 w-12 min-w-[3rem] p-0 flex justify-center items-center">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </main>
    </div>
  );
}
