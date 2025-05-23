'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ButtonNextPrev } from '@/components/button-next-prev';
import Header from '@/components/header';

const SifatCairSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const totalSteps = 9;
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
        ? 'bg-mobile_cair_1 md:bg-desktop_cair_1'
        : currentStep === 2
        ? 'bg-mobile md:bg-desktop'
        : currentStep === 3
        ? 'bg-mobile_cair_2 md:bg-desktop_cair_2'
        : currentStep === 4
        ? 'bg-mobile md:bg-desktop'
        : currentStep === 5
        ? 'bg-mobile_cair_3 md:bg-desktop_cair_3'
        : currentStep === 6
        ? 'bg-mobile_cair_4 md:bg-desktop_cair_4'
        : currentStep === 7
        ? 'bg-mobile_cair_5 md:bg-desktop_cair_5'
        : currentStep === 8
        ? 'bg-mobile_cair_4 md:bg-desktop_cair_6'
        : 'bg-mobile md:bg-desktop'
    }
     bg-cover bg-center bg-no-repeat px-5 xs:px-10 md:px-16`}
    >
      <div className="mx-auto w-full max-w-7xl">
        <Header />
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
                <Image src="/materi/cair/title-cair.png" alt="Logo" width={300} height={180} />
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
                    className="hidden md:block fixed left-8"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/materi/cair/pertanyaan-1.png" alt="" width={250} height={100} />
                  </motion.div>
                  <motion.div
                    className=" fixed bottom-0 left-16"
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/materi/cair/zizah-2.png" alt="" width={280} height={100} />
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
                    <Image src="/materi/cair/desc-2.png" alt="" width={500} height={300} />
                  </motion.div>
                  <motion.div
                    className="hidden md:block fixed left-16"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/materi/cair/pertanyaan-2.png" alt="" width={250} height={100} />
                  </motion.div>
                  <motion.div
                    className=" fixed bottom-0 z-10 left-16"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/materi/cair/zizah-3.png" alt="" width={280} height={100} />
                  </motion.div>
                  <motion.div
                    className=" fixed bottom-0 right-16"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/materi/cair/gelas.png" alt="" width={280} height={100} />
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
                    <Image src="/materi/cair/desc-3.png" alt="" width={500} height={300} />
                  </motion.div>
                  <motion.div
                    className=" fixed bottom-0 z-10 left-16"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/materi/cair/zizah-4.png" alt="" width={280} height={100} />
                  </motion.div>
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
                    <Image src="/materi/cair/desc-4.png" alt="" width={500} height={300} />
                  </motion.div>
                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.1,
                    }}
                    className="fixed left-0 "
                  >
                    <Image src="/materi/cair/pertanyaan-3.png" alt="" width={200} height={100} className="hidden md:block" />
                  </motion.div>
                  <div className="flex items-center justify-between">
                    <motion.div
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.1,
                      }}
                      className="fixed bottom-0 left-0 z-10 "
                    >
                      <Image src="/materi/cair/zizah-5.png" alt="" width={300} height={100} className="" />
                    </motion.div>

                    <motion.div
                      className="fixed bottom-0 right-0"
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.7,
                      }}
                    >
                      <Image src="/materi/cair/main-4.png" alt="" width={300} height={100} />
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
                    <Image src="/materi/cair/desc-5.png" alt="" width={500} height={300} />
                  </motion.div>
                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.1,
                    }}
                    className="fixed top-[100px] left-4 "
                  >
                    <Image src="/materi/cair/pertanyaan-4.png" alt="" width={200} height={100} className="hidden md:block" />
                  </motion.div>

                  <div className="flex items-center justify-between">
                    <motion.div
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.1,
                      }}
                      className="fixed bottom-0 left-16 "
                    >
                      <Image src="/materi/cair/zizah-6.png" alt="" width={300} height={100} className="hidden md:block mb-8" />
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
                    <Image src="/materi/cair/desc-6.png" alt="" width={500} height={300} />
                  </motion.div>
                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.1,
                    }}
                    className="hidden md:block fixed left-4 "
                  >
                    <Image src="/materi/cair/pertanyaan-5.png" alt="" width={200} height={100} className="hidden md:block mb-8" />
                  </motion.div>
                  <div className="flex items-center justify-between">
                    <motion.div
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.1,
                      }}
                      className="fixed bottom-0 left-16 "
                    >
                      <Image src="/materi/cair/zizah-7.png" alt="" width={300} height={100} className="mb-8" />
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
                    <Image src="/materi/cair/desc-7.png" alt="" width={500} height={300} />
                  </motion.div>
                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.1,
                    }}
                    className="hidden md:block fixed left-4 "
                  >
                    <Image src="/materi/cair/pertanyaan-6.png" alt="" width={200} height={100} className="hidden md:block mb-8" />
                  </motion.div>
                  <div className="flex items-center justify-between">
                    <motion.div
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.1,
                      }}
                      className="fixed bottom-0 left-16 "
                    >
                      <Image src="/materi/cair/zizah-8.png" alt="" width={300} height={100} className="mb-8" />
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
                    <Image src="/materi/cair/desc-8.png" alt="" width={500} height={300} />
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
                      <Image src="/materi/cair/zizah-9.png" alt="" width={300} height={100} className="mb-8" />
                    </motion.div>
                    <motion.div
                      className="fixed bottom-0 right-16"
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.7,
                      }}
                    >
                      <Image src="/materi/cair/right.png" alt="" width={200} height={100} />
                    </motion.div>
                  </div>
                </>
              )}
              {currentStep === 9 && (
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
                    <Image src="/materi/cair/desc-9.png" alt="" width={500} height={300} />
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
                      <Image src="/materi/cair/zizah-10.png" alt="" width={300} height={100} className="mb-8" />
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
                      <Image src="/materi/cair/right-2.png" alt="" width={300} height={100} />
                    </motion.div>
                  </div>
                </>
              )}
            </div>
            {currentStep === 9 ? (
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

export default SifatCairSection;
