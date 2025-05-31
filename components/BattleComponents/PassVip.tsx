import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { ScrollArea } from '../ui/scroll-area';
import Image from 'next/image';

export function PassVip() {
  const vipItems = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    label: `Item ${i + 1}`,
    imgSrc: '/Pass.png'
  }));

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" px-2 py-1 bg-transparent hover:bg-transparent">
          <div className="flex items-center">
            <Image
              src="/Vip.svg"
              priority={true}
              alt="Passe vip"
              height={34}
              width={34}
            />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-dvh bg-background border-none text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center p-1">
            <Image
              src="/Vip.svg"
              priority={true}
              alt="Passe vip"
              height={34}
              width={34}
              className="size-6 mr-2 text-sm font-titan"
            />
            Passe Vip
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="w-full justify-center items-center h-[70vh] pt-2 border-none bg-transparent scroll-smooth">
          <div className="grid justify-center items-center gap-4 py-4">
            <div className="grid gap-4">
              {vipItems.map((item) => (
                <div
                  key={item.id}
                  className="flex w-full items-center justify-center gap-4"
                >
                  <span className="text-xl mr-2">{item.label}</span>
                  <div>
                    <Image
                      priority={true}
                      src={item.imgSrc}
                      alt={item.label}
                      height={24}
                      width={24}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="flex w-full justify-center items-center">
          <Button
            className="flex w-full border border-btn bg-subbackground hover:bg-subbackground/70 transition-colors"
            type="submit"
          >
            <span className="text-text font-titan">Desbloquear passe vip</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
