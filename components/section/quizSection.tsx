'use client';

import { useConfirm } from '@/hooks/use-confirm';
import { toast } from '@/hooks/use-toast';
import { quizQuestions } from '@/lib/constant';
import { gameSounds } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

const QuizSection = () => {
  const router = useRouter();
  const [ConfirmDialog, confirm] = useConfirm('Apakah kamu yakin telah menyelesaikan soal?', 'Soal akan di-submit');
  const [currentPage, setCurrentPage] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [finalScore, setFinalScore] = useState<number | null>(null);

  const questionsPerPage = 5;
  const totalPages = Math.ceil(quizQuestions.length / questionsPerPage);

  const questionContainerRef = useRef<HTMLDivElement>(null);

  const handleNextPage = () => {
    const start = currentPage * questionsPerPage;
    const end = start + questionsPerPage;

    const allAnswered = quizQuestions.slice(start, end).every((_, index) => userAnswers[start + index] !== undefined);

    if (!allAnswered) {
      toast({
        title: 'Jawaban Belum Lengkap',
        description: 'Harap jawab semua soal sebelum melanjutkan ke halaman berikutnya!',
        variant: 'destructive',
      });
      return;
    }

    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }

    if (questionContainerRef.current) {
      questionContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }

    if (questionContainerRef.current) {
      questionContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAnswerClick = (questionIndex: number, selectedOption: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmit = async () => {
    let score = 0;

    quizQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        score += 5;
      }
    });

    const ok = await confirm();
    if (ok) {
      setFinalScore(score);
    }
  };

  const getCurrentQuestions = () => {
    const start = currentPage * questionsPerPage;
    const end = start + questionsPerPage;
    return quizQuestions.slice(start, end);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <ConfirmDialog />
      {finalScore === null ? (
        <>
          <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, type: 'spring', bounce: 0.5 }} className="mb-8">
            <Image src="/icon/title-quiz.png" alt="" width={200} height={200} />
          </motion.div>
          <motion.div
            ref={questionContainerRef}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col w-full max-w-4xl h-4/6 bg-white/40 rounded-lg shadow-lg overflow-y-auto p-6 space-y-4"
          >
            {getCurrentQuestions().map((question, index) => {
              const questionIndex = currentPage * questionsPerPage + index;
              return (
                <motion.div key={index} initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.1 }} className="bg-gray-50 p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold">
                    {questionIndex + 1}. {question.question}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {['A', 'B', 'C', 'D'].map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswerClick(questionIndex, option)}
                        className={`text-left p-3 rounded-md border ${userAnswers[questionIndex] === option ? 'bg-blue-500 text-white' : 'border-gray-200 hover:bg-blue-50 hover:border-blue-300'} transition-colors`}
                      >
                        <span className="font-semibold mr-2">{option}.</span>
                        {question[`option${option}` as keyof typeof question]}
                      </button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="flex justify-between w-full mt-8 px-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handlePrevPage} disabled={currentPage === 0} className={`flex items-center px-4 py-2 `}>
              <Image src="/icon/button-prev.png" alt="prev" width={50} height={50} />
            </motion.button>

            {currentPage === totalPages - 1 ? (
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleSubmit} className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
                Submit
              </motion.button>
            ) : (
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleNextPage} className={`flex items-center px-4 py-2  `}>
                <Image src="/icon/button-next.png" alt="next" width={50} height={50} />
              </motion.button>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image src="/icon/score.png" alt="score" width={200} height={80} />
          <Image src="/icon/number-score.png" alt="score" width={200} height={80} />

          <p className="text-2xl font-bold -mt-[65px]">{finalScore} points</p>
          <motion.button
            className="mt-12"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
            onClick={() => router.push('/menu')}
          >
            <Image src="/icon/home.png" alt="Home" width={80} height={60} />
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default QuizSection;
