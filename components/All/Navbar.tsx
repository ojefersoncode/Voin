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
            <div className="flex items-center justify-center gap-1 px-2 py-1 rounded-md text-green-50  border border-green-600 cursor-pointer bg-[#181818]">
              <img src="/Voin.png" alt="Coin" className="size-5" />
              <h1 className="mr-1 text-xs">130.000.00</h1>
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
