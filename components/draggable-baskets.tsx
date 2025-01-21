'use client';

import { useDrag } from 'react-dnd';
import Image from 'next/image';
import type { Item } from '../types';
import type { DragSourceMonitor } from 'react-dnd';

interface DraggableItemProps {
  item: Item;
  isInBasket?: boolean;
}

export function DraggableItem({ item, isInBasket }: DraggableItemProps) {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'ITEM',
    item: { id: item.id, type: item.type },
    canDrag: !isInBasket,
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={dragRef as any} className={`transition-transform ${isDragging ? 'opacity-50 scale-105' : 'opacity-100'} ${isInBasket ? 'cursor-default' : 'cursor-move'}`}>
      <Image src={item.imageUrl || '/placeholder.svg'} alt={item.name} width={40} height={40} className="select-none" />
    </div>
  );
}
