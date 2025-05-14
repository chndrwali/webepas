'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ButtonNextPrev } from '@/components/button-next-prev';
import Header from '@/components/header';
import { SafeUser } from '@/types';

const ExamplePerubahanSection = ({ currentUser }: { currentUser: SafeUser | null }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const totalSteps = 6;
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
        ? 'bg-mobile_padat_4 md:bg-desktop_padat_4'
        : currentStep === 2
        ? 'bg-mobile md:bg-desktop'
        : currentStep === 3
        ? 'bg-mobile_example_padat md:bg-desktop_example_padat'
        : currentStep === 4
        ? 'bg-mobile_ md:bg-desktop'
        : currentStep === 5
        ? 'bg-mobile_padat_4 md:bg-desktop_padat_4'
        : 'bg-mobile_last md:bg-desktop_last'
    }
     bg-cover bg-center bg-no-repeat px-5 xs:px-10 md:px-16`}
    >
      <div className="mx-auto w-full max-w-7xl">
        <Header currentUser={currentUser} />
        <div className="mt-4 pb-20">
          <>
            <div className="flex flex-col items-center justify-center ">
              {currentStep === 1 && (
                <>
                  <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      type: 'spring',
                      bounce: 0.5,
                    }}
                    className="flex flex-col text-center text-green-600 text-2xl font-black"
                  >
                    <span>Contoh perubahan wujud benda</span>
                    <span>(membeku)</span>
                  </motion.h1>
                  <div className="flex flex-col md:flex-row mt-10">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                      }}
                    >
                      <Image src="/perubahan/contoh/left.png" alt="" width={500} height={300} />
                    </motion.div>

                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                      }}
                    >
                      <Image src="/perubahan/contoh/desc.png" alt="" width={500} height={300} />
                    </motion.div>
                  </div>
                </>
              )}
              {currentStep === 2 && (
                <>
                  <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      type: 'spring',
                      bounce: 0.5,
                    }}
                    className="flex flex-col text-center text-green-600 text-2xl font-black"
                  >
                    <span>Contoh perubahan wujud benda</span>
                    <span>(mencair)</span>
                  </motion.h1>
                  <div className="flex flex-col md:flex-row mt-20">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                      }}
                    >
                      <Image src="/perubahan/contoh/desc-1.png" alt="" width={500} height={300} />
                    </motion.div>

                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                      }}
                    >
                      <Image src="/perubahan/contoh/right.png" alt="" width={500} height={300} />
                    </motion.div>
                  </div>
                </>
              )}
              {currentStep === 3 && (
                <>
                  <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      type: 'spring',
                      bounce: 0.5,
                    }}
                    className="flex flex-col text-center text-green-600 text-2xl font-black"
                  >
                    <span>Contoh perubahan wujud benda</span>
                    <span>(menguap)</span>
                  </motion.h1>
                  <div className="flex flex-col md:flex-row mt-20">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                      }}
                    >
                      <Image src="/perubahan/contoh/desc-2.png" alt="" width={500} height={300} />
                    </motion.div>

                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                      }}
                    >
                      <Image src="/perubahan/contoh/right-1.png" alt="" width={300} height={300} />
                    </motion.div>
                  </div>
                </>
              )}
              {currentStep === 4 && (
                <>
                  <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      type: 'spring',
                      bounce: 0.5,
                    }}
                    className="flex flex-col text-center text-green-600 text-2xl font-black"
                  >
                    <span>Contoh perubahan wujud benda</span>
                    <span>(mengembun)</span>
                  </motion.h1>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                    }}
                  >
                    <Image src="/perubahan/contoh/desc-3.png" alt="" width={500} height={300} />
                  </motion.div>
                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.1,
                    }}
                    className="hidden md:block fixed bottom-0 left-0"
                  >
                    <Image src="/perubahan/contoh/pohon.png" alt="" width={300} height={100} className="mb-0 md:mb-8" />
                  </motion.div>
                  <motion.div
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.1,
                    }}
                    className="hidden md:block fixed  right-0"
                  >
                    <Image src="/perubahan/contoh/top-right.png" alt="" width={250} height={100} className="mb-0 md:mb-8" />
                  </motion.div>
                  <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.1,
                    }}
                    className="fixed bottom-0 right-0"
                  >
                    <Image src="/perubahan/contoh/right-3.png" alt="" width={250} height={100} className="mb-0 md:mb-8" />
                  </motion.div>
                </>
              )}
              {currentStep === 5 && (
                <>
                  <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      type: 'spring',
                      bounce: 0.5,
                    }}
                    className="flex flex-col text-center text-green-600 text-2xl font-black"
                  >
                    <span>Contoh perubahan wujud benda</span>
                    <span>(menyublim)</span>
                  </motion.h1>
                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="hidden md:block fixed bottom-0 left-0"
                  >
                    <Image src="/perubahan/contoh/left-3.png" alt="" width={500} height={300} />
                  </motion.div>
                  <div className="flex flex-col md:flex-row mt-20">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                      }}
                      className="block md:hidden"
                    >
                      <Image src="/perubahan/contoh/left-3.png" alt="" width={500} height={300} />
                    </motion.div>
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                      }}
                    >
                      <Image src="/perubahan/contoh/desc-4.png" alt="" width={400} height={300} />
                    </motion.div>
                  </div>
                </>
              )}
              {currentStep === 6 && (
                <>
                  <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      type: 'spring',
                      bounce: 0.5,
                    }}
                    className="flex flex-col text-center text-green-600 text-2xl font-black"
                  >
                    <span>Contoh perubahan wujud benda</span>
                    <span>(mengkristal)</span>
                  </motion.h1>

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="mt-10"
                  >
                    <Image src="/perubahan/contoh/desc-5.png" alt="" width={500} height={300} />
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
                      className="fixed bottom-0 right-8"
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.7,
                      }}
                    >
                      <Image src="/perubahan/contoh/right-2.png" alt="" width={300} height={100} />
                    </motion.div>
                  </div>
                </>
              )}
            </div>
            {currentStep === 6 ? (
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

export default ExamplePerubahanSection;
