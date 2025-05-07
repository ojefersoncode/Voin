import BalanceButton from './BalanceButton';
import ButtonMenu from './ButtonMenu';

export default function NavbarAll() {
  return (
    <>
      <header className=" bg-[#0e0e0e] border-b border-green-900/60 mb-2 touch-pan-x touch-pan-y">
        <nav className="flex items-center justify-between py-1 px-2">
          <div className="flex items-center gap-1 sm:px-1">
            <img src="/Logomarca.png" alt="Logomarca" className="size-8" />
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
