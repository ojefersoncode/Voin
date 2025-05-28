import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';

const days = [
  { day: 'DIA 1', checked: true },
  { day: 'DIA 2', checked: true },
  { day: 'HOJE', checked: true, isToday: true },
  { day: 'DIA 4', checked: false },
  { day: 'DIA 5', checked: false },
  { day: 'DIA 6', checked: false },
  { day: 'DIA 7', checked: false }
];

export default function LoginDiario() {
  return (
    <div className="w-full justify-center items-center touch-pan-x touch-pan-y">
      <div className="flex items-center justify-between py-6">
        <div className="text-text">
          <h1 className="text-base font-inter">Login Diário</h1>
          <h2 className="text-xs font-bold text-text/70 mt-1">07/12/2025</h2>
        </div>
        <Button className="bg-subbackground hover:bg-subbackground/80">
          Resgatar
        </Button>
      </div>

      <div className=" w-full mx-auto text-white rounded-xl shadow-lg space-y-4">
        <div className="grid grid-cols-7 max-sm:grid-cols-4 gap-2">
          {days.map((item, index) => (
            <Card
              key={index}
              className={clsx(
                'text-center py-3 space-y-2',
                item.isToday && 'bg-yellow-500/40 text-text',
                !item.isToday && 'bg-subbackground'
              )}
            >
              <div className="flex flex-col items-center gap-3">
                <p className="text-xs font-bold">{item.day}</p>
                <div className="w-6 h-6 flex items-center justify-center rounded-full mt-1 mb-1">
                  {item.checked ? (
                    <img
                      src="/Coin/Nexcoin.png"
                      alt="coin"
                      className="size-6"
                    />
                  ) : (
                    <img
                      src="/Coin/Nexcoin.png"
                      alt="coin"
                      className="size-6"
                    />
                  )}
                </div>
                <p className="text-sm font-inter"> 1</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
