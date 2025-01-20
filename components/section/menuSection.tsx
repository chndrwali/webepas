'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const MenuSection = () => {
  const carVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        type: 'spring',
        damping: 20,
        stiffness: 200,
      },
    }),
  };

  const trainVariants = {
    hidden: { x: 1000 },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
        duration: 1.5,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center pt-14 mt-0 sm:pt-0 sm:mt-14">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          type: 'spring',
          bounce: 0.5,
        }}
      >
        <Image src="/icon/menu.png" alt="Logo" width={250} height={180} />
      </motion.div>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.1,
        }}
        className="fixed bottom-0 left-4"
      >
        <Image src="/icon/zizah-2.png" alt="" width={200} height={100} />
      </motion.div>
      <div className="grid grid-cols-2 gap-4 md:hidden">
        <motion.div custom={1} variants={carVariants} initial="hidden" animate="visible" whileHover={{ y: -10 }} className="flex items-center justify-center">
          <Link href="/menu/relevant">
            <div className="flex flex-col items-center">
              <Image src="/icon/logo.png" alt="{item.title}" width={150} height={50} />
              <p className="text-black text-base">Relevant</p>
            </div>
          </Link>
        </motion.div>
        <motion.div custom={2} variants={carVariants} initial="hidden" animate="visible" whileHover={{ y: -10 }} className="flex items-center justify-center">
          <Link href="/menu/material">
            <div className="flex flex-col items-center">
              <Image src="/icon/materi.png" alt="{item.title}" width={120} height={50} />
              <p className="text-black text-base mt-8">Materi</p>
            </div>
          </Link>
        </motion.div>
        <motion.div custom={3} variants={carVariants} initial="hidden" animate="visible" whileHover={{ y: -10 }} className="flex items-center justify-center">
          <Link href="/menu/game">
            <div className="flex flex-col items-center">
              <Image src="/icon/game-image.png" alt="{item.title}" width={100} height={50} />
              <Image src="/icon/game-text.png" alt="{item.title}" width={80} height={50} />
            </div>
          </Link>
        </motion.div>
        <motion.div custom={4} variants={carVariants} initial="hidden" animate="visible" whileHover={{ y: -10 }} className="flex items-center justify-center">
          <Link href="/menu/quiz">
            <div className="flex flex-col items-center">
              <Image src="/icon/quiz-image.png" alt="{item.title}" width={100} height={50} />
              <Image src="/icon/quiz-text.png" alt="{item.title}" width={80} height={50} />
            </div>
          </Link>
        </motion.div>
      </div>
      <div className="hidden md:flex md:fixed md:bottom-0 flex-col">
        <div className="flex ml-[250px]">
          <motion.div custom={1} variants={carVariants} initial="hidden" animate="visible" whileHover={{ y: -10 }} className="flex items-center justify-center -mb-[180px] z-10">
            <Link href="/menu/relevant">
              <div className="flex flex-col items-center">
                <Image src="/icon/logo.png" alt="{item.title}" width={150} height={50} className="mb-8" />
                <Image src="/icon/relevant-text.png" alt="{item.title}" width={80} height={50} className="fixed bottom-24" />
              </div>
            </Link>
          </motion.div>
          <motion.div custom={2} variants={carVariants} initial="hidden" animate="visible" whileHover={{ y: -10 }} className="flex items-center justify-center -mb-[180px] z-10">
            <Link href="/menu/material">
              <div className="flex flex-col items-center">
                <Image src="/icon/materi.png" alt="{item.title}" width={120} height={50} className="mb-8" />
                <Image src="/icon/materi-text.png" alt="{item.title}" width={80} height={50} className="fixed bottom-24" />
              </div>
            </Link>
          </motion.div>
          <motion.div custom={3} variants={carVariants} initial="hidden" animate="visible" whileHover={{ y: -10 }} className="flex items-center justify-center -mb-[180px] ml-[30px] z-10">
            <Link href="/menu/game">
              <div className="flex flex-col items-center">
                <Image src="/icon/game-image.png" alt="{item.title}" width={100} height={50} className="mb-8" />
                <Image src="/icon/game-text.png" alt="{item.title}" width={80} height={50} className="fixed bottom-16" />
              </div>
            </Link>
          </motion.div>
          <motion.div custom={4} variants={carVariants} initial="hidden" animate="visible" whileHover={{ y: -10 }} className="flex items-center justify-center -mb-[180px] ml-[30px] z-10">
            <Link href="/menu/quiz">
              <div className="flex flex-col items-center">
                <Image src="/icon/quiz-image.png" alt="{item.title}" width={100} height={50} className="mb-4" />
                <Image src="/icon/quiz-text.png" alt="{item.title}" width={80} height={50} className="fixed bottom-20" />
              </div>
            </Link>
          </motion.div>
        </div>
        <motion.div variants={trainVariants} initial="hidden" animate="visible" className="">
          <Image src="/icon/train.png" alt="train" width={800} height={500} />
        </motion.div>
      </div>
    </div>
  );
};

export default MenuSection;
