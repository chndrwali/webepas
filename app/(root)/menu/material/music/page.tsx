import MusicSection from '@/components/section/musicSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Musik',
};

const Page = () => {
  return <MusicSection />;
};

export default Page;
