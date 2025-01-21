'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ButtonNextPrev } from '@/components/button-next-prev';
import { useRouter } from 'next/navigation';

const DescPadatSection = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-14 md:pt-0">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            type: 'spring',
            bounce: 0.5,
          }}
        >
          <Image src="/materi/padat/title-desc.png" alt="" width={300} height={200} />
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            type: 'spring',
            bounce: 0.5,
          }}
        >
          <Image src="/materi/padat/main-1.png" alt="" width={120} height={80} />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          <Image src="/materi/padat/desc.png" alt="" width={400} height={300} />
        </motion.div>
      </div>
      <div className="flex items-center justify-between">
        <div className="fixed bottom-0 flex items-center gap-4">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.1,
            }}
          >
            <Image src="/materi/padat/zizah-1.png" alt="" width={200} height={100} className="mb-0 md:mb-8" />
          </motion.div>
        </div>
        <motion.div
          className=" fixed bottom-0 right-0 md:right-16 md:z-10 "
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.7,
          }}
        >
          <Image src="/materi/padat/main.png" alt="" width={240} height={100} />
        </motion.div>
        <motion.div
          className="hidden md:block fixed bottom-0 right-0 "
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.7,
          }}
        >
          <Image src="/materi/padat/pohon.png" alt="" width={300} height={100} />
        </motion.div>
      </div>
      <ButtonNextPrev isLeft onClick={() => router.back()} />
    </>
  );
};

export default DescPadatSection;
