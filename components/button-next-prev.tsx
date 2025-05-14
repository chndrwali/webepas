'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  isLeft?: boolean;
  onClick: () => void;
}

export const ButtonNextPrev = ({ onClick, isLeft }: Props) => {
  return (
    <motion.div
      className={`fixed bottom-4 z-10 ${isLeft ? 'left-4' : 'right-4'}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      }}
    >
      <motion.button
        onClick={onClick}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.1 },
        }}
      >
        <Image src={isLeft ? '/icon/button-prev.png' : '/icon/button-next.png'} alt={isLeft ? 'Previous' : 'Next'} width={60} height={60} />
      </motion.button>
    </motion.div>
  );
};
