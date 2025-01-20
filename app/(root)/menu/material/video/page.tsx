import VideoSection from '@/components/section/videoSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video',
};

const Page = () => {
  return <VideoSection />;
};

export default Page;
