'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const MenuPadatSection = () => {
  const router = useRouter();
  const materialImages = [
    { src: '/sifat/button-desc-padat.png', alt: 'welcome', width: 200, height: 100, href: '/menu/material/properties/padat' },
    { src: '/sifat/button-wujud-padat.png', alt: 'welcome', width: 200, height: 100, href: '/menu/material/properties/cair' },
    { src: '/sifat/button-example-padat.png', alt: 'welcome', width: 200, height: 100, href: '/menu/material/properties/gas' },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.5,
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
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            type: 'spring',
            bounce: 0.5,
          }}
        >
          <Image src="/sifat/title-padat.png" alt="" width={300} height={200} />
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 4,
            type: 'spring',
            bounce: 0.5,
          }}
        >
          <Image src="/sifat/main.png" alt="" width={200} height={150} className="-mt-4" />
        </motion.div>
        <motion.div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4" variants={containerVariants} initial="hidden" animate="visible">
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

export default MenuPadatSection;
