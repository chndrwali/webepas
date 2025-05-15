'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAudio } from '@/hooks/use-audio';

const HomeSection = () => {
  const router = useRouter();
  const { play } = useAudio();

  const handleLogin = () => {
    // Play music when login button is clicked
    play();
    router.push('/welcome');
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-28 sm:pt-0">
        <motion.h1
          className="text-5xl sm:text-6xl font-bold text-lime-400 mb-4"
          style={{ textShadow: '2px 2px 4px #00008B' }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            type: 'spring',
            bounce: 0.5,
          }}
        >
          WEBEPAS
        </motion.h1>
        <motion.p
          className="bg-lime-400 px-2 rounded-full text-lg sm:text-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          Untuk Siswa Kelas IV Sekolah Dasar
        </motion.p>
        <motion.button
          className="mt-4"
          onClick={handleLogin}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        >
          <Image src="/icon/button-login.png" alt="button" width={150} height={100} />
        </motion.button>
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
            <Image src="/icon/cta-login.png" alt="" width={300} height={100} className="-ml-10 mt-10" />
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
          <Image src="/icon/murid.png" alt="" width={300} height={100} />
        </motion.div>
      </div>
    </>
  );
};

export default HomeSection;
