'use client';

import CrosswordPuzzle from '@/components/crosswordPuzzle';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ButtonNextPrev } from '@/components/button-next-prev';
import Image from 'next/image';

const CrosswordSection = () => {
  const router = useRouter();
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.2,
              type: 'spring',
              bounce: 0.5,
            }}
            className="text-2xl font-bold text-green-700 mb-6 text-center"
          >
            Teka-teki Silang (TTS)
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-semibold text-gray-800 mb-2">(Datar)</h2>
                <ol className=" list-inside space-y-2 text-gray-600">
                  <li>3. memiliki ruang dan menekan ke segala arah sifat dari wujud benda</li>
                  <li>7. ketika memasak air mendidih maka akan timbul perubahan wujud benda</li>
                  <li>8. bunga es yang melekat di freezer disebut</li>
                  <li>10. air dan madu contoh wujud benda</li>
                </ol>
              </div>
              <div>
                <h2 className="font-semibold text-gray-800 mb-2">(Turun)</h2>
                <ol className="list-inside space-y-2 text-gray-600">
                  <li>1. kapur barus disimpan di ruangan lama-kelamaan mengalami perubahan</li>
                  <li>2. kaca kamar mandi jika terkena uap air panas</li>
                  <li>4. contoh dari wujud benda gas</li>
                  <li>5. perubahan yang terjadi ketika ice cream di simpan disuhu ruangan panas</li>
                  <li>6. memiliki masa dan bentuknya tetap sifat dari wujud benda</li>
                  <li>9. kata lain dari panas</li>
                </ol>
              </div>
            </motion.div>
            <CrosswordPuzzle />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-4">
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.1,
          }}
        >
          <Image src="/icon/zizah-tts.png" alt="" width={250} height={100} className="hidden md:block" />
        </motion.div>
      </div>
      <ButtonNextPrev onClick={() => router.push('/menu/game/wordsearch')} />
    </>
  );
};

export default CrosswordSection;
