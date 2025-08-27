import { Dessert } from 'lucide-react';
import ButtonMenu from './ButtonMenu';

export default function NavbarAll() {
  return (
    <>
      <header className="bg-background border-b border-zinc-700 touch-pan-x touch-pan-y">
        <nav className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-1 sm:px-1 cursor-pointer">
            <img className="size-8" src="/Nexbattle.png" alt="Nexcoin" />
          </div>
            <ButtonMenu />
        </nav>
      </header>
    </>
  );
}
