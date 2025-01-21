'use client';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState } from 'react';
import Image from 'next/image';
import { DraggableItem } from '@/components/draggable-baskets';
import { BasketComponent } from '@/components/baskets';
import { items as initialItems, baskets as initialBaskets } from '@/lib/constant';
import type { Basket } from '@/types';
import { motion } from 'framer-motion';
import { toast } from '@/hooks/use-toast';
import { ButtonNextPrev } from '@/components/button-next-prev';
import { useRouter } from 'next/navigation';

const BasketsSection = () => {
  const router = useRouter();
  const [items, setItems] = useState(initialItems);
  const [baskets, setBaskets] = useState<Basket[]>(initialBaskets.map((basket) => ({ ...basket, items: [] })));

  const handleDrop = (itemId: string, basketType: string) => {
    const item = items.find((i) => i.id === itemId);
    if (!item) return;

    if (item.type === basketType) {
      // Remove item from available items
      setItems(items.filter((i) => i.id !== itemId));

      // Add item to correct basket
      setBaskets(
        baskets.map((basket) => {
          if (basket.type === basketType) {
            return {
              ...basket,
              items: [...basket.items, item],
            };
          }
          return basket;
        })
      );

      toast({
        title: 'Benar!',
        description: `${item.name} adalah benda ${basketType.toLowerCase()}!`,
        variant: 'success',
      });
    } else {
      toast({
        title: 'Coba lagi!',
        description: `${item.name} bukan benda ${basketType.toLowerCase()}`,
        variant: 'destructive',
      });
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.2,
              type: 'spring',
              bounce: 0.5,
            }}
            className="text-3xl font-bold text-center text-green-600 mb-8"
          >
            Masukkan contoh wujud benda
          </motion.h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-12">
              {items.map((item) => (
                <DraggableItem key={item.id} item={item} />
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {baskets.map((basket) => (
                <BasketComponent key={basket.id} basket={basket} onDrop={handleDrop} />
              ))}
            </div>
          </div>

          <div className="fixed bottom-4 right-4">
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.1,
              }}
            >
              <Image src="/icon/zizah-0.png" alt="" width={120} height={80} className="mb-8 hidden md:block" />
            </motion.div>
          </div>
        </div>
        <ButtonNextPrev onClick={() => router.push('/menu/game/matchmaking')} />
      </>
    </DndProvider>
  );
};

export default BasketsSection;
