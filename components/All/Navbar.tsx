import { Dessert, Menu, Wallet } from 'lucide-react';

import { Button } from '../ui/button';
import ButtonMenu from './ButtonMenu';

export default function NavbarAll() {
  return (
    <>
      <header className="bg-blackground top-0 z-30 touch-pan-x touch-pan-y border-b border-zinc-700 mb-3">
        <nav className="flex items-center justify-between px-2 py-2">
          <div className="flex gap-4 items-center touch-pan-x touch-pan-y">
            <img
              className="h-8 w-8 max-md:h-7 max-md:w-7"
              src="/Bronk.png"
              alt="logo"
            />
          </div>

          <div className="flex items-center gap-4 touch-pan-x touch-pan-y">
            <Button className=" py-0 px-2 rounded-sm border-none text-sm">
              <div className="flex items-center justify-center gap-1">
                <Wallet className="size-5 md:size-6 text-btn" />
                <span className="text-text/80 text-sm md:text-lg font-bold">
                  1200.00
                </span>
              </div>
            </Button>

            <ButtonMenu />
          </div>
        </nav>
      </header>
    </>
  );
}
