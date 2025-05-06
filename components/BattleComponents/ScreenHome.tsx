import { Card } from '../ui/card';
import NavbarAll from '../All/Navbar';
import NavBattle from './NavBattle';

export default function ScreenHome() {
  const nivelAtual = 'Bronze';

  const imagensLevel = [
    { Image: '/Level/bronze.svg', label: 'Bronze' },
    { Image: '/Level/silver.svg', label: 'Prata' },
    { Image: '/Level/gold.svg', label: 'Ouro' },
    { Image: '/Level/diamond.svg', label: 'Diamante' },
    { Image: '/Level/elit.svg', label: 'Elite' }
  ];

  return (
    <div className="flex flex-col min-h-dvh">
      <header>
        <NavbarAll />
      </header>

      <div className="flex justify-center items-center w-full my-auto">
        <div className="flex flex-col w-full justify-between items-center touch-pan-x touch-pan-y">
          <Card className="flex bg-[#0e0e0e] border-none touch-pan-x touch-pan-y">
            <div className="flex font-sans text-white overflow-hidden">
              <div className="flex flex-col justify-center">
                <div className="flex items-center justify-center gap-6 max-md:gap-4">
                  {imagensLevel.map(({ Image: imgSrc, label }, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center justify-center space-y-1 ${
                        label === nivelAtual ? 'opacity-100' : 'opacity-30'
                      } transition-opacity duration-300`}
                    >
                      <img
                        src={imgSrc}
                        alt={label}
                        className="select-none size-16 max-md:size-14"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-[#0e0e0e] border-none p-1 touch-pan-x touch-pan-y">
            <div className="flex flex-col font-sans text-white overflow-hidden">
              <div className="flex-grow flex flex-col py-7 max-md:py-16 items-center justify-center">
                <img
                  className="animate-pulse drop-shadow-xl size-60 shadow-white select-none"
                  src={`/Level/${nivelAtual.toLowerCase()}.svg`}
                  alt="patente"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>

      <footer>
        <NavBattle />
      </footer>
    </div>
  );
}
