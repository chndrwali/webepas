'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ButtonNextPrev } from '@/components/button-next-prev';

const DescriptionSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const totalSteps = 3;
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

  return (
    <>
      {currentStep === 1 && (
        <>
          <div className="flex flex-col items-center justify-center pt-14 mt-0 sm:pt-0 sm:-mt-10 ">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.2,
                type: 'spring',
                bounce: 0.5,
              }}
            >
              <Image src="/icon/title-description.png" alt="Logo" width={250} height={180} />
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
            >
              <Image src="/icon/description.png" alt="" width={500} height={300} />
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
                <Image src="/icon/school.png" alt="" width={300} height={100} className="mb-8" />
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
              <Image src="/icon/zizah-description.png" alt="" width={240} height={100} />
            </motion.div>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <div className="flex flex-col items-center justify-center pt-14 mt-0 sm:pt-0 sm:-mt-10 ">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.2,
                type: 'spring',
                bounce: 0.5,
              }}
            >
              <Image src="/icon/title-identity.png" alt="Logo" width={250} height={180} />
            </motion.div>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
              >
                <Image src="/icon/identity-1.png" alt="" width={250} height={100} />
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.8,
                }}
              >
                <Image src="/icon/identity-2.png" alt="" width={600} height={300} />
              </motion.div>
            </div>
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
                <Image src="/icon/zizah-0.png" alt="" width={150} height={100} className="mb-8 hidden md:block" />
              </motion.div>
            </div>
          </div>
        </>
      )}

      {currentStep === 3 && (
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
              <Image src="/icon/title-create.png" alt="Logo" width={250} height={180} />
            </motion.div>
            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
              >
                <Image src="/icon/zizah-create.png" alt="" width={250} height={100} />
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="-mt-6"
              >
                <motion.button
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
                  <Image src="/icon/home.png" alt="" width={70} height={40} />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </>
      )}

      {currentStep === 2 && <ButtonNextPrev onClick={handlePrev} isLeft />}
      {currentStep === 3 ? <></> : <ButtonNextPrev onClick={handleNext} />}
    </>
  );
};

export default DescriptionSection;
