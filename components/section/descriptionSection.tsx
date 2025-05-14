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
              <Image src="/icon/description.png" alt="" width={600} height={300} />
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
                <div className="space-y-3 max-w-[300px]">
                  <p className="text-lg font-bold text-teal-500 bg-white px-4 rounded-md w-fit">
                    Mata Pelajaran: <span className="text-gray-800 font-medium">IPAS</span>
                  </p>

                  <p className="text-lg font-bold text-teal-500 bg-white px-4 rounded-md w-fit">Capaian Pembelajaran:</p>

                  <div className="bg-white rounded-2xl border border-gray-300 p-4 shadow">
                    <p className="text-sm text-gray-800 leading-relaxed font-semibold">Peserta didik mengidentifikasi proses perubahan wujud zat dan perubahan bentuk energi dalam kehidupan sehari-hari.</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.8,
                }}
              >
                <div className="flex flex-col">
                  <div className="flex flex-col items-center justify-center gap-y-2 mb-2">
                    <p className="text-lg font-semibold text-teal-500 bg-white px-4 rounded-md">
                      Kelas: <span className="text-gray-800">IV</span>
                    </p>
                    <p className="text-lg font-semibold text-teal-500 bg-white px-4 rounded-md">Tujuan Pembelajaran:</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 max-w-xl">
                    <ol className="list-decimal list-inside text-sm font-semibold space-y-1">
                      <li>Setelah menggunakan media berbasis WEBEPAS, peserta didik mampu memahami perbedaan wujud di lingkungan sekitar dengan tepat.</li>
                      <li>Setelah menggunakan media berbasis WEBEPAS, peserta didik mampu membandingkan sifat-sifat benda berdasarkan wujudnya dengan tepat.</li>
                      <li>Setelah menggunakan media berbasis WEBEPAS, peserta didik mampu mengetahui pengertian dan macam-macam perubahan wujud benda dengan tepat.</li>
                      <li>Setelah menggunakan media berbasis WEBEPAS, peserta didik mampu mengetahui contoh peristiwa perubahan wujud dalam kehidupan sehari-hari dengan tepat.</li>
                    </ol>
                  </div>
                </div>
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
