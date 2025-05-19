'use client';

import { Status } from './SheetBar/Status';
import { Historyc } from './SheetBar/Historyc';
import { Order } from './SheetBar/Order';

export default function BottomTrading() {
  return (
    <div className="flex w-full fixed z-40 bottom-2 px-2">
      <div className="flex w-full justify-around  bg-btn rounded-xl touch-pan-x touch-pan-y p-2">
        <Status />
        <Order />
        <Historyc />
      </div>
    </div>
  );
}
