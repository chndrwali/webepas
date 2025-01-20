import DescriptionSection from '@/components/section/descriptionSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deskripsi',
};

const Page = () => {
  return <DescriptionSection />;
};

export default Page;
