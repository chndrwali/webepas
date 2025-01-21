'use client';

import { useDrop } from 'react-dnd';
import { type Basket } from '../types';
import { DraggableItem } from '@/components/draggable-baskets';
import type { DropTargetMonitor } from 'react-dnd';
import Image from 'next/image';

interface BasketProps {
  basket: Basket;
  onDrop: (itemId: string, basketType: string) => void;
}

export function BasketComponent({ basket, onDrop }: BasketProps) {
  const [{ isOver }, dropRef] = useDrop({
    accept: 'ITEM',
    drop: (item: { id: string; type: string }) => {
      onDrop(item.id, basket.type);
    },
    collect: (monitor: DropTargetMonitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={dropRef as any} className={`relative flex flex-col items-center ${isOver ? 'scale-105' : ''} transition-transform`}>
      <div className="w-48 h-32 ">
        <div className="h-full flex flex-col">
          <div className="flex-1 p-2 flex flex-wrap justify-center items-end gap-2">
            {basket.items.map((item) => (
              <DraggableItem key={item.id} item={item} isInBasket={true} />
            ))}
          </div>
          <Image src="/basket/keranjang.png" alt="basket" width={200} height={100} className="object-contain" />
          <div className="h-1/2 bg-[#5C3317] flex items-center justify-center">
            <span className="text-white font-bold text-xl">{basket.label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
