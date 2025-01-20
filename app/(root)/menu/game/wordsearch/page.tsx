import WordSearchPuzzle from '@/components/wordPuzzle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Silang Kata',
};

const Page = () => {
  return <WordSearchPuzzle />;
};

export default Page;
