import QuizSection from '@/components/section/quizSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz',
};

const Page = () => {
  return <QuizSection />;
};

export default Page;
