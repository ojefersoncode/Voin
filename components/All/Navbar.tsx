import Image from 'next/image';

export default function NavbarAll() {
  return (
    <>
      <header className=" bg-[#0e0e0e] border-b border-green-500/20 mb-2">
        <nav className="flex items-center justify-between py-2 p-2">
          <div className="flex items-center gap-1 px-2">
            <h1 className="font-mono font-bold text-green-50 text-sm">VOIN</h1>
          </div>

          <div className="flex gap-2 p-4">
            <div className="flex items-center justify-center gap-1 px-4 rounded-md text-green-50  border border-green-50 border-opacity-20 cursor-pointer bg-[#181818]">
              <img src="/Voin.png" alt="Logo" className="size-5" />
              <h1 className="mr-1 text-xs">130.000.00</h1>
            </div>

            <div className="border border-[#181818] rounded-full">
              <Image
                className="size-8"
                src="/patente/Bronze.png"
                alt="Patente"
                width={'100'}
                height={'100'}
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
