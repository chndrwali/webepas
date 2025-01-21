import BasketsSection from '@/components/section/basketsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keranjang',
};

const Page = () => {
  return <BasketsSection />;
};

export default Page;
