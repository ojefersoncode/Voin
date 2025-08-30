import { Dessert, Menu, Wallet } from 'lucide-react';

import { Button } from '../ui/button';

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

          <div className="flex items-center gap-4">
            <div className="flex gap-2 items-center rounded-lg touch-pan-x touch-pan-y">
              <div className="flex items-center rounded-sm bg-btn">
                <div className="flex flex-col items-start rounded-l-sm bg-black/30 py-1 px-4 justify-center">
                  <div className="flex w-full items-center m-0 p-0 text-text">
                    <span className="text-[0.7rem] font-medium">Moedas</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-text font-inter m-0 p-0">
                    1200.00
                  </div>
                </div>
                <Button className="bg-btn px-2 py-0 dark:bg-btn hover:bg-btn dark:hover:bg-btn">
                  <Wallet className="size-5" />
                </Button>
              </div>
            </div>

            <Button className="p-0 text-text dark:text-text">
              <Menu className="size-6" />
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
}
