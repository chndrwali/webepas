'use client';

import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ButtonNextPrev } from '@/components/button-next-prev';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MusicSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const router = useRouter();

  const totalSteps = 3;

  useEffect(() => {
    audioRef.current = new Audio('/music/bermuara.mp3');

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      router.push('/menu');
    }
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {currentStep === 1 && (
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
              <Image src="/icon/title-music-1.png" alt="Logo" width={250} height={180} />
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center text-xs space-y-4 bg-white/40 p-4 w-[500px]">
                <motion.div className="flex flex-col space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
                  <div className="space-y-1">
                    <p>Macam wujud benda itu ada tiga</p>
                    <p>yang pertama itu ada benda padat</p>
                    <p>sifatnya padat bentuknya tetap</p>
                    <p>ukuran tetap di mana pun tempatnya</p>
                    <p>Contohnya buku, meja dan lampu</p>
                    <p>kursi, lemari, kulkas dan juga tas</p>
                  </div>

                  <div className="space-y-1">
                    <p>yang kedua cair ukurannya tetap</p>
                    <p>bentuknya berubah sesuaikan wadah</p>
                    <p>contohnya syirup, air dan susu (2x)</p>
                    <p>oli, bensin, minyak goreng dan madu (2x)</p>
                  </div>

                  <div className="space-y-1">
                    <p>yang ketiga itu adalah benda gas</p>
                    <p>dia tak terlihat ukuran tak tetap</p>
                    <p>bentuk berubah sesuai wadah (2x)</p>
                    <p>contohnya uap, udara dan asap (2x)</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-center justify-center gap-4 mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                  <motion.button onClick={togglePlay} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="transition-transform">
                    <Image src={isPlaying ? '/icon/sound-off.png' : '/icon/play.png'} alt={isPlaying ? 'Pause' : 'Play'} width={60} height={50} />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="fixed top-0 right-4 flex items-center gap-4">
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.1,
              }}
            >
              <Image src="/icon/note-music.png" alt="" width={250} height={100} className="mb-8" />
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
                <Image src="/icon/zizah-music-1.png" alt="" width={250} height={100} className="mb-8" />
              </motion.div>
            </div>
            <motion.div
              className=" fixed bottom-0 right-8"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.7,
              }}
            >
              <Image src="/icon/murid-music.png" alt="" width={240} height={100} />
            </motion.div>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <div>dua</div>
        </>
      )}

      {currentStep === 2 && <ButtonNextPrev isLeft onClick={handlePrev} />}
      {currentStep === 2 ? <></> : <ButtonNextPrev onClick={handleNext} />}
    </>
  );
};

export default MusicSection;
