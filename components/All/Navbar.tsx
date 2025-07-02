import { Dessert } from 'lucide-react';
import ButtonMenu from './ButtonMenu';

export default function NavbarAll() {
  return (
    <>
      <header className="bg-background border-b border-zinc-700 touch-pan-x touch-pan-y">
        <nav className="flex items-center justify-between px-2">
          <div className="flex items-center gap-1 sm:px-1 px-2 cursor-pointer">
            <img className="size-8" src="/Nexbattle.png" alt="Nexcoin" />
          </div>
        
            <div className="rounded-lg border border-zinc-700">
              <ButtonMenu />
            </div>
        </nav>
      </header>
    </>
  );
}
