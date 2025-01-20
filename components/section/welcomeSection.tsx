'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ButtonNextPrev } from '@/components/button-next-prev';

const WelcomeSection = () => {
  const router = useRouter();
  const welcomeImages = [
    { src: '/icon/welcome-2.png', alt: 'welcome', width: 200, height: 100 },
    { src: '/icon/welcome-3.png', alt: 'welcome', width: 200, height: 100 },
    { src: '/icon/welcome-4.png', alt: 'welcome', width: 200, height: 100 },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.5, // Start after logo animation
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-14 mt-0 sm:pt-0 sm:-mt-10 ">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            type: 'spring',
            bounce: 0.5,
          }}
        >
          <Image src="/icon/logo.png" alt="Logo" width={180} height={180} />
        </motion.div>
        <motion.div className="flex flex-col md:flex-row items-center gap-4" variants={containerVariants} initial="hidden" animate="visible">
          {welcomeImages.map((img) => (
            <motion.div
              key={img.src}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <Image src={img.src || '/placeholder.svg'} alt={img.alt} width={img.width} height={img.height} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex items-center justify-between">
        <div className="fixed bottom-0 flex items-center">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.1,
            }}
          >
            <Image src="/icon/school.png" alt="" width={300} height={100} className="mb-8" />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.4,
            }}
          >
            <Image src="/icon/welcome-zizah.png" alt="" width={350} height={100} className="-ml-10 mt-10" />
          </motion.div>
        </div>
        <motion.div
          className="hidden md:block fixed bottom-0 right-8"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.7,
          }}
        >
          <Image src="/icon/teacher.png" alt="" width={300} height={100} />
        </motion.div>
      </div>

      <ButtonNextPrev onClick={() => router.push('doa')} />
    </>
  );
};

export default WelcomeSection;
