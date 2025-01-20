import MenuSection from '@/components/section/menuSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu',
};

const Page = () => {
  return <MenuSection />;
};

export default Page;
