import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '../ui/scroll-area';

export function PassVip() {
  const vipItems = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    label: `Item ${i + 1}`,
    imgSrc: '/Vip.png'
  }));

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-trasnparent hover:bg-transparent border border-green-600">
          <div className="flex items-center">
            <img src="/Vip.png" alt="Passe vip" className="size-5 mr-2" />
            <span className="text-sm font-medium">Passe vip</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-dvh bg-[#0e0e0e] border-none text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center p-1">
            <img src="/Vip.png" alt="Passe vip" className="size-6 mr-2" />
            Passe Vip
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="w-full justify-center items-center h-[70vh] pt-2 border-none bg-transparent scroll-smooth">
          <div className="grid justify-center items-center gap-4 py-4">
            <div className="grid gap-4">
              {vipItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-4 items-center gap-4"
                >
                  <Label className="text-right">{item.label}</Label>
                  <div>
                    <img
                      src={item.imgSrc}
                      alt={item.label}
                      className="size-5 mr-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="flex w-full justify-center items-center">
          <Button
            className="flex w-full bg-transparent hover:bg-green-950/20 transition-colors border border-green-600"
            type="submit"
          >
            Comprar passe vip
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
