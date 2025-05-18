'use client';

import { Status } from './SheetBar/Status';
import { Historyc } from './SheetBar/Historyc';
import { Order } from './SheetBar/Order';

export default function BottomTrading() {
  return (
    <div className="flex w-full justify-around fixed z-40 bottom-0 bg-btn rounded-t-xl touch-pan-x touch-pan-y  p-2">
      <Status />
      <Order />
      <Historyc />
    </div>
  );
}
