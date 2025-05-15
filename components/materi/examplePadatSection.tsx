'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ButtonNextPrev } from '@/components/button-next-prev';
import Header from '@/components/header';

const ExamplePadatSection = () => {
  const router = useRouter();

  return (
    <main className={`flex min-h-screen flex-1 flex-col bg-mobile_example_padat md:bg-desktop_example_padat  bg-cover bg-center bg-no-repeat px-5 xs:px-10 md:px-16`}>
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
                <Image src="/materi/padat/example/title.png" alt="Logo" width={300} height={180} />
              </motion.div>
              <div className="flex flex-col md:flex-row">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                  }}
                  className="mt-10"
                >
                  <Image src="/materi/padat/example/left.png" alt="" width={600} height={300} />
                </motion.div>
                <motion.div
                  className=""
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 1.7,
                  }}
                >
                  <Image src="/materi/padat/example/right.png" alt="" width={400} height={100} />
                </motion.div>
              </div>
            </div>
            <ButtonNextPrev isLeft onClick={() => router.back()} />
          </>
        </div>
      </div>
    </main>
  );
};

export default ExamplePadatSection;
