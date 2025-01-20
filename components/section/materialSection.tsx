'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const MaterialSection = () => {
  const router = useRouter();
  const materialImages = [
    { src: '/icon/button-music.png', alt: 'welcome', width: 200, height: 100, href: '/menu/material/music' },
    { src: '/icon/button-sifat.png', alt: 'welcome', width: 200, height: 100, href: '/menu/material/characteristic' },
    { src: '/icon/button-wujud.png', alt: 'welcome', width: 200, height: 100, href: '/menu/material/shape' },
    { src: '/icon/button-video.png', alt: 'welcome', width: 200, height: 100, href: '/menu/material/video' },
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
      <div className="flex flex-col items-center justify-center space-y-8">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            type: 'spring',
            bounce: 0.5,
          }}
        >
          <Image src="/icon/title-materi.png" alt="" width={300} height={200} />
        </motion.div>
        <motion.div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4" variants={containerVariants} initial="hidden" animate="visible">
          {materialImages.map((img) => (
            <Link href={img.href} key={img.src}>
              <motion.div
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Image src={img.src || '/placeholder.svg'} alt={img.alt} width={img.width} height={img.height} />
              </motion.div>
            </Link>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            type: 'spring',
            stiffness: 100,
            damping: 10,
          }}
        >
          <motion.button
            onClick={() => router.push('/menu')}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
          >
            <Image src="/icon/home.png" alt="Home" width={70} height={60} />
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default MaterialSection;
