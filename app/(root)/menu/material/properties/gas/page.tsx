import MenuGasSection from '@/components/section/menuGasSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gas',
};

const Page = () => {
  return <MenuGasSection />;
};

export default Page;
