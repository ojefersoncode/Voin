import ButtonMenu from './ButtonMenu';

export default function NavbarAll() {
  return (
    <>
      <header className=" bg-[#0e0e0e] border-b border-green-600/20 mb-2">
        <nav className="flex items-center justify-between py-1 px-2">
          <div className="flex items-center gap-1 px-2">
            <img src="/Logomarca.png" alt="Logomarca" className="size-8" />
          </div>

          <div className="flex gap-3 py-2 px-2">
            <div className="flex items-center justify-center gap-1 px-2 py-1 rounded-md text-green-50  border border-green-50 border-opacity-20 cursor-pointer bg-[#181818]">
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
