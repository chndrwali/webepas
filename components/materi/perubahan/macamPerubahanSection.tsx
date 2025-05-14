'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ButtonNextPrev } from '@/components/button-next-prev';
import Header from '@/components/header';
import { SafeUser } from '@/types';

const MacamPerubahanSection = ({ currentUser }: { currentUser: SafeUser | null }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const totalSteps = 7;
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
        ? 'bg-mobile md:bg-desktop'
        : currentStep === 2
        ? 'bg-mobile_padat_4 md:bg-desktop_padat_4'
        : currentStep === 3
        ? 'bg-mobile md:bg-desktop'
        : currentStep === 4
        ? 'bg-mobile_example_padat md:bg-desktop_example_padat'
        : currentStep === 5
        ? 'bg-mobile md:bg-desktop'
        : currentStep === 6
        ? 'bg-mobile_padat_4 md:bg-desktop_padat_4'
        : currentStep === 7
        ? 'bg-mobile_macam_perubahan md:bg-desktop_macam_perubahan'
        : 'bg-mobile md:bg-desktop'
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
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      type: 'spring',
                      bounce: 0.5,
                    }}
                  >
                    <Image src="/perubahan/macam/title.png" alt="Logo" width={300} height={180} />
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="mt-10"
                  >
                    <Image src="/perubahan/macam/desc.png" alt="" width={300} height={300} />
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="mt-10"
                  >
                    <Image src="/perubahan/macam/desc-1.png" alt="" width={500} height={300} />
                  </motion.div>
                  <motion.div
                    className="hidden md:block fixed left-[200px]"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/perubahan/macam/left.png" alt="" width={250} height={100} />
                  </motion.div>
                  <motion.div
                    className=" fixed bottom-0 right-8"
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/perubahan/macam/zizah.png" alt="" width={280} height={100} />
                  </motion.div>
                </>
              )}
              {currentStep === 2 && (
                <>
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      type: 'spring',
                      bounce: 0.5,
                    }}
                  >
                    <Image src="/perubahan/macam/title-membeku.png" alt="Logo" width={250} height={180} />
                  </motion.div>

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="mt-10"
                  >
                    <Image src="/perubahan/macam/desc-membeku.png" alt="" width={500} height={300} />
                  </motion.div>

                  <motion.div
                    className=" fixed bottom-0 z-10 left-8"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/perubahan/macam/zizah-1.png" alt="" width={280} height={100} />
                  </motion.div>
                  <motion.div
                    className="hidden md:block fixed bottom-0 right-0"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/perubahan/macam/right.png" alt="" width={280} height={100} />
                  </motion.div>
                </>
              )}
              {currentStep === 3 && (
                <>
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      type: 'spring',
                      bounce: 0.5,
                    }}
                  >
                    <Image src="/perubahan/macam/title-mencair.png" alt="Logo" width={250} height={180} />
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="mt-10"
                  >
                    <Image src="/perubahan/macam/desc-mencair.png" alt="" width={500} height={300} />
                  </motion.div>
                  <motion.div
                    className="hidden md:block fixed bottom-0 z-10 left-8"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/perubahan/macam/left-1.png" alt="" width={280} height={100} />
                  </motion.div>
                  <motion.div
                    className=" fixed bottom-0 z-10 right-8"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/perubahan/macam/zizah.png" alt="" width={280} height={100} />
                  </motion.div>
                </>
              )}
              {currentStep === 4 && (
                <>
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      type: 'spring',
                      bounce: 0.5,
                    }}
                  >
                    <Image src="/perubahan/macam/title-menguap.png" alt="Logo" width={250} height={180} />
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="mt-10"
                  >
                    <Image src="/perubahan/macam/desc-menguap.png" alt="" width={500} height={300} />
                  </motion.div>
                  <motion.div
                    className="hidden md:block fixed bottom-[100px] right-0"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.7,
                    }}
                  >
                    <Image src="/perubahan/macam/right-1.png" alt="" width={300} height={100} />
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
                      <Image src="/perubahan/macam/zizah-1.png" alt="" width={300} height={100} className="" />
                    </motion.div>
                  </div>
                </>
              )}
              {currentStep === 5 && (
                <>
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      type: 'spring',
                      bounce: 0.5,
                    }}
                  >
                    <Image src="/perubahan/macam/title-mengembun.png" alt="Logo" width={250} height={180} />
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="mt-10"
                  >
                    <Image src="/perubahan/macam/desc-mengembun.png" alt="" width={500} height={300} />
                  </motion.div>
                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.1,
                    }}
                    className="fixed bottom-0 left-[100px] "
                  >
                    <Image src="/perubahan/macam/left-2.png" alt="" width={200} height={100} className="hidden md:block" />
                  </motion.div>

                  <div className="flex items-center justify-between">
                    <motion.div
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1.1,
                      }}
                      className="fixed bottom-0 right-0 "
                    >
                      <Image src="/perubahan/macam/zizah.png" alt="" width={300} height={100} className="" />
                    </motion.div>
                  </div>
                </>
              )}
              {currentStep === 6 && (
                <>
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      type: 'spring',
                      bounce: 0.5,
                    }}
                  >
                    <Image src="/perubahan/macam/title-menyublim.png" alt="Logo" width={250} height={180} />
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="mt-10"
                  >
                    <Image src="/perubahan/macam/desc-menyublim.png" alt="" width={500} height={300} />
                  </motion.div>

                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.1,
                    }}
                    className="hidden md:block fixed  right-0 "
                  >
                    <Image src="/perubahan/macam/right-2.png" alt="" width={250} height={100} className="" />
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
                      <Image src="/perubahan/macam/zizah-1.png" alt="" width={250} height={100} className="" />
                    </motion.div>
                  </div>
                </>
              )}

              {currentStep === 7 && (
                <>
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      type: 'spring',
                      bounce: 0.5,
                    }}
                  >
                    <Image src="/perubahan/macam/title-mengkristal.png" alt="Logo" width={250} height={180} />
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="mt-10"
                  >
                    <Image src="/perubahan/macam/desc-mengkristal.png" alt="" width={500} height={300} />
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
                      <Image src="/perubahan/macam/zizah.png" alt="" width={300} height={100} />
                    </motion.div>
                  </div>
                </>
              )}
            </div>
            {currentStep === 7 ? (
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

export default MacamPerubahanSection;
