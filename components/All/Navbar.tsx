import { Dessert } from 'lucide-react';
import BalanceButton from './BalanceButton';
import ButtonMenu from './ButtonMenu';

export default function NavbarAll() {
  return (
    <>
      <header className="border-b rounded-xl bg-background mb-2 touch-pan-x touch-pan-y">
        <nav className="flex items-center justify-between py-1 px-2">
          <div className="flex items-center gap-1 sm:px-1 cursor-pointer">
            <img className="size-10" src="/Nexbattle.png" alt="logo" />
          </div>

          <div className="flex gap-6 py-2 px-2">
            <div>
              <BalanceButton />
            </div>

            <div>
              <ButtonMenu />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
