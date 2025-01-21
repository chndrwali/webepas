'use client';

import { useState, useEffect } from 'react';
import { shuffle } from 'lodash';
import { Check, X } from 'lucide-react';
import { gameSounds } from '@/lib/utils';
import { Process, FeedbackState, MatchedPairs } from '@/types';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const processes: Process[] = [
  { name: 'Menyublim', image: '/matchmaking/menyublim.png' },
  { name: 'Mengkristal', image: '/matchmaking/mengkristal.png' },
  { name: 'Membeku', image: '/matchmaking/membeku.png' },
  { name: 'Mencair', image: '/matchmaking/mencair.png' },
  { name: 'Mengembun', image: '/matchmaking/mengembun.png' },
  { name: 'Menguap', image: '/matchmaking/menguap.png' },
];

const MatchMakingSection = () => {
  const router = useRouter();
  const [selectedProcess, setSelectedProcess] = useState<Process | null>(null);
  const [selectedImage, setSelectedImage] = useState<Process | null>(null);
  const [shuffledImages, setShuffledImages] = useState<Process[]>([]);
  const [score, setScore] = useState<number>(0);
  const [feedback, setFeedback] = useState<FeedbackState>({ show: false, correct: false });
  const [matchedPairs, setMatchedPairs] = useState<MatchedPairs>({});

  useEffect(() => {
    setShuffledImages(shuffle([...processes]));
  }, []);

  const handleProcessClick = (process: Process): void => {
    if (matchedPairs[process.name]) return; // Ignore if already matched
    setSelectedProcess(process);
    checkMatch(process, selectedImage);
  };

  const handleImageClick = (image: Process): void => {
    if (matchedPairs[image.name]) return; // Ignore if already matched
    setSelectedImage(image);
    checkMatch(selectedProcess, image);
  };

  const checkMatch = (process: Process | null, image: Process | null): void => {
    if (process && image) {
      const isCorrect = process.name === image.name;
      setFeedback({ show: true, correct: isCorrect });

      if (isCorrect) {
        gameSounds?.playCorrect();
        setScore(score + 1);
        setMatchedPairs((prev) => ({ ...prev, [process.name]: true }));
        setTimeout(() => {
          setSelectedProcess(null);
          setSelectedImage(null);
          setFeedback({ show: false, correct: false });
        }, 1000);
      } else {
        gameSounds?.playWrong();
        setTimeout(() => {
          setSelectedProcess(null);
          setSelectedImage(null);
          setFeedback({ show: false, correct: false });
        }, 1000);
      }
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            type: 'spring',
            bounce: 0.5,
          }}
          className="text-3xl font-bold text-center text-green-600 mb-8"
        >
          Menjodohkan Perubahan Wujud Benda
        </motion.h1>

        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <div className="text-xl font-semibold mb-4 text-center text-blue-600">
            Skor: {score} / {processes.length}
          </div>

          {feedback.show && (
            <div className={`flex items-center justify-center mb-4 ${feedback.correct ? 'text-green-500' : 'text-red-500'}`}>
              {feedback.correct ? <Check className="w-6 h-6 mr-2" /> : <X className="w-6 h-6 mr-2" />}
              {feedback.correct ? 'Benar!' : 'Coba lagi!'}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {processes.map((process) => (
                <motion.button
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 1.2,
                    type: 'spring',
                    bounce: 0.5,
                  }}
                  key={process.name}
                  onClick={() => handleProcessClick(process)}
                  disabled={matchedPairs[process.name]}
                  className={`w-full p-3 rounded-lg text-lg font-medium transition-all
                      ${matchedPairs[process.name] ? 'bg-green-500 text-white cursor-not-allowed opacity-50' : selectedProcess?.name === process.name ? 'bg-blue-500 text-white' : 'bg-blue-100 hover:bg-blue-200 text-blue-800'}`}
                >
                  {process.name}
                </motion.button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {shuffledImages.map((process) => (
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 1.2,
                    type: 'spring',
                    bounce: 0.5,
                  }}
                  key={process.name}
                  onClick={() => handleImageClick(process)}
                  className={`relative rounded-lg 
                      ${matchedPairs[process.name] ? 'cursor-not-allowed opacity-50 ring-4 ring-green-500' : selectedImage?.name === process.name ? 'cursor-pointer ring-4 ring-blue-500' : 'cursor-pointer hover:opacity-90'}`}
                >
                  <Image src={process.image} alt={process.name} className="w-full h-full object-contain" width={100} height={50} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className={`fixed bottom-4 z-10  right-4`}
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
          onClick={() => router.push('/menu')}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1 },
          }}
        >
          <Image src="/icon/home.png" alt="Next" width={60} height={44} />
        </motion.button>
      </motion.div>
    </>
  );
};

export default MatchMakingSection;
