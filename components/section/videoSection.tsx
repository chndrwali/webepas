'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ButtonNextPrev } from '@/components/button-next-prev';
import Image from 'next/image';

const VideoSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const totalSteps = 2;
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      router.push('/menu/material');
    }
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  // YouTube video ID
  const videoIds = ['SA7yLMlfYVM', 'IxZkp2cgIu8']; // Array of video IDs

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
              <Image src="/icon/title-video-1.png" alt="Logo" width={250} height={180} />
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="w-full max-w-3xl px-4 mt-4"
            >
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src={`https://www.youtube.com/embed/${videoIds[0]}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-between">
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.1,
              }}
              className="fixed bottom-0 "
            >
              <Image src="/icon/zizah-video-1.png" alt="" width={200} height={100} className="mb-8" />
            </motion.div>

            <motion.div
              className="fixed bottom-0 right-8"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.7,
              }}
            >
              <Image src="/icon/student-baloon.png" alt="" width={240} height={100} />
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
              <Image src="/icon/title-video-2.png" alt="Logo" width={250} height={180} />
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="w-full max-w-3xl px-4 mt-4"
            >
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src={`https://www.youtube.com/embed/${videoIds[1]}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-between">
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.1,
              }}
              className="fixed bottom-0 "
            >
              <Image src="/icon/neng.png" alt="" width={200} height={100} className="mb-8" />
            </motion.div>

            <motion.div
              className="fixed bottom-0 right-8"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.7,
              }}
            >
              <Image src="/icon/zizah-video-2.png" alt="" width={240} height={100} />
            </motion.div>
          </div>
        </>
      )}

      {currentStep === 2 ? (
        <>
          <ButtonNextPrev onClick={handlePrev} isLeft />
          <motion.button
            className="fixed bottom-4 z-10 right-4"
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
        </>
      ) : (
        <ButtonNextPrev onClick={handleNext} />
      )}
    </>
  );
};

export default VideoSection;
