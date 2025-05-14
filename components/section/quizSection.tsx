'use client';

import { useConfirm } from '@/hooks/use-confirm';
import { toast } from '@/hooks/use-toast';
import { quizQuestions } from '@/lib/constant';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { ButtonNextPrev } from '../button-next-prev';

const QuizSection = () => {
  const router = useRouter();
  const [ConfirmDialog, confirm] = useConfirm('Apakah kamu yakin telah menyelesaikan soal?', 'Soal akan di-submit');
  const [currentPage, setCurrentPage] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [finalScore, setFinalScore] = useState<number | null>(null);
  const [userInfo, setUserInfo] = useState({ name: '', class: '' });
  const [hasStarted, setHasStarted] = useState(false);

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
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <ConfirmDialog />
      {!hasStarted ? (
        <>
          <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, type: 'spring', bounce: 0.5 }} className="mb-8">
            <Image src="/icon/quiz-text.png" alt="" width={150} height={100} />
          </motion.div>
          <div className="bg-white shadow-md p-8 rounded-md w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-center">Isi Identitas Dulu ya!</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!userInfo.name || !userInfo.class) {
                  toast({
                    title: 'Lengkapi Data',
                    description: 'Nama dan Kelas harus diisi.',
                    variant: 'destructive',
                  });
                  return;
                }
                setHasStarted(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium">Nama</label>
                <input type="text" className="w-full border rounded px-3 py-2" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} required />
              </div>
              <div>
                <label className="block text-sm font-medium">Kelas</label>
                <input type="text" className="w-full border rounded px-3 py-2" value={userInfo.class} onChange={(e) => setUserInfo({ ...userInfo, class: e.target.value })} required />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Mulai Quiz
              </button>
            </form>
          </div>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.1,
            }}
            className="fixed left-4 bottom-0"
          >
            <Image src="/icon/zizah-start-quiz.png" alt="" width={240} height={100} className="mb-8" />
          </motion.div>
          <motion.div
            className="hidden md:block fixed bottom-0 right-4"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.7,
            }}
          >
            <Image src="/icon/anak-pencil.png" alt="" width={240} height={100} />
          </motion.div>
          <ButtonNextPrev onClick={() => router.back()} isLeft />
        </>
      ) : finalScore === null ? (
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
        <div className="flex flex-col items-center justify-center space-y-4 max-w-3xl w-full text-center">
          <Image src="/icon/score.png" alt="score" width={200} height={80} />
          <div className="relative w-[200px] h-[80px] mx-auto">
            <Image src="/icon/number-score.png" alt="score" fill className="object-contain" />
            <p className="absolute inset-0 flex items-center justify-center text-xl font-bold text-black">{finalScore} points</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-gray-800">
              Nama: <span className="font-normal text-gray-600">{userInfo.name}</span>
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Kelas: <span className="font-normal text-gray-600">{userInfo.class}</span>
            </p>
          </div>

          <div className="w-full text-left bg-white/50 p-4 rounded-md">
            <h3 className="text-xl font-bold mb-2">Jawaban Kamu:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[350px] overflow-y-auto pr-2">
              {quizQuestions.map((q, idx) => (
                <div key={idx} className="bg-white shadow p-3 rounded">
                  <p className="font-semibold">
                    {idx + 1}. {q.question}
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold">A. {q.optionA}</p>
                    <p className="font-semibold">B. {q.optionB}</p>
                    <p className="font-semibold">C. {q.optionC}</p>
                    <p className="font-semibold">D. {q.optionD}</p>
                  </div>
                  <p>
                    Jawaban: <span className="font-medium text-blue-600">{userAnswers[idx] || '-'}</span>{' '}
                    {userAnswers[idx] === q.correctAnswer ? <span className="text-green-600 ml-2">✅ Benar</span> : <span className="text-red-500 ml-2">❌ Salah</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.1,
            }}
            className="fixed left-4 bottom-0"
          >
            <Image src="/icon/zizah-quiz.png" alt="" width={240} height={100} className="mb-8" />
          </motion.div>
          <motion.div
            className="hidden md:block fixed bottom-0 right-4"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.7,
            }}
          >
            <Image src="/icon/juara.png" alt="" width={240} height={100} />
          </motion.div>
          <motion.button className="mt-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => router.push('/menu')}>
            <Image src="/icon/home.png" alt="Home" width={80} height={60} />
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default QuizSection;
