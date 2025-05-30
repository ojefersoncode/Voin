import { Card } from '../ui/card';
import { ChevronRight, Tickets } from 'lucide-react';
import LoginDiario from './LiginDIario';
import { Footer } from '../landing/Footer';

export default function HomeBonus() {
  return (
    <div className="w-full justify-center items-center bg-background touch-pan-x touch-pan-y">
      <div className="w-full px-4 pb-6">
        <LoginDiario />
      </div>

      <Card className="flex mx-4 items-center justify-between bg-subbackground">
        <div className="flex justify-center items-center px-4">
          <Tickets className="size-10 text-btn" />
        </div>

        <div className="p-4">
          <div className="flex items-center">
            <span className="font-inter text-xs">Pontos</span>
          </div>
          <div className="text-extrabold text-xl">7</div>

          <div className="flex items-center text-btn space-x-1 pt-2">
            <p className="text-xs font-bold">Loja de recompensa</p>

            <ChevronRight className="size-4" />
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center">
            <span className="font-inter text-xs">Tarefas</span>
          </div>
          <div className="text-extrabold text-xl">0</div>

          <div className="flex items-center text-btn space-x-1 pt-2">
            <p className="text-xs font-bold">Ver tarefas</p>

            <ChevronRight className="size-4" />
          </div>
        </div>
      </Card>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
