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
    if (currentStep === 1) {
      router.back();
    } else {
      setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    }
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
                    className=" fixed bottom-[300px] right-8"
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
                      <Image src="/materi/padat/main-2.png" alt="" width={300} height={100} className="hidden md:block mb-8" />
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
                      <Image src="/materi/padat/zizah-4.png" alt="" width={300} height={100} />
                    </motion.div>
                  </div>
                </>
              )}
              {currentStep === 4 && (
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
                    <Image src="/materi/padat/desc-4.png" alt="" width={500} height={300} />
                  </motion.div>
                  <div className="flex items-center justify-between">
                    <motion.div
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.1,
                      }}
                      className="fixed bottom-0 left-0 "
                    >
                      <Image src="/materi/padat/pohon-2.png" alt="" width={300} height={100} className="" />
                    </motion.div>
                    <motion.div
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.1,
                      }}
                      className="fixed bottom-0 left-[200px] "
                    >
                      <Image src="/materi/padat/kursi.png" alt="" width={100} height={100} className="" />
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
                      <Image src="/materi/padat/zizah-5.png" alt="" width={300} height={100} />
                    </motion.div>
                  </div>
                </>
              )}
              {currentStep === 5 && (
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
                    <Image src="/materi/padat/desc-5.png" alt="" width={500} height={300} />
                  </motion.div>
                  <div className="flex items-center justify-between">
                    <motion.div
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.1,
                      }}
                      className="fixed bottom-0 left-0 "
                    >
                      <Image src="/materi/padat/pohon-3.png" alt="" width={300} height={100} className="hidden md:block mb-8" />
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
                      <Image src="/materi/padat/zizah-6.png" alt="" width={300} height={100} />
                    </motion.div>
                  </div>
                </>
              )}
              {currentStep === 6 && (
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
                    <Image src="/materi/padat/desc-6.png" alt="" width={500} height={300} />
                  </motion.div>
                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.1,
                    }}
                    className="hidden md:block fixed left-0 "
                  >
                    <Image src="/materi/padat/matahari.png" alt="" width={300} height={100} className="hidden md:block mb-8" />
                  </motion.div>
                  <div className="flex items-center justify-between">
                    <motion.div
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.1,
                      }}
                      className="fixed bottom-0 left-0 "
                    >
                      <Image src="/materi/padat/es.png" alt="" width={300} height={100} className="mb-8" />
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
                      <Image src="/materi/padat/zizah-7.png" alt="" width={300} height={100} />
                    </motion.div>
                  </div>
                </>
              )}
              {currentStep === 7 && (
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
                    <Image src="/materi/padat/desc-7.png" alt="" width={500} height={300} />
                  </motion.div>
                  <div className="flex items-center justify-between">
                    <motion.div
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.1,
                      }}
                      className="fixed bottom-0 left-0 "
                    >
                      <Image src="/materi/padat/left.png" alt="" width={300} height={100} className="mb-8" />
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
                      <Image src="/materi/padat/zizah-8.png" alt="" width={300} height={100} />
                    </motion.div>
                  </div>
                </>
              )}
              {currentStep === 8 && (
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
                    <Image src="/materi/padat/desc-8.png" alt="" width={500} height={300} />
                  </motion.div>
                  <motion.div
                    className={`-mt-6 z-10`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 100,
                      damping: 10,
                    }}
                  >
                    <motion.button
                      onClick={handleNext}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{
                        scale: 0.95,
                        transition: { duration: 0.1 },
                      }}
                    >
                      <Image src="/icon/home.png" alt="Home" width={70} height={50} />
                    </motion.button>
                  </motion.div>
                  <div className="flex items-center justify-between">
                    <motion.div
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.1,
                      }}
                      className="fixed bottom-0 left-0 "
                    >
                      <Image src="/materi/padat/main-3.png" alt="" width={300} height={100} className="mb-8" />
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
                      <Image src="/materi/padat/zizah-9.png" alt="" width={300} height={100} />
                    </motion.div>
                  </div>
                </>
              )}
            </div>
            {currentStep === 8 ? (
              <ButtonNextPrev onClick={handlePrev} isLeft />
            ) : (
              <>
                <ButtonNextPrev onClick={handlePrev} isLeft />
                <ButtonNextPrev onClick={handleNext} />
              </>
            )}
          </>
        </div>
      </div>
    </main>
  );
};

export default WujudPadatSection;
