'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ButtonNextPrev } from '@/components/button-next-prev';
import Header from '@/components/header';
import { SafeUser } from '@/types';

const WujudPadatSection = ({ currentUser }: { currentUser: SafeUser | null }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const totalSteps = 8;
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      router.back();
    }
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <main
      className={`flex min-h-screen flex-1 flex-col 
    ${
      currentStep === 1
        ? 'bg-mobile_padat_1 md:bg-desktop_padat_1'
        : currentStep === 2
        ? 'bg-mobile_padat_2 md:bg-desktop_padat_2'
        : currentStep === 3
        ? 'bg-mobile_padat_3 md:bg-desktop_padat_3'
        : currentStep === 4
        ? 'bg-mobile md:bg-desktop'
        : currentStep === 5
        ? 'bg-mobile md:bg-desktop'
        : currentStep === 6
        ? 'bg-mobile md:bg-desktop'
        : currentStep === 7
        ? 'bg-mobile md:bg-desktop'
        : 'bg-mobile_padat_4 md:bg-desktop_padat_4'
    }
     bg-cover bg-center bg-no-repeat px-5 xs:px-10 md:px-16`}
    >
      <div className="mx-auto w-full max-w-7xl">
        <Header currentUser={currentUser} />
        <div className="mt-4 pb-20">
          <>
            <div className="flex flex-col items-center justify-center ">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  type: 'spring',
                  bounce: 0.5,
                }}
              >
                <Image src="/materi/padat/title-wujud.png" alt="Logo" width={300} height={180} />
              </motion.div>
              {currentStep === 1 && (
                <>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="mt-10"
                  >
                    <Image src="/materi/padat/desc-1.png" alt="" width={500} height={300} />
                  </motion.div>
                  <motion.div
                    className="hidden md:block fixed right-8"
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/materi/padat/pertanyaan.png" alt="" width={250} height={100} />
                  </motion.div>
                  <motion.div
                    className=" fixed bottom-0 right-8"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/materi/padat/zizah-2.png" alt="" width={280} height={100} />
                  </motion.div>
                </>
              )}
              {currentStep === 2 && (
                <>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="mt-10"
                  >
                    <Image src="/materi/padat/desc-2.png" alt="" width={500} height={300} />
                  </motion.div>
                  <motion.div
                    className=" fixed bottom-0 right-8"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/materi/padat/zizah-3.png" alt="" width={280} height={100} />
                  </motion.div>
                </>
              )}
              {currentStep === 3 && (
                <>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="mt-10"
                  >
                    <Image src="/materi/padat/desc-3.png" alt="" width={500} height={300} />
                  </motion.div>
                  <motion.div
                    className="hidden md:block fixed right-8"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/materi/padat/pertanyaan-1.png" alt="" width={200} height={100} />
                  </motion.div>
                  <div className="flex items-center justify-between">
                    <motion.div
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.1,
                      }}
                      className="fixed bottom-0 left-4 "
                    >
                      <Image src="/materi/padat/main-2.png" alt="" width={300} height={100} className="mb-8" />
                    </motion.div>
                    <motion.div
                      className=" fixed bottom-0 right-8"
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.7,
                      }}
                    >
                      <Image src="/materi/padat/zizah-4.png" alt="" width={300} height={100} />
                    </motion.div>
                  </div>
                </>
              )}
            </div>
            <ButtonNextPrev onClick={handleNext} />
          </>
        </div>
      </div>
    </main>
  );
};

export default WujudPadatSection;
