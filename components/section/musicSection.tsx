'use client';

import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ButtonNextPrev } from '@/components/button-next-prev';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MusicSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeAudio, setActiveAudio] = useState<number | null>(null);

  // Create refs for audio elements
  const audio1Ref = useRef<HTMLAudioElement | null>(null);
  const audio2Ref = useRef<HTMLAudioElement | null>(null);

  const router = useRouter();
  const totalSteps = 2;

  useEffect(() => {
    // Create new audio elements
    audio1Ref.current = new Audio();
    audio2Ref.current = new Audio();

    // TODO: Change Music
    if (audio1Ref.current) audio1Ref.current.src = '/music/bermuara.mp3';
    if (audio2Ref.current) audio2Ref.current.src = '/music/juicy.mp3';

    // Preload the audio
    audio1Ref.current?.load();
    audio2Ref.current?.load();

    return () => {
      // Cleanup
      if (audio1Ref.current) {
        audio1Ref.current.pause();
        audio1Ref.current = null;
      }
      if (audio2Ref.current) {
        audio2Ref.current.pause();
        audio2Ref.current = null;
      }
    };
  }, []);

  const stopAllAudio = () => {
    [audio1Ref, audio2Ref].forEach((ref) => {
      if (ref.current) {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
    });
    setActiveAudio(null);
  };

  const handleNext = () => {
    stopAllAudio();
    if (currentStep < totalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      router.push('/menu/material');
    }
  };

  const handlePrev = () => {
    stopAllAudio();
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const togglePlay = async (audioNumber: 1 | 2) => {
    const audioRef = audioNumber === 1 ? audio1Ref : audio2Ref;
    const currentAudio = audioRef.current;

    if (!currentAudio) return;

    try {
      if (activeAudio === audioNumber) {
        // Stop current audio
        currentAudio.pause();
        currentAudio.currentTime = 0;
        setActiveAudio(null);
      } else {
        // Stop any playing audio first
        stopAllAudio();
        // Play new audio
        await currentAudio.play();
        setActiveAudio(audioNumber);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  const renderAudioControls = (audioNumber: 1 | 2) => (
    <motion.div className="flex items-center justify-between w-full px-8 mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
      <motion.button
        onClick={() => {
          if (activeAudio !== audioNumber) togglePlay(audioNumber);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`transition-transform ${activeAudio !== audioNumber ? 'opacity-100' : 'opacity-50'}`}
      >
        <Image src="/icon/play.png" alt="Play" width={50} height={50} />
      </motion.button>
      <motion.button
        onClick={() => {
          if (activeAudio === audioNumber) togglePlay(audioNumber);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`transition-transform ${activeAudio === audioNumber ? 'opacity-100' : 'opacity-50'}`}
      >
        <Image src="/icon/sound-off.png" alt="Stop" width={50} height={50} />
      </motion.button>
    </motion.div>
  );

  return (
    <>
      {/* TODO: Change music*/}
      <audio id="audio1" ref={audio1Ref} preload="auto">
        <source src="/music/bermuara.mp3" type="audio/mpeg" />
      </audio>
      <audio id="audio2" ref={audio2Ref} preload="auto">
        <source src="/music/juicy.mp3" type="audio/mpeg" />
      </audio>

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
              <div className="flex flex-col items-center text-center text-xs space-y-4 bg-white/40 p-4 md:w-[500px]">
                <motion.div className="flex flex-col space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
                  {/* First song lyrics */}
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

                {renderAudioControls(1)}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.1,
            }}
            className="hidden md:block fixed top-0 right-4"
          >
            <Image src="/icon/note-music.png" alt="" width={250} height={100} className="mb-8" />
          </motion.div>

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
                <Image src="/icon/zizah-music-1.png" alt="" width={250} height={100} className="hidden md:block mb-8" />
                <Image src="/icon/zizah-music-1.png" alt="" width={180} height={100} className="block md:hidden" />
              </motion.div>
            </div>
            <motion.div
              className="fixed bottom-0 right-8"
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
              <Image src="/icon/title-music-2.png" alt="Logo" width={250} height={180} />
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
              <div className="flex flex-col items-center text-center text-xs space-y-4 bg-white/40 p-4 md:w-[500px]">
                <motion.div className="flex flex-col space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
                  {/* Second song lyrics */}
                  <div className="space-y-1">
                    <p>Ayo kawan-kawan, belajar bersama</p>
                    <p>Memahami tentang prubahan wujud benda</p>
                    <p>Sambil bernyanyi bersama-sama</p>
                    <p>Ingatlah agar tidak sampai lupa</p>
                  </div>

                  <div className="space-y-1">
                    <p>Padat jadi cair disebut MENCAIR</p>
                    <p>Cair jadi padat disebut MEMBEKU</p>
                    <p>Cair jadi gas disebut MENGUAP</p>
                    <p>Gas jadi cair disebut MENGEMBUN</p>
                    <p>Padat jadi gas disebut MENYUBLIM</p>
                    <p>Gas jadi padat disebut MENGKRISTAL</p>
                  </div>
                </motion.div>

                {renderAudioControls(2)}
              </div>
            </motion.div>
            <motion.button
              className="flex items-center justify-center -mt-4 z-10"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
              onClick={handleNext}
            >
              <Image src="/icon/home.png" alt="" width={60} height={50} />
            </motion.button>
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
                <Image src="/icon/zizah-music-2.png" alt="" width={250} height={100} className="mb-8" />
              </motion.div>
            </div>
            <motion.div
              className="fixed bottom-0 right-8"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.7,
              }}
            >
              <Image src="/icon/murid-music-2.png" alt="" width={240} height={100} />
            </motion.div>
          </div>
        </>
      )}

      {currentStep === 2 ? <></> : <ButtonNextPrev onClick={handleNext} />}
    </>
  );
};

export default MusicSection;
