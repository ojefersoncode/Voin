import { ArrowLeftIcon } from 'lucide-react';
import BalanceButton from '../All/BalanceButton';
import ButtonMenu from '../All/ButtonMenu';
import { Button } from '../ui/button';

export default function Battlebar() {
  return (
    <>
      <header className=" bg-[#0e0e0e] border-b border-green-900/60 mb-2 touch-pan-x touch-pan-y">
        <nav className="flex items-center justify-between py-1 px-2">
          <div className="flex items-center gap-1 sm:px-1">
            <Button className="bg-trasnparent px-1">
              <ArrowLeftIcon className="text-white" />
            </Button>
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
