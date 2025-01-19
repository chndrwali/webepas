import WelcomeSection from '@/components/section/welcomeSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome',
};

const Page = () => {
  return <WelcomeSection />;
};

export default Page;
