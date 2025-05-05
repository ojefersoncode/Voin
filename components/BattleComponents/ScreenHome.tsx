import { Calendar, Crown, Gift, Globe, SwordIcon, Trophy } from 'lucide-react';
import { Card } from '../ui/card';

export default function ScreenHome() {
  const iconsLeft = [
    { icon: Calendar, label: 'Passe vip' },
    { icon: Gift, label: 'Bonus' }
  ];

  const icons = [{ icon: SwordIcon, label: 'Batalhar' }];

  const iconsRight = [
    { icon: Globe, label: 'Global' },
    { icon: Trophy, label: 'Trofeus' }
  ];

  return (
    <div className="flex w-full justify-between items-center md:px-7 max-md:px-4 pt-7 touch-pan-x touch-pan-y">
      <Card className="flex flex-col bg-[#0e0e0e] border-none p-1 touch-pan-x touch-pan-y">
        <div className="flex flex-col font-sans text-white overflow-hidden">
          {/* Card Showcase */}
          <div className="flex flex-col justify-center pt-1">
            <div className="flex flex-col items-center justify-center gap-6">
              {iconsLeft.map(({ icon: Icon, label }, index) => (
                <div
                  key={index}
                  className="w-20 h-20 max-md:w-14 max-md:h-14 rounded-md flex flex-col items-center justify-center space-y-1"
                >
                  <Icon className="size-6 text-white" />
                  <span className="text-xs pt-2">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="bg-[#0e0e0e] border-none my-4 p-1 touch-pan-x touch-pan-y">
        <div className="flex flex-col font-sans text-white overflow-hidden">
          {/* Main Content */}
          <div className="flex-grow flex flex-col py-7 max-md:py-16 items-center justify-center">
            <img
              className="size-52 max-md:size-32 animate-pulse duration-1 drop-shadow-xl shadow-white select-none"
              src="/Level/ouro.svg"
              alt="patente"
            />
          </div>

          {/* Card Showcase */}
          <div className="flex justify-center pb-2 sm:pt-4">
            <div className="flex space-x-6">
              {icons.map(({ icon: Icon, label }, index) => (
                <div
                  key={index}
                  className="border border-green-600 py-4 bg-[#181818] hover:bg-[#212121] transition-colors
                   w-36 h-20 max-sm:h-16 rounded-md flex flex-col items-center justify-center space-y-1"
                >
                  <span className="text-lg font-semibold text-green-600">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="flex flex-col bg-[#0e0e0e] border-none p-1 touch-pan-x touch-pan-y">
        <div className="flex flex-col font-sans text-white overflow-hidden">
          {/* Card Showcase */}
          <div className="flex flex-col justify-center pt-1">
            <div className="flex flex-col items-center justify-center gap-6">
              {iconsRight.map(({ icon: Icon, label }, index) => (
                <div
                  key={index}
                  className="w-20 h-20 max-md:w-14 max-md:h-14 rounded-md flex flex-col items-center justify-center space-y-1"
                >
                  <Icon className="size-6 text-white" />
                  <span className="text-xs pt-2">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
